import React from "react";

const NoDress = ({ currentOutfit }) => (
  <>
    <h3>My Outfit</h3>
    <div className="row mt-2">
      <div className="col">
        <img className="outfit-top" src={currentOutfit.top} alt="" />
      </div>
      <div className="col">
        <img className="outfit-jacket" src={currentOutfit.jacket} alt="" />
      </div>
    </div>
    <div className="row mt-2">
      <div className="col">
        <img className="outfit-bottom" src={currentOutfit.bottom} alt="" />
      </div>
      <div className="col m-auto">
        <img className="outfit-shoes" src={currentOutfit.shoes} alt="" />
      </div>
      <div className="col m-auto">
        <img
          className="outfit-accessory"
          src={currentOutfit.accessory}
          alt=""
        />
      </div>
    </div>
  </>
);

export default NoDress;
