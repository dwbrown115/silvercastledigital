import React, { PureComponent } from "react";

import "./About.scss";

class About extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="about-container">
        <div id="about" style={{ position: "absolute", right: "50%" }} />
        <div className="about">
          <div className="header-wrapper">
            <div className="heading-one">We Are Silvercastle Digital</div>
            <div className="heading-two">
              It says we, but is just one dude for now
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

//top: -71, right: "50%"
