import React from "react";
import "./Materials.scss";

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
      <table className="materials">
        <thead>
          <tr>
            <th></th>
            <th className="center">Wood</th>
            <th className="center">Grass</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="10">Used</td>
            <td className="center">{woodenTiles}</td>
            <td className="center">{grassTiles}</td>
          </tr>
          <tr>
            <td width="10">Boxes</td>
            <td className="center">{woodenBoxes}</td>
            <td className="center">{grassBoxes}</td>
          </tr>
          <tr>
            <td width="10">Leftover</td>
            <td className="center">{woodenLeftOver}</td>
            <td className="center">{grassLeftOver}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
