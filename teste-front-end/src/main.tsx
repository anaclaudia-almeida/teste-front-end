import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss';
import TopBar from './components/TopBar';
import Header from './components/Header';
import NavBar from './components/NavBar';
import BannerHome from './components/BannerHome';
import CategorySlider from './components/CategorySlider';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TopBar />
    <Header />
    <NavBar />
    <BannerHome />
    <CategorySlider />
  </StrictMode>,
)
