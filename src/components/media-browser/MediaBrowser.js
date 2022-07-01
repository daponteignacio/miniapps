import { useState } from "react";
import { Results } from "./Results";
import { Search } from "./Search";

export const MediaBrowser = () => {
  const [results, setResults] = useState({
    data: [],
    loading: false,
  });

  return (
    <div className="main__content main__content--browser">
      <div className="browser__header">
        <h3>Ingresa un término de búsqueda</h3>
        <Search setResults={setResults} />
      </div>

      {results.data.length ? <Results results={results.data} /> : <></>}
    </div>
  );
};
