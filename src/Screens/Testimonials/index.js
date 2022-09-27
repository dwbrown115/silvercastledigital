import React, { PureComponent } from "react";

import "./Testimonials.scss";

class Testimonials extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="testimonials-container">
        <div id="testimonials" style={{ position: "absolute", right: "50%" }} />
        <div className="testimonials">Testimonials</div>
      </div>
    );
  }
}

export default Testimonials;
