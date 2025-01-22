import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import BannerHome from "./components/BannerHome";
import CategorySlider from "./components/CategorySlider";
import BannerGrid from "./components/BannerGrid";
import BrandSlider from "./components/BrandsSlider";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ShelfProducts from "./components/ShelfProducts";
import FirstShelfProducts from "./components/FirstShelfProducts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TopBar />
    <Header />
    <NavBar />
    <BannerHome />
    <CategorySlider />
    <FirstShelfProducts />
    <BannerGrid />
    <ShelfProducts />
    <BannerGrid />
    <BrandSlider />
    <ShelfProducts />
    <Newsletter />
    <Footer />
  </StrictMode>
);
