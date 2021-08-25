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
        <div className="indoors__left-door">left door (blocked)</div>
        <div className="indoors__left-window">left window</div>
        <div className="indoors__column">column</div>
        <div className="indoors__right-window">right window</div>
        <div className="indoors__right-door">right door</div>
      </div>
    </section>
  );
}
