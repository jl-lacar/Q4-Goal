import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { MainLayout } from "../components/Layouts/MainLayout.layout";
import { Hero } from "../pages/Hero/Hero.page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="hero" element={<Hero />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
