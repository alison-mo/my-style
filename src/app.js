import React from "react";
import TotalCloset from "./component/closet/TotalCloset.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: [],
      bottom: [],
      dress: [],
      shoes: [],
      accessories: [],
      currentOutfit: {
        top: "",
        bottom: "",
        dress: "",
        shoes: "",
        accessory: ""
      }
    };
  }
  render() {
    return <h1>Hello </h1>;
  }
}

export default App;
