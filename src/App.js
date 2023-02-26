import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { Layout } from "./components/base/Layout";
import { MediaBrowser } from "./pages/media-browser/MediaBrowser";
import { InteresCompuesto } from "./pages/interes-compuesto/InteresCompuesto";
import HeroesBrowser from "./pages/heroes-browser/HeroesBrowser";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/media-browser" element={<MediaBrowser />} />
            <Route path="/compound-interest" element={<InteresCompuesto />} />
            <Route path="/heroes-browser/*" element={<HeroesBrowser />} />
          </Route>
        </Routes>
      </Router>
  );
};

export default App;
