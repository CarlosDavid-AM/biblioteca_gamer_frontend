import { useCallback } from "react";
import { type Juego } from "../interface/TypesJuego";

const useFetchJuegos = () => {
  const getJuegos = useCallback(async (estado?: string): Promise<Juego[]> => {
    const url = estado
      ? `http://localhost:8080/api/juegos/${estado}`
      : "http://localhost:8080/api/juegos";

    const datos = await fetch(url);
    const juegos = await datos.json();

    return juegos;
  }, []);

  return { getJuegos };
};

export default useFetchJuegos;
