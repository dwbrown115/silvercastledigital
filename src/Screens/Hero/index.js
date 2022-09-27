import React, { PureComponent } from "react";

import "./Hero.scss";

class Hero extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="hero-container">
        <div id="hero" style={{ position: "absolute", right: "50%" }} />
        <div>Hero</div>
      </div>
    );
  }
}

export default Hero;
