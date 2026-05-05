import { useCallback } from "react";
import { type Juego } from "../interface/TypesJuego";

const useFetchJuegos = () => {
  const getJuegos = useCallback(async (): Promise<Juego[]> => {
    const datos = await fetch("http://localhost:8080/api/juegos");
    const juegos = await datos.json();

    return juegos;
  }, []);

  return { getJuegos };
};

export default useFetchJuegos;
