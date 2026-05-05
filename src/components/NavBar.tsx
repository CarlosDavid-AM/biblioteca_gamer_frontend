import { Link } from "react-router";

export const NavBar = () => {
  return (
    <header>
      <nav>
        <h2>Mi Biblioteca Gamer</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">Nuevo Juego</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
