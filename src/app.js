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
      },
      clickDress: false
    };
    this.handleClickOutfit = this.handleClickOutfit.bind(this);
    this.handleAddClothes = this.handleAddClothes.bind(this);
  }
  handleClickOutfit(name, entry) {
    let newOutfit = this.state.currentOutfit;
    newOutfit[name] = entry;
    if (name === "dress") {
      this.setState({ clickDress: true, currentOutfit: newOutfit });
    } else if (name === "top" || name === "bottom") {
      this.setState({ clickDress: false, currentOutfit: newOutfit });
    } else {
      this.setState({ currentOutfit: newOutfit });
    }
  }
  handleAddClothes(type, link) {
    console.log(type, link);
    let newClothes = this.state[type].slice();
    newClothes.push(link);
    this.setState({
      [type]: newClothes
    });
  }
  render() {
    return (
      <div className="container">
        <Navbar className="navBar">
          <Navbar.Brand>My Style</Navbar.Brand>
          <Navbar.Text className="ml-auto">
            Signed in as: <a href="#login">Alison Mo</a>
          </Navbar.Text>
        </Navbar>
        <div className="row">
          <Outfit
            currentOutfit={this.state.currentOutfit}
            clickDress={this.state.clickDress}
          />
          <TotalCloset
            top={this.state.top}
            bottom={this.state.bottom}
            dress={this.state.dress}
            jacket={this.state.jacket}
            shoes={this.state.shoes}
            accessory={this.state.accessory}
            handleClickOutfit={this.handleClickOutfit}
            handleAddClothes={this.handleAddClothes}
          />
        </div>
      </div>
    );
  }
}

export default App;
