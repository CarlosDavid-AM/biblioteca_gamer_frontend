import { createContext, useEffect, useState } from "react";
import useFetchJuegos from "../hooks/useFetchJuegos";
import type { Juego } from "../interface/TypesJuego";
import { useNavigate } from "react-router";

// eslint-disable-next-line react-refresh/only-export-components
export const JuegosContext = createContext(null);

export function JuegosProvider({ children }: { children: React.ReactNode }) {
  const [juegos, setJuegos] = useState<Juego[]>([]);
  const [loading, setLoading] = useState(true);

  const [estado, setStado] = useState<string>("");
  const [plataforma, setPlataforma] = useState<string>("");

  const [search, setSearch] = useState<string>("");

  const [juegoAEditar, setJuegoAEditar] = useState<Juego | null>(null);

  const { getGames, updateGame, deleteGame } = useFetchJuegos();
  const navigate = useNavigate();

  ////////////////////////////////////////////////////////////////////

  // Funcionalidad deñ fitro del NavBar
  const handleFilter = async () => {
    //console.log(estado, plataforma);

    const urlEstado = `http://localhost:8080/api/juegos/estado/${estado}`;
    const urlPlataforma = `http://localhost:8080/api/juegos/plataforma/${plataforma}`;
    const urlEstadoPlataforma = `http://localhost:8080/api/juegos/estado-plataforma/${estado}/${plataforma}`;

    if (estado === "" && plataforma === "") {
      alert("Por favor, seleccione un estado o una plataforma");
      return;
    }

    if (estado !== "" && plataforma !== "") {
      const datos = await fetch(urlEstadoPlataforma);
      const games = await datos.json();
      setJuegos(games);
      console.log(games);
    }

    if (estado !== "" && plataforma === "") {
      const datos = await fetch(urlEstado);
      const games = await datos.json();
      setJuegos(games);
      console.log(games);
    }

    if (plataforma !== "" && estado === "") {
      const datos = await fetch(urlPlataforma);
      const games = await datos.json();
      setJuegos(games);
      console.log(games);
    }
  };
  //////////////////////////////////////////////

  // Metodo para eliminar un juego
  const eliminarJuego = async (id: number) => {
    if (confirm("¿Estas seguro de eliminar el juego?")) {
      await deleteGame(id);
      setJuegos(juegos.filter((juego) => juego.id !== id));
    } else return;
  };
  //////////////////////////////////////////////

  // Metodo para editar un juego
  const editarJuego = async (id: number, data?: Juego) => {
    if (!data) {
      // Obterner los datos por id
      const datosId = juegos.find((juego) => juego.id === id);
      setJuegoAEditar(datosId || null);

      // Redirigir al formulario de editar
      navigate("/agregar");
    } else {
      const response = await updateGame(id, data);
      if (response) {
        setJuegos(juegos.map((j) => (j.id === id ? response : j)));
        setJuegoAEditar(null);
        navigate("/");
      } else {
        alert("Error al actualizar el juego");
      }
    }
  };

  ////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const cargarJuegos = async () => {
      try {
        setLoading(true);
        const datos = await getGames();
        setJuegos(datos);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    cargarJuegos();
  }, [getGames]);

  return (
    <JuegosContext.Provider
      value={{
        juegos,
        setJuegos,
        loading,
        setStado,
        setPlataforma,
        handleFilter,
        eliminarJuego,
        editarJuego,
        juegoAEditar,
        setJuegoAEditar,
        search,
        setSearch,
      }}
    >
      {children}
    </JuegosContext.Provider>
  );
}
