import React, { PureComponent } from "react";

import "./Services.scss";

class Services extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="services" style={{ position: "absolute", right: "50%" }} />
        <div>Services</div>
      </div>
    );
  }
}

export default Services;
