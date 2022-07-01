import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { useState } from "react";

export const Layout = () => {
  const [app, setApp] = useState(false);

  return (
    <>
      <NavBar setApp={setApp} />

      <div className="main__container">
        {app ? <Outlet /> : <Main />}
      </div>

      <Footer />
    </>
  );
};
