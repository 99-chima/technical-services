import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Pricing from './pricing';
import Contact from './contact';
import Components from './components';
import Download from './download';
import './App.css';
function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/components' element={<Components />} />
      <Route path='/download' element={<Download />} />
    </Routes>
   </Router>
  );
}

export default App;
