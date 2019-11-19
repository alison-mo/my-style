import React from "react";
import ClosetSection from "./ClosetSection";

const TotalCloset = ({ top, bottom, dress, shoes, accessories }) => {
  let sections = { top, bottom, dress, shoes, accessories };
  return (
  <div>
    <h3>My Closet</h3>
    {Objects.values(sections).map(section => <ClosetSection section={section} />)}

  </div>)
};

export default TotalCloset;
