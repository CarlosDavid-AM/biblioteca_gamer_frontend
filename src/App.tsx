import { useEffect, useState } from "react";
import useFetchJuegos from "./hooks/useFetchJuegos";
import { type Juego } from "./interface/TypesJuego";
import { NavBar } from "./components/NavBar";
import JuegosCard from "./components/JuegosCard";

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
      <NavBar />
      <h1>Juegos</h1>
      <JuegosCard juegos={juegos} />
    </div>
  );
};

export default App;
