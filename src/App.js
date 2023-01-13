
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import NumTexCol from './components/NumTexCol'


export function App() {
  return (
    <BrowserRouter>
      <div> 
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/:text" element={<NumTexCol />}/>
          <Route path="/:text/:color/:fondo" element={<NumTexCol />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

