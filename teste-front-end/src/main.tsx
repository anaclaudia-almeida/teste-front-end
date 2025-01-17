import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TopBar from './components/TopBar';
import Header from './components/Header';
import NavBar from './components/NavBar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TopBar />
    <Header />
    <NavBar />
  </StrictMode>,
)
