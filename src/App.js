import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { Layout } from "./components/base/Layout";
import { MediaBrowser } from "./pages/media-browser/MediaBrowser";
import { InteresCompuesto } from "./pages/interes-compuesto/InteresCompuesto";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/media-browser" element={<MediaBrowser />} />
            <Route path="/compound-interest" element={<InteresCompuesto />} />
          </Route>
        </Routes>
      </Router>
  );
};

export default App;
