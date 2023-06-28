import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, {useState} from 'react';
import Landing from './Landing';
import Nav from './Nav';
import Writing from './Writing';
import UI from './UI';
import SWE from './SWE';
import About from './About';

function App() {
  return (
    <div id="root">
      <Nav />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/Writing" element={<Writing />}/>
        <Route path="/UI-Design" element={<UI />} />
        <Route path="/Software-Development" element={<SWE />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
