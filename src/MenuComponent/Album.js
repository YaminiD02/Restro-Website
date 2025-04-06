import React from 'react';
import appetizer2 from '../Images/about-bg.jpg';
import dessert1 from '../Images/desert1.jpg';
import dessert2 from '../Images/desert2.jpg';
import appetizer1 from '../Images/gallery-2.jpg';
import mainCourse2 from '../Images/main1.jpg';
import mainCourse1 from '../Images/main2.jpg';
import './Album.css';

const Album = () => {
  return (
    <div className="album-grid">
      <div className="album-section">
        <h2>Restaurant</h2>
        <img src={appetizer1} alt="Appetizer 1" />
        <img src={appetizer2} alt="Appetizer 2" />
      </div>
      <div className="album-section">
        <h2>Main Course</h2>
        <img src={mainCourse1} alt="Main 1" />
        <img src={mainCourse2} alt="Main 2" />
      </div>
      <div className="album-section">
        <h2>Desserts</h2>
        <img src={dessert1} alt="Dessert 1" />
        <img src={dessert2} alt="Dessert 2" />
      </div>
      <div className="album-section">
        <h2>Section 4</h2>
        <img src={mainCourse1} alt="Extra 1" />
        <img src={mainCourse2} alt="Extra 2" />
      </div>
      <div className="album-section">
        <h2>Section 5</h2>
        <img src={mainCourse1} alt="Extra 3" />
        <img src={mainCourse2} alt="Extra 4" />
      </div>
      <div className="album-section">
        <h2>Section 6</h2>
        <img src={mainCourse1} alt="Extra 5" />
        <img src={mainCourse2} alt="Extra 6" />
      </div>
    </div>
  );
};

export default Album;
