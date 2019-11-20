import React from "react";
import NoDress from "./NoDress";
import Dress from "./Dress";

const Outfit = ({ currentOutfit, clickDress }) => {
  return (
    <div className="col mt-4">
      {clickDress ? (
        <Dress currentOutfit={currentOutfit} />
      ) : (
        <NoDress currentOutfit={currentOutfit} />
      )}
    </div>
  );
};

export default Outfit;
