import { NavBar } from "../components/NavBar";
import { useEffect, useState } from "react";
import type { Juego } from "../interface/TypesJuego";
import useFetchJuegos from "../hooks/useFetchJuegos";
import JuegosCard from "../components/JuegosCard";

const JuegosTerminados = () => {
  const { getJuegos } = useFetchJuegos();
  const [juegos, setJuegos] = useState<Juego[]>([]);

  useEffect(() => {
    const obtenerJuegos = async () => {
      const juegos = await getJuegos("terminados");
      setJuegos(juegos);
    };

    obtenerJuegos();
  }, [getJuegos]);

  return (
    <div>
      <NavBar />
      <JuegosCard juegos={juegos} />
    </div>
  );
};

export default JuegosTerminados;
