import { useEffect, useState } from "react";

interface Juego {
  id: number;
  nombre: string;
  imagenUrl: string;
  plataforma: string;
  estado: string;
}

const App = () => {
  const [juegos, setJuegos] = useState<Juego[]>([]);

  useEffect(() => {
    const getJuegos = async () => {
      const datos = await fetch("http://localhost:8080/api/juegos");
      const juegos = await datos.json();
      setJuegos(juegos);
    };

    getJuegos();
  }, []);

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
