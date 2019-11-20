import React from "react";

const ClosetEntry = ({ entry, name, handleClickOutfit }) => (
  <div className="col-4" onClick={() => handleClickOutfit(name, entry)}>
    <img className="closet-img" src={entry} alt="" />
  </div>
);

export default ClosetEntry;
