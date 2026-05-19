import { useState, useContext, useEffect } from "react";
import { type Juego, type ErrorResponse } from "../interface/TypesJuego";
import { NavBar } from "../components/NavBar";
import { JuegosContext } from "../context/JuegosContext";

const FormularioJuego = () => {
  const { juegoAEditar, setJuegoAEditar, editarJuego } =
    useContext(JuegosContext);

  const [nuevoJuego, setNuevoJuego] = useState<Juego>({
    nombre: "",
    imagenUrl: "",
    plataforma: "STEAM",
    estado: "OBTENIDO",
  });

  const [errores, setErrores] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    if (juegoAEditar) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setNuevoJuego(juegoAEditar);
    }
  }, [juegoAEditar]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (juegoAEditar && juegoAEditar.id) {
      await editarJuego(juegoAEditar.id, nuevoJuego);
      return;
    }

    try {
      const datos = await fetch("http://localhost:8080/api/juegos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoJuego),
      });
      const juegos = await datos.json();

      if (!datos.ok) {
        setErrores(juegos);
        return;
      }

      setErrores(null);
      setNuevoJuego({
        nombre: "",
        imagenUrl: "",
        plataforma: "STEAM",
        estado: "OBTENIDO",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />

      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mt-16 px-6 pb-10">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-700 rounded-2xl p-6 flex flex-col gap-4 w-full max-w-md shadow-lg"
        >
          <label htmlFor="nombre" className="text-gray-200 font-semibold">
            Nombre:
          </label>

          <input
            type="text"
            id="nombre"
            value={nuevoJuego.nombre}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-100 outline-none focus:border-gray-500"
            onChange={(e) =>
              setNuevoJuego({ ...nuevoJuego, nombre: e.target.value })
            }
          />

          <label htmlFor="imagenUrl" className="text-gray-200 font-semibold">
            Url de la imagen:
          </label>

          <input
            type="text"
            id="imagenUrl"
            value={nuevoJuego.imagenUrl}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-100 outline-none focus:border-gray-500"
            onChange={(e) =>
              setNuevoJuego({ ...nuevoJuego, imagenUrl: e.target.value })
            }
          />

          <label htmlFor="plataforma" className="text-gray-200 font-semibold">
            Plataforma:
          </label>

          <select
            id="plataforma"
            value={nuevoJuego.plataforma}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-100 outline-none focus:border-gray-500"
            onChange={(e) =>
              setNuevoJuego({ ...nuevoJuego, plataforma: e.target.value })
            }
          >
            <option value="STEAM">Steam</option>
            <option value="EPIC">Epic Games</option>
            <option value="PS2">PS2</option>
            <option value="PS5">PS5</option>
            <option value="XBOX">XBOX</option>
            <option value="GOG">GOG</option>
            <option value="OTRO">Otro</option>
          </select>

          <label htmlFor="estado" className="text-gray-200 font-semibold">
            Estado:
          </label>

          {/*
           *  Definicion de cada estado:
           *
           * . OBTENIDO (por defecto): Indicara que tengo un juego en cualquiera de mis paltadormas.
           *
           * . JUGANDO: Indicara que ese juego ya esta instalada en mi maquina y lo estoy jugando actualmente.
           *
           * . PENDIENTE: Indicara que sera mi proximo juego con prioridad para jugar despues.
           *
           * . TERMINADO: Indicara que ya termine un juego y ya lo desinstale de mi maquina.
           */}

          <select
            id="estado"
            value={nuevoJuego.estado}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-100 outline-none focus:border-gray-500"
            onChange={(e) =>
              setNuevoJuego({ ...nuevoJuego, estado: e.target.value })
            }
          >
            <option value="OBTENIDO">Obtenido</option>
            <option value="JUGANDO">Jugando</option>
            <option value="PENDIENTE">Pendiente</option>
            <option value="TERMINADO">Terminado</option>
          </select>

          {errores && (
            <div className="bg-red-900/30 border border-red-700 rounded-xl p-4 mt-2">
              <p className="text-red-300 font-bold mb-2">
                {errores.description}
              </p>

              <ul className="list-disc pl-5 text-red-200 space-y-1">
                {errores.reasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 transition-colors duration-200 text-white font-bold py-3 rounded-lg mt-2 border border-gray-600 w-full"
            >
              {juegoAEditar ? "Actualizar" : "Crear"}
            </button>

            {juegoAEditar && (
              <button
                type="button"
                onClick={() => {
                  setJuegoAEditar(null);
                  setNuevoJuego({
                    nombre: "",
                    imagenUrl: "",
                    plataforma: "STEAM",
                    estado: "OBTENIDO",
                  });
                }}
                className="bg-red-900/50 hover:bg-red-900/70 transition-colors duration-200 text-red-200 font-bold py-3 rounded-lg border border-red-700 w-full"
              >
                Cancelar
              </button>
            )}
          </div>
        </form>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center w-full max-w-md">
          <span className="text-gray-100 text-xl font-bold mb-4">
            Previsualización
          </span>

          <img
            className="imagen-card"
            src={nuevoJuego.imagenUrl || undefined}
            alt={nuevoJuego.nombre || undefined}
          />
        </div>
      </div>
    </>
  );
};

export default FormularioJuego;
