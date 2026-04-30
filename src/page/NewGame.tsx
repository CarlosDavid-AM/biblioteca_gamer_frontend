const NewGame = () => {
  return (
    <>
      <h2>Nuevo Juego</h2>
      <form action="">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" />

        <label htmlFor="imagenUrl">Url de la imagen:</label>
        <input type="text" id="imagenUrl" />

        <label htmlFor="plataforma">Plataforma:</label>
        <select id="plataforma">
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
        <select id="estado">
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
