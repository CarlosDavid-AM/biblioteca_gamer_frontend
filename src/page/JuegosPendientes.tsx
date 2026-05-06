import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import type { Juego } from "../interface/TypesJuego";
import useFetchJuegos from "../hooks/useFetchJuegos";
import JuegosCard from "../components/JuegosCard";

const JuegosPendientes = () => {
  const { getJuegos } = useFetchJuegos();
  const [juegos, setJuegos] = useState<Juego[]>([]);

  useEffect(() => {
    const obtenerJuegos = async () => {
      const juegos = await getJuegos("pendientes");
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

export default JuegosPendientes;
