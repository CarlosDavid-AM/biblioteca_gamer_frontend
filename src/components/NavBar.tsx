import { Link } from "react-router";

export const NavBar = () => {
  return (
    <header>
      <nav>
        <h2>
          <Link to="/">Mi Biblioteca Gamer</Link>
        </h2>
        <ul>
          <li>
            <Link to="/agregar">Agregar</Link>
          </li>
          <li>
            <Link to="/pendientes">Pendientes</Link>
          </li>
          <li>
            <Link to="/terminados">Juegos Terminados</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
