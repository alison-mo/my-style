import React from "react";
import Navbar from "react-bootstrap/Navbar";
import TotalCloset from "./component/closet/TotalCloset.jsx";
import Outfit from "./component/outfit/Outfit.jsx";
import clothes from "./clothes.js";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: clothes.top,
      bottom: clothes.bottom,
      dress: clothes.dress,
      jacket: clothes.jacket,
      shoes: clothes.shoes,
      accessory: clothes.accessory,
      currentOutfit: {
        top: "",
        bottom: "",
        dress: "",
        jacket: "",
        shoes: "",
        accessory: ""
      }
    };
    this.handleClickOutfit = this.handleClickOutfit.bind(this);
  }
  handleClickOutfit(name, entry) {
    let newOutfit = this.state.currentOutfit;
    newOutfit[name] = entry;
    this.setState({ currentOutfit: newOutfit });
  }
  render() {
    return (
      <div className="container">
        <Navbar className="navBar">
          <Navbar.Brand>My Style</Navbar.Brand>
        </Navbar>
        <div className="row">
          <Outfit currentOutfit={this.state.currentOutfit} />
          <TotalCloset
            top={this.state.top}
            bottom={this.state.bottom}
            dress={this.state.dress}
            jacket={this.state.jacket}
            shoes={this.state.shoes}
            accessory={this.state.accessory}
            handleClickOutfit={this.handleClickOutfit}
          />
        </div>
      </div>
    );
  }
}

export default App;
