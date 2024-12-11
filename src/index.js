import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Home from './Views/Home';
import FAQ from './Views/FAQ';
import HowItWorks from './Views/HowItWorks';
import WhoAreYou from './Views/WhoAreYou';
import { ThemeProvider, CssBaseline } from '@mui/material'; // Import CssBaseline
import theme from './Theme';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="HowItWorks" element={<HowItWorks />} />
        <Route path="WhoAreYou" element={<WhoAreYou />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Appliquer le background.default */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
