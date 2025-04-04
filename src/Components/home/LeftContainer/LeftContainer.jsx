import React from "react";
import "./LeftContainer.css";
const LeftContainer = ({clicks, precio, comprar}) => {

  return (
    <div className="left-container">
      <div className="click-container">Clicks: {clicks} </div>
      <div className="click-image">
        <img
          src="https://images.vexels.com/media/users/3/131773/isolated/preview/790c78d39fd853ae72167411aa11d727-pixilated-hand-cursor-1.png"
          alt="Clicks"
        />
      </div>
      <div className="price">
        <p>${precio}</p>
      </div>
      <div className="button-container">
          <div data-tooltip={`Price: -$${precio}`} class="button">
<div class="button-wrapper" onClick={comprar}>
  <div class="text">Buy Now</div>
    <span class="icon">
      <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
</svg>
    </span>
  </div>
</div>
      </div>
    </div>
  );
};

export default LeftContainer;
