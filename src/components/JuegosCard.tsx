import type { Juego } from "../interface/TypesJuego";

const JuegosCard = ({ juegos }: { juegos: Juego[] }) => {
  return (
    <ul>
      {juegos.map((juego: Juego) => (
        <li key={juego.id}>
          <img
            style={{ width: "100px", height: "100px" }}
            src={juego.imagenUrl}
            alt={juego.nombre}
          />
          <p>{juego.nombre}</p>
          <p>{juego.plataforma}</p>
          <p>{juego.estado}</p>
        </li>
      ))}
    </ul>
  );
};

export default JuegosCard;
