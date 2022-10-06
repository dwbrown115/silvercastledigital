import React, { PureComponent } from "react";

import { portrait } from "../../Images";

import "./About.scss";

class About extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="about-container">
        <div
          id="about"
          style={{ position: "absolute", margin: "-89px", right: "50%" }}
        />
        <div className="about">
          <div className="about-header-wrapper">
            <div className="about-heading-one">We Are Silvercastle Digital</div>
            <div className="about-heading-two">
              It says we, but is just one dude for now
            </div>
          </div>
          <div className="about-body-wrapper">
            <div className="about-body-column">
              <div className="about-body-column-element-one">
                Today every great buisness needs great website, especially one
                that works on mobile. I am here to help you achieve that and
                take your buisness to the next level.
              </div>
              <div className="about-body-column-elemtent-two">
                ReactJS is the backbone of all of our websites, and for good
                reason. It's what many of the top companies such as Netflix,
                Facebook and Dropbox use to power their theirs. With the
                versatility and upgradability it's no wonder why they use it,
                and you should too.
              </div>
            </div>
            <div className="about-body-image-wrapper">
              <div>
                <img src={portrait} alt="portrait.jpg" />
              </div>
            </div>
            {/* <div className="about-body-footer">
              <div classname="about-body-footer-text-one">
                It doesn't matter whether or not you already have a design in
                mind, I can do it all.
              </div>
              <div className="about-body-footer-text-two">
                Let me show you how I work.
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default About;

//top: -71, right: "50%"
