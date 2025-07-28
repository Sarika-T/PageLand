import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, HashRouter, Link, Route, Routes} from "react-router-dom";
import Navigation from './components/HomePage/Navigation';
import BuilderCanvas from './components/HomePage/BuilderCanvas';
import LandingPage1 from './components/Pages/Mainpage';
import LandingPage2 from './components/Pages/PageContent';


function App() {
  return (
    <HashRouter>
    <div className='App'>
    <Navigation />
    <Routes>
        <Route path="/" element={<BuilderCanvas />} />
        <Route path="/landing/page-1" element={<LandingPage1 />} />
        <Route path="/landing/page-2" element={<LandingPage2 />} />
      </Routes>
    </div>
    </HashRouter>
  );
}
export default App;
