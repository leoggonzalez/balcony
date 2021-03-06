import "./Brushes.scss";
import React from "react";

export type Brush = "wooden" | "grass";

interface Props {
  selectedBrush: Brush;
  onBrushSelect: (brush: Brush) => void;
}

const brushes: Brush[] = ["wooden", "grass"];

export function Brushes({ selectedBrush, onBrushSelect }: Props): JSX.Element {
  return (
    <section>
      <h2>Select material</h2>
      <div className="brushes">
        {brushes.map((item) => {
          return (
            <div
              key={item}
              className={`brush brush--${item} ${
                selectedBrush === item ? "brush--selected" : ""
              }`}
              onClick={() => onBrushSelect(item)}
            ></div>
          );
        })}
      </div>
    </section>
  );
}
