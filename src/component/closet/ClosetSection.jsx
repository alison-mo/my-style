import React from "react";
import ClosetEntry from "./ClosetEntry";

const ClosetSection = ({ section, name, handleClickOutfit }) => (
  <div className="mt-3">
    <div className="closet-section">{name}</div>
    <div className="row">
      {console.log(section, name)}
      {section.map(entry => {
        return (
          <ClosetEntry
            entry={entry}
            name={name}
            handleClickOutfit={handleClickOutfit}
          />
        );
      })}
    </div>
  </div>
);

export default ClosetSection;
