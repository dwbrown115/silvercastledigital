import React, { PureComponent } from "react";

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
          <div className="header-wrapper">
            <div className="heading-one">We Are Silvercastle Digital</div>
            <div className="heading-two">
              It says we, but is just one dude for now
            </div>
          </div>
          <div className="body-wrapper">
            <div className="body-row">
              <div className="body-row-element-one">
                Today every great buisness needs great website, especially one
                that works on mobile. I am here to help you achieve that and
                take your buisness to the next level.
              </div>
              <div className="body-row-elemtent-two">
                ReactJS is the backbone of all of our websites, and for good
                reason. It's what many of the top companies such as Netflix,
                Facebook and Dropbox use to power their theirs. With the
                versatility and upgradability it's no wonder why they use it,
                and you should too.
              </div>
            </div>
            <div className="body-footer">Footer</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

//top: -71, right: "50%"
