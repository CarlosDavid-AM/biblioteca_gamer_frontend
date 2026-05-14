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

  const updateGame = useCallback(async (id: number, data: Juego) => {
    try {
      const resp = await fetch(`http://localhost:8080/api/juegos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const juegoActualizado = await resp.json();

      if (resp.ok) {
        return juegoActualizado;
      }
      return "No se pudo actualizar el juego";
    } catch (error) {
      console.log(error);
    }
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

  return { getGames, updateGame, deleteGame };
};

export default useFetchJuegos;
