import "./Balcony.scss";
import React from "react";

interface Props {
  tiles: string[];
  onTileUpdate: (index: number) => void;
}

export function Balcony({ tiles, onTileUpdate }: Props): JSX.Element {
  return (
    <section>
      <h2>Balcony</h2>
      <div className="balcony">
        <div className="tiles">
          {tiles.map((item, index) => {
            return (
              <div
                className={`tile ${item !== "" ? `tile--${item}` : ""}`}
                key={index}
                onClick={() => onTileUpdate(index)}
              />
            );
          })}
        </div>
      </div>
      <div className="indoors">
        <div className="indoors__left-door">puerta izquierda (bloqueada)</div>
        <div className="indoors__left-window">ventanal izquierdo</div>
        <div className="indoors__column">columna</div>
        <div className="indoors__right-window">ventanal derecho</div>
        <div className="indoors__right-door">puerta derecha</div>
      </div>
    </section>
  );
}
