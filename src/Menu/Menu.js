import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { About } from '../MenuComponent/About';
import Album from '../MenuComponent/Album';
import Booking from '../MenuComponent/Booking';
import { Chefs } from '../MenuComponent/Chefs';
import { Contact } from '../MenuComponent/Contact';
import { Home } from '../MenuComponent/Home';
import { SubMenu } from '../MenuComponent/SubMenu';

import './Menu.css'; // CSS is now completely external

export const Menu = () => {
  return (
    <div className="menu">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<SubMenu />} />
          {/* <Route path='/special' element={<Specials />} /> */}
          <Route path='/chef' element={<Chefs />} />
          <Route path='/album' element={<Album />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/booking' element={<Booking />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
