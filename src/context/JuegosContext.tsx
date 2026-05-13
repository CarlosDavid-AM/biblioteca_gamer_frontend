import { createContext, useEffect, useState } from "react";
import useFetchJuegos from "../hooks/useFetchJuegos";
import type { Juego } from "../interface/TypesJuego";

// eslint-disable-next-line react-refresh/only-export-components
export const JuegosContext = createContext(null);

export function JuegosProvider({ children }: { children: React.ReactNode }) {
  const [juegos, setJuegos] = useState<Juego[]>([]);
  const [loading, setLoading] = useState(true);

  const { getGames } = useFetchJuegos();

  useEffect(() => {
    const cargarJuegos = async () => {
      try {
        setLoading(true);
        const datos = await getGames();
        setJuegos(datos);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    cargarJuegos();
  }, [getGames]);

  return (
    <JuegosContext.Provider
      value={{
        juegos,
        loading,
      }}
    >
      {children}
    </JuegosContext.Provider>
  );
}
