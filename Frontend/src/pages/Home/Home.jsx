import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import AwardsSlider from '../../components/AwardsSlider/AwardsSlider'
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />

      <div id="achievements">
        <AwardsSlider />
      </div>

      <div id="customer-reviews">
        <CustomerReviews />
      </div>

      <div id="app-download">
        <AppDownload />
      </div>
    </div>
  );
};

export default Home;
