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
        <div
          id="services"
          style={{ position: "absolute", margin: "-89px", right: "50%" }}
        />
        <div className="services">
          <div className="services-header">Services</div>
          <div className="services-row">
            <div className="services-card">Design</div>
            <div className="services-card">Build</div>
            <div className="services-card">Deploy</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
