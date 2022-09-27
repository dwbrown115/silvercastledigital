import React, { PureComponent } from "react";

import "./Contact.scss";

class Contact extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="contact" style={{ position: "absolute", right: "50%" }} />
        <div>Contact</div>
      </div>
    );
  }
}

export default Contact;
