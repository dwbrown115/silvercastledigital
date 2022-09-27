import React, { PureComponent } from "react";

import "./Contact.scss";

class Contact extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="contact-container">
        <div id="contact" style={{ position: "absolute", right: "50%" }} />
        <div className="contact">Contact</div>
      </div>
    );
  }
}

export default Contact;
