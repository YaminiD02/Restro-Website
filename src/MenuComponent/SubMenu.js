import React from 'react';
import pic2 from '../Images/img/menu/bread-barrel.jpg';
import pic3 from '../Images/img/menu/cake.jpg';
import pic4 from '../Images/img/menu/greek-salad.jpg';
import pic1 from '../Images/img/menu/lobster-bisque.jpg';
import pic5 from '../Images/img/menu/mozzarella.jpg';
import './SubMenu.css';

export const SubMenu = () => {
  const menuItems = [
    {
      image: pic1,
      title: 'Lobster Bisque',
      chef: 'Chef Siah',
      speciality: 'Seafood Delicacy',
      price: '$25.99',
    },
    {
      image: pic2,
      title: 'Bread Barrel',
      chef: 'Chef Siah',
      speciality: 'Rustic Italian Bread',
      price: '$12.50',
    },
    {
      image: pic3,
      title: 'Cake',
      chef: 'Chef Siah',
      speciality: 'Chocolate Dream',
      price: '$8.99',
    },
    {
      image: pic4,
      title: 'Greek Salad',
      chef: 'Chef Siah',
      speciality: 'Fresh Mediterranean',
      price: '$10.49',
    },
    {
      image: pic5,
      title: 'Mozzarella',
      chef: 'Chef Siah',
      speciality: 'Cheesy Delight',
      price: '$11.00',
    },
  ];

  return (
    <div className="submenu-container">
      <div className="row">
        {menuItems.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card custom-card h-100">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p><strong>Chef:</strong> {item.chef}</p>
                <p><strong>Speciality:</strong> {item.speciality}</p>
                <p><strong>Price:</strong> {item.price}</p>
                <button className="btn btn-outline-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
