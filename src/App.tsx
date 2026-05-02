import { useEffect, useState } from "react";
import useFetchJuegos from "./hooks/useFetchJuegos";
import { type Juego } from "./interface/JuegoInterface";

const App = () => {
  const { getJuegos } = useFetchJuegos();
  const [juegos, setJuegos] = useState<Juego[]>([]);

  useEffect(() => {
    const obtenerJuegos = async () => {
      const juegos = await getJuegos();
      setJuegos(juegos);
    };

    obtenerJuegos();
  }, [getJuegos]);

  return (
    <div>
      <h1>Juegos</h1>
      <ul>
        {juegos.map((juego: Juego) => (
          <li key={juego.id}>
            <img
              style={{ width: "100px", height: "100px" }}
              src={juego.imagenUrl}
              alt={juego.nombre}
            />
            <p>{juego.nombre}</p>
            <p>{juego.plataforma}</p>
            <p>{juego.estado}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
