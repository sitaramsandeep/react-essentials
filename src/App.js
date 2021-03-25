import { useEffect, useState, useReducer} from 'react';
import './App.css';
import restaurant from './restaurant.jpg'
import {Route, Routes} from 'react-router-dom';
import { Home, About, Events, ContactUs } from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
