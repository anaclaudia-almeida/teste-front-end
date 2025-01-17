import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TopBar from './components/TopBar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TopBar />
  </StrictMode>,
)
