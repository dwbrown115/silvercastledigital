import React, { PureComponent } from "react";

import "./Hero.scss";

class Hero extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      contactButtonTextColor: "#F5F5F5",
      contactBgColor: "transparent",
      contactBorderColor: "#F5F5F5",
      learnButtonTextColor: "#F5F5F5",
      learnBgColor: "transparent",
      learnBorderColor: "#F5F5F5",
    };
  }

  scrollTo(name) {
    const element = document.getElementById(name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  contactButtonOver() {
    if (this.state.status === "moved") {
      this.setState({
        contactButtonTextColor: "#F5F5F5",
        contactBgColor: "#B78080",
        contactBorderColor: "#B78080",
      });
    } else {
      this.setState({
        contactButtonTextColor: "#B78080",
        contactBgColor: "#F5F5F5",
        contactBorderColor: "#F5F5F5",
      });
    }
  }

  contactButtonLeave() {
    if (this.state.status === "moved") {
      this.setState({
        contactButtonTextColor: "#B78080",
        contactBgColor: "#F5F5F5",
        contactBorderColor: "#B78080",
      });
    } else {
      this.setState({
        contactButtonTextColor: "#F5F5F5",
        contactBgColor: "transparent",
        contactBorderColor: "#F5F5F5",
      });
    }
  }

  learnButtonOver() {
    if (this.state.status === "moved") {
      this.setState({
        learnButtonTextColor: "#F5F5F5",
        learnBgColor: "#B78080",
        learnBorderColor: "#B78080",
      });
    } else {
      this.setState({
        learnButtonTextColor: "#B78080",
        learnBgColor: "#F5F5F5",
        learnBorderColor: "#F5F5F5",
      });
    }
  }

  learnButtonLeave() {
    if (this.state.status === "moved") {
      this.setState({
        learnButtonTextColor: "#B78080",
        learnBgColor: "#F5F5F5",
        learnBorderColor: "#B78080",
      });
    } else {
      this.setState({
        learnButtonTextColor: "#F5F5F5",
        learnBgColor: "transparent",
        learnBorderColor: "#F5F5F5",
      });
    }
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
                onMouseEnter={() => this.contactButtonOver()}
                onMouseLeave={() => this.contactButtonLeave()}
                style={{
                  border: "1px solid",
                  borderColor: `${this.state.contactBorderColor}`,
                  backgroundColor: `${this.state.contactBgColor}`,
                  borderRadius: "30px",
                  display: "inline-block",
                  color: `${this.state.contactButtonTextColor}`,
                  textAlign: "center",
                  margin: "0px 25px",
                  padding: "8px 15px",
                  fontSize: "1.563rem",
                  fontWeight: "600",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onClick={() => this.scrollTo("contact")}
              >
                Contact Us
              </div>
              <div
                className="learn-more-button"
                onMouseEnter={() => this.learnButtonOver()}
                onMouseLeave={() => this.learnButtonLeave()}
                style={{
                  border: "1px solid",
                  borderColor: `${this.state.learnBorderColor}`,
                  backgroundColor: `${this.state.learnBgColor}`,
                  borderRadius: "30px",
                  display: "inline-block",
                  color: `${this.state.learnButtonTextColor}`,
                  textAlign: "center",
                  margin: "0px 25px",
                  padding: "8px 15px",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
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
