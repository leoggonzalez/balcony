import { useEffect, useState } from "react";
import "./App.scss";

type Brush = "wooden" | "grass";

const brushes: ["wooden", "grass"] = ["wooden", "grass"];

function updateUrl(array: string[]): void {
  const stringArray = array.map((item, index) => item.charAt(0)).join("-");
  const url = new URL(window.location.href);
  const params = url.searchParams;

  // new value of "id" is set to "101"
  params.set("design", stringArray);

  // change the search property of the main url
  url.search = params.toString();

  // the new url string
  const newUrl = url.toString();

  // output : http://demourl.com/path?id=101&topic=main
  // eslint-disable-next-line no-restricted-globals
  history.replaceState({}, "Balcony", newUrl);
}

function parseUrl(): string[] {
  const tilesArray: string[] = [];
  for (let i = 0; i < 56; i++) {
    tilesArray.push("");
  }

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const design = urlParams.get("design");

  if (design) {
    return design
      .split("-")
      .map((item) => (item === "w" ? "wooden" : item === "g" ? "grass" : ""));
  }
  return tilesArray;
}

function App() {
  const [tiles, setTiles] = useState([""]);
  const [brush, setBrush] = useState<Brush>("wooden");
  const [copied, setCopied] = useState(false);

  function updateTile(index: number): void {
    const updatedTiles = [...tiles];
    updatedTiles[index] = brush;
    setTiles(updatedTiles);
    updateUrl(updatedTiles);
  }

  const woodenTilesNumber = tiles.filter((item) => item === "wooden").length;
  const grassTilesNumber = tiles.filter((item) => item === "grass").length;

  useEffect(() => {
    setTiles(parseUrl());
  }, []);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  function shareLink(): void {
    setCopied(false);
    /* Get the text field */
    setTimeout(() => {
      const copyText = document.getElementById(
        "current-url-input"
      ) as HTMLInputElement;

      /* Select the text field */
      if (copyText) {
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");

        setCopied(true);
      }
    }, 100);
  }

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Ayudenme a diseñar el balcon</h1>
        </header>
        <section>
          <div>
            <header>
              <h3>Madera:</h3>
            </header>
            <p>Usado: {woodenTilesNumber}</p>
            <p>Cajas: {Math.ceil(woodenTilesNumber / 9)}</p>
            Sobran: {Math.ceil(woodenTilesNumber / 9) * 9 - woodenTilesNumber}
          </div>
          <div>
            <header>
              <h3>Pasto sintetico:</h3>
            </header>
            <p>Usado: {grassTilesNumber}</p>
            <p>Cajas: {Math.ceil(grassTilesNumber / 9)}</p>
            <p>
              Sobran: {Math.ceil(grassTilesNumber / 9) * 9 - grassTilesNumber}
            </p>
          </div>
        </section>
        <section>
          <p>
            <strong>Seleccionar material</strong>
          </p>
          <div className="brushes">
            {brushes.map((item) => {
              return (
                <div
                  key={item}
                  className={`brush brush--${item} ${
                    brush === item ? "brush--selected" : ""
                  }`}
                  onClick={() => setBrush(item)}
                ></div>
              );
            })}
          </div>
        </section>
        <section>
          <h2>Balcony</h2>
          <div className="balcony">
            <div className="tiles">
              {tiles.map((item, index) => {
                return (
                  <div
                    className={`tile ${item !== "" ? `tile--${item}` : ""}`}
                    key={index}
                    onClick={() => updateTile(index)}
                  />
                );
              })}
            </div>
          </div>
          <div className="indoors">
            <div className="indoors__left-door">
              puerta izquierda (bloqueada)
            </div>
            <div className="indoors__left-window">ventanal izquierdo</div>
            <div className="indoors__column">columna</div>
            <div className="indoors__right-window">ventanal derecho</div>
            <div className="indoors__right-door">puerta derecha</div>
          </div>
        </section>
        <footer>
          <input
            type="text"
            value={window.location.href}
            id="current-url-input"
          ></input>
          <div>
            <button onClick={() => shareLink()}>Compartir</button>
          </div>
          {copied && <div className="copied">Link copiado!</div>}
        </footer>
      </div>
    </div>
  );
}

export default App;
