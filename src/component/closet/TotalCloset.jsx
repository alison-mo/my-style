import React from "react";
import ClosetSection from "./ClosetSection";
import AddToCloset from "./AddToCloset";

const TotalCloset = ({
  top,
  bottom,
  dress,
  jacket,
  shoes,
  accessory,
  handleClickOutfit,
  handleAddClothes
}) => {
  let sections = { top, bottom, dress, jacket, shoes, accessory };
  return (
    <div className="col mt-4">
      <div className="row">
        <div className="col">
          <h3>My Closet</h3>
        </div>
        <div className="col">
          <AddToCloset handleAddClothes={handleAddClothes} />
        </div>
      </div>
      <div className="closet mt-3">
        {Object.keys(sections).map(section => (
          <ClosetSection
            section={sections[section]}
            name={section}
            handleClickOutfit={handleClickOutfit}
          />
        ))}
      </div>
    </div>
  );
};

export default TotalCloset;
