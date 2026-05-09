import { useCallback } from "react";
import { type Juego } from "../interface/TypesJuego";

const useFetchJuegos = () => {
  const getGames = useCallback(async (estado?: string): Promise<Juego[]> => {
    const url = estado
      ? `http://localhost:8080/api/juegos/${estado}`
      : "http://localhost:8080/api/juegos";

    const datos = await fetch(url);
    const juegos = await datos.json();

    return juegos;
  }, []);

  const deleteGame = useCallback(async (id: number) => {
    try {
      await fetch(`http://localhost:8080/api/juegos/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      return error;
    }
  }, []);

  return { getGames, deleteGame };
};

export default useFetchJuegos;
