import React, { PureComponent } from "react";

import "./Hero.scss";

class Hero extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  scrollTo(name) {
    const element = document.getElementById(name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render() {
    return (
      <div className="hero-container">
        <div id="hero" style={{ position: "absolute", right: "50%" }} />
        <div className="hero">
          <div className="hero-image-wrapper">
            <div className="hero-image-and-text">
              <div className="hero-header">
                Let's Level Up Your Buisness With A New Website
              </div>
              <div
                className="contact-button"
                onClick={() => this.scrollTo("contact")}
              >
                Contact Us
              </div>
              <div
                className="learn-more-button"
                onClick={() => this.scrollTo("about")}
              >
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
