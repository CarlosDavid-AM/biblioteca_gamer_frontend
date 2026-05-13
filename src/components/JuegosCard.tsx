import type { Juego } from "../interface/TypesJuego";
import { useContext } from "react";
import { JuegosContext } from "../context/JuegosContext";

const JuegosCard = () => {
  const { juegos, loading, eliminarJuego } = useContext(JuegosContext);

  if (loading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
        {juegos.map((juego: Juego) => (
          <li key={juego.id} className="w-full flex justify-center">
            {/* cards */}
            <div className="flex flex-col bg-gray-900 border my-8 border-gray-700 rounded-2xl p-5 shadow-lg items-center justify-center w-full max-w-md">
              <img
                className="imagen-card"
                src={juego.imagenUrl || undefined}
                alt={juego.nombre || undefined}
              />

              <div className="flex flex-col flex-1 p-4 leading-normal">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-white text-center">
                  {juego.nombre}
                </h5>

                <p className="mb-3 text-plataforma-estado">
                  Plataforma: {juego.plataforma}
                </p>

                <p className="mb-5 text-plataforma-estado">
                  Estado: {juego.estado}
                </p>

                <div className="flex gap-3 mt-auto">
                  <button className="base-style-button bg-blue-600 border border-blue-700 hover:bg-blue-700">
                    Editar
                  </button>

                  <button
                    type="button"
                    onClick={() => eliminarJuego(juego.id)}
                    className="base-style-button  bg-red-600 border border-red-700 hover:bg-red-700"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default JuegosCard;
