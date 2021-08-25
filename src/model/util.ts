export function updateUrl(array: string[]): void {
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

export function parseUrl(): string[] {
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
