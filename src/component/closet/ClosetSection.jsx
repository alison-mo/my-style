import React from "react";

const ClosetSection = ({ section }) => {
  section.map(entry => {
    return <ClosetEntry entry={entry} />;
  });
};

export default ClosetSection;
