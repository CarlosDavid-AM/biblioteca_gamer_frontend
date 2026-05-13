import { useState } from "react";
import { Link } from "react-router";
import type { Juego } from "../interface/TypesJuego";

export const NavBar = ({
  filtroJuego,
}: {
  filtroJuego: (juegos: Juego[]) => void;
}) => {
  const [juegos, setJuegos] = useState<Juego[]>([]);
  const [estado, setStado] = useState<string>("");
  const [plataforma, setPlataforma] = useState<string>("");

  const handleFilter = async () => {
    //console.log(estado, plataforma);

    const urlEstado = `http://localhost:8080/api/juegos/estado/${estado}`;
    const urlPlataforma = `http://localhost:8080/api/juegos/plataforma/${plataforma}`;
    const urlEstadoPlataforma = `http://localhost:8080/api/juegos/estado-plataforma/${estado}/${plataforma}`;

    if (estado === "" && plataforma === "") {
      alert("Por favor, seleccione un estado o una plataforma");
      return;
    }

    if (estado !== "" && plataforma !== "") {
      const datos = await fetch(urlEstadoPlataforma);
      const games = await datos.json();
      setJuegos(games);
      console.log(games);

      filtroJuego(games);
    }

    if (estado !== "" && plataforma === "") {
      const datos = await fetch(urlEstado);
      const games = await datos.json();
      setJuegos(games);
      console.log(games);
    }

    if (plataforma !== "" && estado === "") {
      const datos = await fetch(urlPlataforma);
      const games = await datos.json();
      setJuegos(games);
      console.log(games);
    }
  };

  return (
    <header className="bg-gray-900 border-b border-gray-700 items-center">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <h2 className="text-gray-200 text-lg font-semibold">
          <Link to="/">Mi Biblioteca Gamer</Link>
        </h2>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>
        <ul className="flex gap-6 text-sm text-gray-300 items-center">
          <li>
            <Link
              to="/agregar"
              className=" bg-gray-500 px-2 py-1 hover:bg-gray-600 rounded"
            >
              Agregar
            </Link>
          </li>
          <li className="bg-gray-500 rounded p-1">
            <ul className="flex gap-x-2 p-1">
              <li>
                <select
                  name=""
                  id=""
                  className="bg-gray-800 text-gray-200 border border-gray-700 rounded px-3 py-1"
                  value={estado}
                  onChange={(e) => setStado(e.target.value)}
                >
                  <option value="">Estados</option>
                  <option value="OBTENIDO">Obtenido</option>
                  <option value="JUGANDO">Jugando</option>
                  <option value="PENDIENTE">Pendiente</option>
                  <option value="TERMINADO">Terminado</option>
                </select>
              </li>
              <li>
                <select
                  name=""
                  id=""
                  className="bg-gray-800 text-gray-200 border border-gray-700 rounded px-3 py-1"
                  value={plataforma}
                  onChange={(e) => setPlataforma(e.target.value)}
                >
                  <option value="">Plataformas</option>
                  <option value="STEAM">Steam</option>
                  <option value="EPIC">Epic Games</option>
                  <option value="PS2">PS2</option>
                  <option value="PS5">PS5</option>
                  <option value="XBOX">XBOX</option>
                  <option value="GOG">GOG</option>
                </select>
              </li>
              <li className="flex items-center">
                <button
                  className="bg-gray-800 hover:bg-gray-950 text-gray-200 border border-gray-700 rounded px-3 py-1"
                  onClick={handleFilter}
                >
                  Filtrar
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};
