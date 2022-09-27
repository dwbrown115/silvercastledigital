import React, { PureComponent } from "react";

import "./Navbar.scss";

class Navbar extends PureComponent {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      about: "#FFFFFF",
      services: "#FFFFFF",
      testimonials: "#FFFFFF",
      contact: "#FFFFFF",
      buttonTextColor: "white",
      bgColor: "transparent",
      borderColor: "white",
    };
  }

  scrollTo(name) {
    const element = document.getElementById(name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 5) {
        if (this.state.status !== "moved") {
          this.setState({
            status: "moved",
            about: "#5F64F5",
            services: "#5F64F5",
            testimonials: "#5F64F5",
            contact: "#5F64F5",
            bgColor: "white",
          });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({
            status: "top",
            about: "#fff",
            services: "#fff",
            testimonials: "#fff",
            contact: "#fff",
            bgColor: "transparent",
          });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  aboutOver() {
    if (this.state.status === "moved") {
      this.setState({ about: "#323232" });
    } else {
      this.setState({ about: "#5F64F5" });
    }
  }

  aboutLeave() {
    if (this.state.status === "moved") {
      this.setState({ about: "#5F64F5" });
    } else {
      this.setState({ about: "white" });
    }
  }

  servicesOver() {
    if (this.state.status === "moved") {
      this.setState({ services: "#323232" });
    } else {
      this.setState({ services: "#5F64F5" });
    }
  }

  servicesLeave() {
    if (this.state.status === "moved") {
      this.setState({ services: "#5F64F5" });
    } else {
      this.setState({ services: "white" });
    }
  }

  testimonialsOver() {
    if (this.state.status === "moved") {
      this.setState({ testimonials: "#323232" });
    } else {
      this.setState({ testimonials: "#5F64F5" });
    }
  }

  testimonialsLeave() {
    if (this.state.status === "moved") {
      this.setState({ testimonials: "#5F64F5" });
    } else {
      this.setState({ testimonials: "white" });
    }
  }

  contactOver() {
    if (this.state.status === "moved") {
      this.setState({ contact: "#323232" });
    } else {
      this.setState({ contact: "#5F64F5" });
    }
  }

  contactLeave() {
    if (this.state.status === "moved") {
      this.setState({ contact: "#5F64F5" });
    } else {
      this.setState({ contact: "white" });
    }
  }

  render() {
    return (
      <div className="navbar-container">
        <div
          className="navbar"
          style={{
            backgroundColor:
              this.state.status === "top" ? "transparent" : "white",
            color: this.state.status === "top" ? "white" : "#5F64F5",
            position: "fixed",
            boxShadow:
              this.state.status === "top"
                ? "0 12px 20px 0 rgba(0, 0, 0, 0), 0 4px 10px 0 rgba(0, 0, 0, 0)"
                : "0 12px 20px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="logo-wrapper">
            <div className="logo" onClick={() => this.scrollTo("hero")}>
              SilverCastle Digital
            </div>
          </div>
          <div className="navbar-elements">
            <div
              className="element"
              style={{
                color: `${this.state.about}`,
                display: "inline-block",
                textAlign: "center",
                padding: "11px 5px",
                margin: "0px 20px",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => this.scrollTo("about")}
              onMouseEnter={() => this.aboutOver()}
              onMouseLeave={() => this.aboutLeave()}
            >
              About
            </div>
            <div
              className="element"
              style={{
                color: `${this.state.services}`,
                display: "inline-block",
                textAlign: "center",
                padding: "11px 5px",
                margin: "0px 20px",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => this.scrollTo("services")}
              onMouseEnter={() => this.servicesOver()}
              onMouseLeave={() => this.servicesLeave()}
            >
              Services
            </div>
            <div
              className="element"
              style={{
                color: `${this.state.testimonials}`,
                display: "inline-block",
                textAlign: "center",
                padding: "11px 5px",
                margin: "0px 20px",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => this.scrollTo("testimonials")}
              onMouseEnter={() => this.testimonialsOver()}
              onMouseLeave={() => this.testimonialsLeave()}
            >
              Testimonials
            </div>
            <div
              className="element"
              style={{
                color: `${this.state.contact}`,
                display: "inline-block",
                textAlign: "center",
                padding: "11px 5px",
                margin: "0px 20px",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => this.scrollTo("contact")}
              onMouseEnter={() => this.contactOver()}
              onMouseLeave={() => this.contactLeave()}
            >
              Contact
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
