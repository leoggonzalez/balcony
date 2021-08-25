import "./Balcony.scss";
import React from "react";
import { updateUrl } from "../../model/util";

interface Props {
  tiles: string[];
  onClear: () => void;
  onTileUpdate: (index: number) => void;
}

export function Balcony({ tiles, onClear, onTileUpdate }: Props): JSX.Element {
  return (
    <section>
      <h2>Balcony</h2>
      <button onClick={onClear}>Clear</button>
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
