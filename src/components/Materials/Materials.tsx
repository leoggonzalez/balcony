import React from "react";

interface Props {
  woodenTiles: number;
  grassTiles: number;
}

function calculateBoxesPerTiles(tiles: number): {
  boxes: number;
  leftOver: number;
} {
  return {
    boxes: Math.ceil(tiles / 9),
    leftOver: Math.ceil(tiles / 9) * 9 - tiles,
  };
}

export function Materials({ woodenTiles, grassTiles }: Props): JSX.Element {
  const { boxes: woodenBoxes, leftOver: woodenLeftOver } =
    calculateBoxesPerTiles(woodenTiles);
  const { boxes: grassBoxes, leftOver: grassLeftOver } =
    calculateBoxesPerTiles(grassTiles);

  return (
    <section>
      <div>
        <header>
          <h3>Madera:</h3>
        </header>
        <p>Usado: {woodenTiles}</p>
        <p>Cajas: {woodenBoxes}</p>
        Sobran: {woodenLeftOver}
      </div>
      <div>
        <header>
          <h3>Pasto sintetico:</h3>
        </header>
        <p>Usado: {grassTiles}</p>
        <p>Cajas: {grassBoxes}</p>
        <p>Sobran: {grassLeftOver}</p>
      </div>
    </section>
  );
}
