import { useContext } from "react";
import { Link } from "react-router";
import { JuegosContext } from "../context/JuegosContext";

export const NavBar = () => {
  const {
    estado,
    setStado,
    plataforma,
    setPlataforma,
    handleFilter,
    search,
    setSearch,
  } = useContext(JuegosContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
            value={search}
            onChange={handleSearch}
            placeholder="Buscar..."
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
