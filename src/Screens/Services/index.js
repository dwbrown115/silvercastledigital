import React, { PureComponent } from "react";

import "./Services.scss";

class Services extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="services-container">
        <div id="services" style={{ position: "absolute", right: "50%" }} />
        <div className="services">Services</div>
      </div>
    );
  }
}

export default Services;
