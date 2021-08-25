import "./App.scss";
import { useEffect, useState } from "react";
import { Balcony } from "./components/Balcony/Balcony";
import { Brush, Brushes } from "./components/Brushes/Brushes";
import { Materials } from "./components/Materials/Materials";
import { updateUrl, parseUrl } from "./model/util";
import { ShareButton } from "./components/ShareButton/ShareButton";

function App(): JSX.Element {
  const [tiles, setTiles] = useState([""]);
  const [brush, setBrush] = useState<Brush>("wooden");

  function updateTile(index: number): void {
    const updatedTiles = [...tiles];
    updatedTiles[index] = brush;
    setTiles(updatedTiles);
    updateUrl(updatedTiles);
  }

  function handleOnClear(): void {
    const emptyTiles = [];
    for (let i = 0; i < 56; i++) {
      emptyTiles.push("");
    }
    setTiles(emptyTiles);
    updateUrl([]);
  }

  useEffect(() => {
    setTiles(parseUrl());
  }, []);

  return (
    <div className="app container">
      <header className="app__header">
        <h1>Balcony Floor Design</h1>
      </header>
      <div className="app__body">
        <Materials tiles={tiles} />
        <Brushes
          selectedBrush={brush}
          onBrushSelect={(brush) => setBrush(brush)}
        />
        <Balcony
          tiles={tiles}
          onTileUpdate={(index) => updateTile(index)}
          onClear={handleOnClear}
        />
      </div>
      <footer className="app__footer">
        <ShareButton />
      </footer>
    </div>
  );
}

export default App;
