import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import CodeParallax from "../CodeParallax/CodeParallax";

function Navitem(props) {
  return (
    <Link
      className="et-hero-tab"
      activeClass="active"
      spy={true}
      smooth={true}
      to={props.section.id}
      duration={700}
      offset={-70}
    >
      {props.section.name[props.language]}
    </Link>
  );
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navtop = 0;
    this.sections = this.props.sections;
  }

  listenToScroll = () => {
    if (this.navtop === 0) {
      this.navtop = document.getElementById("tabs-container").offsetTop;
    }
    if (window.scrollY >= window.innerHeight - 70) {
      document
        .getElementById("tabs-container")
        .classList.add("et-hero-tabs-container--top");
    } else {
      document
        .getElementById("tabs-container")
        .classList.remove("et-hero-tabs-container--top");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  render() {
    let navItems = this.sections.map((section) => {
      return (
        <Navitem
          section={section}
          language={this.props.language}
          key={section["id"]}
        />
      );
    });
    let languageButton = (
      <div className="language-button " onClick={this.props.changeLanguage}>
        <img
          className="img-fluid"
          src={this.props.language === "pl" ? "en.svg" : "pl.svg"}
          alt="language"
        />
      </div>
    );
    return (
      <nav className="et-hero-tabs container-fluid">
        <CodeParallax language={this.props.language} />
        <div id="tabs-container" className="et-hero-tabs-container">
          {navItems}
          {languageButton}
        </div>
      </nav>
    );
  }
}

export default Navbar;
