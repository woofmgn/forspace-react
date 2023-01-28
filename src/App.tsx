import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "./helpers/classNames/classNames";
import { AboutAsync } from "./pages/About/About.async";
import { MainAsync } from "./pages/Main/Main.async";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>THEME</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutAsync />} />
          <Route path={"/"} element={<MainAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
