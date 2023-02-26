import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/*" element={<Navigate to="marvel" />} />
        </Routes>
      </div>
    </>
  );
};
