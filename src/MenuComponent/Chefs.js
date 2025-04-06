import React from 'react';
import chef1 from '../Images/chef_1.jpg';
import chef2 from '../Images/chef_2.png';
import chef3 from '../Images/chef_3.png';
import './Chefs.css';

export const Chefs = () => {
  return (
    <div className="chefs-container">
      <h2>Meet Our Chefs</h2>
      <div className="chefs-grid">
        <div className="chef-card">
          <img src={chef1} alt="Chef 1" />
          <h4>Chef Antonio</h4>
          <p>Italian Cuisine Expert</p>
        </div>
        <div className="chef-card">
          <img src={chef2} alt="Chef 2" />
          <h4>Chef Mei</h4>
          <p>Asian Fusion Specialist</p>
        </div>
        <div className="chef-card">
          <img src={chef3} alt="Chef 3" />
          <h4>Chef John</h4>
          <p>Pastry & Desserts</p>
        </div>
      </div>
    </div>
  );
};
