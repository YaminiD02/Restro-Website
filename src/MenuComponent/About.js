import React from 'react'
import pic1 from '../Images/img/gallery/gallery-3.jpg'
import pic2 from '../Images/img/gallery/gallery-4.jpg'
import pic3 from '../Images/img/gallery/gallery-5.jpg'

export const About = () => {
  return (
    <div>
  <div id="restaurant" class="container text-center">
    <br />
    <h3>WELCOME TO OUR RESTAURANT</h3>
    <p><em>We're passionate about serving delicious meals!</em></p>
    <p>Indulge in a culinary journey like no other at our fictional restaurant. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    <div class="row">
      <div class="col-sm-4">
        <p class="text-center"><strong>Our Services</strong></p>
        <a href="#service-demo" data-toggle="collapse">
          <img src={pic1} class="img-circle person" alt="Random Name" width="255" height="255" />
        </a>
        <div id="service-demo" class="collapse">
          <p>Expert Chefs</p>
          <p>Quality Ingredients</p>
          <p>Exceptional Service</p>
        </div>
      </div>
      <div class="col-sm-4">
        <p class="text-center"><strong>The Difference</strong></p>
        <a href="#difference-demo" data-toggle="collapse">
          <img src={pic2} class="img-circle person" alt="Random Name" width="255" height="255" />
        </a>
        <div id="difference-demo" class="collapse">
          <p>Unique Recipes</p>
          <p>Charming Ambiance</p>
          <p>Memorable Dining Experience</p>
        </div>
      </div>
      <div class="col-sm-4">
        <p class="text-center"><strong>Key Features</strong></p>
        <a href="#feature-demo" data-toggle="collapse">
          <img src={pic3} class="img-circle person" alt="Random Name" width="255" height="255" />
        </a>
        <div id="feature-demo" class="collapse">
          <p>Specialty Dishes</p>
          <p>Live Music Events</p>
          <p>Outdoor Seating</p>
        </div>
      </div>
    </div>
  </div>

  <br />

  <div id="about-restaurant" class="container text-center">
    <h3>ABOUT OUR RESTAURANT</h3>
    <p><em>Discover the flavors that tell a story!</em></p>
    <p>At our restaurant, we believe in crafting more than just meals; we create experiences that linger in your memories. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    <div class="row">
      
    </div>
  </div>
</div>

  )
}

