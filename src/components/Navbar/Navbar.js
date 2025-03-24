import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import CodeParallax from "../CodeParallax/CodeParallax";

function Navitem(props) {
  return (
    <Link
      className="navbar-tab"
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
        .classList.add("navbar-tabs-container--top");
    } else {
      document
        .getElementById("tabs-container")
        .classList.remove("navbar-tabs-container--top");
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
      <nav className="navbar-tabs">
        <CodeParallax language={this.props.language} />
        <div id="tabs-container" className="navbar-tabs-container">
          {navItems}
          {languageButton}
        </div>
      </nav>
    );
  }
}

export default Navbar;
