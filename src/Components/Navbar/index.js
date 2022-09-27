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
      this.setState({ about: "#FF6C00" });
    }
  }

  aboutLeave() {
    if (this.state.status === "moved") {
      this.setState({ about: "#FF6C00" });
    } else {
      this.setState({ about: "white" });
    }
  }

  servicesOver() {
    if (this.state.status === "moved") {
      this.setState({ services: "#323232" });
    } else {
      this.setState({ services: "#FF6C00" });
    }
  }

  servicesLeave() {
    if (this.state.status === "moved") {
      this.setState({ services: "#FF6C00" });
    } else {
      this.setState({ services: "white" });
    }
  }

  testimonialsOver() {
    if (this.state.status === "moved") {
      this.setState({ testimonials: "#323232" });
    } else {
      this.setState({ testimonials: "#FF6C00" });
    }
  }

  testimonialsLeave() {
    if (this.state.status === "moved") {
      this.setState({ testimonials: "#FF6C00" });
    } else {
      this.setState({ testimonials: "white" });
    }
  }

  contactOver() {
    if (this.state.status === "moved") {
      this.setState({ contact: "#323232" });
    } else {
      this.setState({ contact: "#FF6C00" });
    }
  }

  contactLeave() {
    if (this.state.status === "moved") {
      this.setState({ contact: "#FF6C00" });
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
            <div className="logo">SilverCastle Digital</div>
          </div>
          <div className="navbar-elements">
            <div
              className="element"
              style={{
                color: `${this.state.sponsorship}`,
                display: "inline-block",
                textAlign: "center",
                padding: "11px 5px",
                margin: "0px 20px",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              About
            </div>
            <div
              className="element"
              style={{
                color: `${this.state.sponsorship}`,
                display: "inline-block",
                textAlign: "center",
                padding: "11px 5px",
                margin: "0px 20px",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Services
            </div>
            <div
              className="element"
              style={{
                color: `${this.state.sponsorship}`,
                display: "inline-block",
                textAlign: "center",
                padding: "11px 5px",
                margin: "0px 20px",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Testimonials
            </div>
            <div
              className="element"
              style={{
                color: `${this.state.sponsorship}`,
                display: "inline-block",
                textAlign: "center",
                padding: "11px 5px",
                margin: "0px 20px",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
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
