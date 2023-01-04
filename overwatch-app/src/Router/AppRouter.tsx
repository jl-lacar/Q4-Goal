import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Components/Home";
import { MainLayout } from "../Components/Layouts/MainLayout.layout";
import { Hero } from "../Pages/Hero/Hero.page";

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
