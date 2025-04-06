import React from 'react';
import { Link } from "react-router-dom";
import pic1 from '../Images/R2.jpg';
import '../MenuComponent/Home.css';

export const Home = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={pic1} alt='IntroImg'/>
        </div>

         <div className="content">
            <h1 className='text-warning'>FooDX</h1>
            <p className='text-warning'>Delivering great food for more than 18 years!</p>
            <div>
                <Link to='/Booking' className="btn btn-warning">Book Table</Link>
            </div>

         </div>
    </div>  );
}


