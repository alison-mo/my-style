import React from "react";

const Dress = ({ currentOutfit }) => (
  <>
    <h3>My Outfit</h3>
    <div className="row mt-2">
      <div className="col">
        <img className="outfit-dress" src={currentOutfit.dress} alt="" />
      </div>
      <div className="col">
        <img className="outfit-jacket" src={currentOutfit.jacket} alt="" />
      </div>
    </div>
    <div className="row mt-2">
      <div className="col">
        <img className="outfit-shoes-dress" src={currentOutfit.shoes} alt="" />
      </div>
      <div className="col">
        <img
          className="outfit-accessory-dress"
          src={currentOutfit.accessory}
          alt=""
        />
      </div>
    </div>
  </>
);

export default Dress;
