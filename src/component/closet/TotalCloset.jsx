import React from "react";
import ClosetSection from "./ClosetSection";

const TotalCloset = ({
  top,
  bottom,
  dress,
  jacket,
  shoes,
  accessory,
  handleClickOutfit
}) => {
  let sections = { top, bottom, dress, jacket, shoes, accessory };
  return (
    <div className="col mt-4">
      <h3>My Closet</h3>
      <div className="closet">
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
