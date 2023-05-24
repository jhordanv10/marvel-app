interface propsProgress {
  meta: number;
  metaAlcanzada: number;
}

export const Progress = ({ meta, metaAlcanzada }: propsProgress) => {
  const calcLevelProgress = () => {
    if (metaAlcanzada >= meta) {
      return 100; // Si la meta alcanzada es igual o mayor a la meta, el nivel de progreso es del 100%
    } else {
      return (metaAlcanzada / meta) * 100; // Calcula el nivel de progreso en base a la proporción de meta alcanzada
    }
  };

  const calcFillWidthReached = () => {
    const levelProgress = calcLevelProgress();
    if (levelProgress < 100) {
      return `calc(${levelProgress}% - 8px)`; // Ajusta el ancho del relleno azul
    } else {
      return "100%";
    }
  };

  const calcFillWidthUnreached = () => {
    const levelProgress = calcLevelProgress();
    if (levelProgress < 100) {
      return `calc(${levelProgress}%)`; // Ajusta el ancho del relleno azul
    }
  };

  const generateDiagonalLines = () => {
    const lineCount = Math.floor(meta / 10); // Cantidad de líneas diagonales
    const lineRotation = 45; // Ángulo de rotación de las líneas

    const lines = [];
    for (let i = 1; i <= lineCount; i++) {
      const linePosition = (100 / lineCount) * i;
      const lineStyle = {
        top: "6px",
        left: `calc(${linePosition}% - 4px)`,
        width: "1px",
        height: "16px",
        background: "rgba(0, 0, 0, 1)",
        position: "absolute",
        zIndex: 5,
      };
      lines.push(<div key={i} style={lineStyle}></div>);
    }
    return lines;
  };

  return (
    <div className="w-full px-10 py-2">
      <h2 className="text-center mb-4">Progreso de películas</h2>
      <div className="flex flex-col w-full">
        <span className="text-right text-xs">
          {meta} Películas
          <br />
          Meta de producción
        </span>
        <div className="w-full h-7 bg-gray-4 my-2 shadow-linearBar skew-x-[-18deg] rotate-180 ">
          <div
            className="h-full bg-gray-3 p-1 relative "
            style={{ width: "100%" }}
          >
            <div
              className=" bg-white absolute top-1.5 h-4 bottom-0 left-1 "
              style={{
                width: calcFillWidthReached(),
                // transform: "rotate(45deg)",
              }}
            ></div>
            {generateDiagonalLines()}
            <div
              className=" z-0 bg-progress-bar absolute top-1.5 h-4 bottom-0 right-1 "
              style={{
                width: calcFillWidthUnreached(),
              }}
            ></div>
          </div>
        </div>
        <span
          className="text-left mt-auto relative text-xs w-20 text-blue"
          style={{ left: `calc(${calcLevelProgress()}% - 80px)` }}
        >
          Meta alcanzada: {metaAlcanzada}
        </span>
      </div>
    </div>
  );
};
