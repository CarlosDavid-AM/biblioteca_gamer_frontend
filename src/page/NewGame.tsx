import { useState } from "react";
import { type Juego } from "../interface/JuegoInterface";

const NewGame = () => {
  const [nuevoJuego, setNuevoJuego] = useState<Juego>({
    nombre: "",
    imagenUrl: "",
    plataforma: "STEAM",
    estado: "OBTENIDO",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      nuevoJuego.nombre === "" ||
      nuevoJuego.imagenUrl === "" ||
      nuevoJuego.plataforma === "" ||
      nuevoJuego.estado === ""
    ) {
      alert("Por favor complete todos los campos");
      return;
    }

    console.log(nuevoJuego);

    ////

    try {
      const datos = await fetch("http://localhost:8080/api/juegos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoJuego),
      });
      const juegos = await datos.json();
      console.log(juegos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Nuevo Juego</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          onChange={(e) =>
            setNuevoJuego({ ...nuevoJuego, nombre: e.target.value })
          }
        />

        <label htmlFor="imagenUrl">Url de la imagen:</label>
        <input
          type="text"
          id="imagenUrl"
          onChange={(e) =>
            setNuevoJuego({ ...nuevoJuego, imagenUrl: e.target.value })
          }
        />

        <label htmlFor="plataforma">Plataforma:</label>
        <select
          id="plataforma"
          onChange={(e) =>
            setNuevoJuego({ ...nuevoJuego, plataforma: e.target.value })
          }
        >
          <option value="STEAM">Steam</option>
          <option value="EPIC">Epic Games</option>
          <option value="PS2">PS2</option>
          <option value="PS5">PS5</option>
          <option value="XBOX">XBOX</option>
          <option value="GOG">GOG</option>
        </select>

        {/*
         *  Definicion de cada estado:
         *
         * . OBTENIDO (por defecto): Indicara que tengo un juego en cualquiera de mis paltadormas.
         *
         * . JUGANDO: Indicara que ese juego ya esta instalada en mi maquina y lo estoy jugando actualmente.
         *
         * . PENDIENTE: Indicara que sera mi proximo juego con prioridad para jugar despues.
         *
         * . TERMINADO: Indicara que ya termine un juego y ya lo desinstale de mi maquina.
         */}

        <label htmlFor="estado">Estado:</label>
        <select
          id="estado"
          onChange={(e) =>
            setNuevoJuego({ ...nuevoJuego, estado: e.target.value })
          }
        >
          <option value="OBTENIDO">Obtenido</option>
          <option value="JUGANDO">Jugando</option>
          <option value="PENDIENTE">Pendiente</option>
          <option value="TERMINADO">Terminado</option>
        </select>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default NewGame;
