import React from "react";

interface Props {
  tiles: string[];
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

export function Materials({ tiles }: Props): JSX.Element {
  const woodenTiles = tiles.filter((item) => item === "wooden").length;
  const grassTiles = tiles.filter((item) => item === "grass").length;

  const { boxes: woodenBoxes, leftOver: woodenLeftOver } =
    calculateBoxesPerTiles(woodenTiles);
  const { boxes: grassBoxes, leftOver: grassLeftOver } =
    calculateBoxesPerTiles(grassTiles);

  return (
    <section>
      <div>
        <header>
          <h3>Wood:</h3>
        </header>
        <p>Used: {woodenTiles}</p>
        <p>Boxes: {woodenBoxes}</p>
        <p>Leftover: {woodenLeftOver}</p>
      </div>
      <div>
        <header>
          <h3>Grass:</h3>
        </header>
        <p>USed: {grassTiles}</p>
        <p>Boxes: {grassBoxes}</p>
        <p>Leftover: {grassLeftOver}</p>
      </div>
    </section>
  );
}
