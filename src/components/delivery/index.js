import React from "react";
import ExploreSection from "../common/exploreSection";
import Filters from "../common/filters";
import "./delivery.css";
import DeliveryCollection from "./deliveryCollections";
import TopBrands from "./topBrands";
import { restaurants } from "../../data/restaurants";
const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
const restaurantsList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterlist={deliveryFilters} />
      </div>
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection
        list={restaurantsList}
        collectionName="Delivery Restraurants in Pune"
      />
    </div>
  );
};

export default Delivery;
