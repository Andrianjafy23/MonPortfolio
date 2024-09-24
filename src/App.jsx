import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apropos from './composant/Apropos';
import Projets from './composant/Projets';
import Head from './composant/Head';
import Compet from './composant/Compet';
import { ThemeProvider } from './composant/ThemeContext'; 

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div>
          <Head />
          <Routes>
            <Route path="/" element={<Apropos />} />
            <Route path='/projet' element={<Projets/>} />
            <Route path="/service" element={<Compet/>} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
