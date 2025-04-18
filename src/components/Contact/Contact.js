import React from "react";
import "./Contact.css";
import { Github, Envelope, Discord, Linkedin } from "react-bootstrap-icons";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

function ContactLine(props) {
  const data = (
    <div className="contact">
      {props.contact.icon} {props.contact.name[props.language]} &#8226;{" "}
      <b>{props.contact.value[props.language]}</b>
    </div>
  );
  let contactLine = data;
  if (props.contact.link !== "") {
    contactLine = (
      <a
        href={props.contact.link}
        target="_blank"
        rel="noopener noreferrer"
        className="no-decoration"
      >
        {data}
      </a>
    );
  }
  return (
    <div className="row">
      <div className="col-md-12">{contactLine}</div>
    </div>
  );
}

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.contacts = [
      {
        name: { pl: "GitHub", en: "GitHub" },
        value: { pl: "Nasus20202", en: "Nasus20202" },
        link: "https://github.com/Nasus20202/",
        icon: <Github />,
      },
      {
        name: { pl: "Email", en: "Email" },
        value: { pl: "krzysztof@nasuta.dev", en: "krzysztof@nasuta.dev" },
        link: "mailto:krzysztof@nasuta.dev",
        icon: <Envelope />,
      },
      {
        name: { pl: "Discord", en: "Discord" },
        value: { pl: "nasus.", en: "nasus." },
        link: "",
        icon: <Discord />,
      },
      {
        name: { pl: "LinkedIn", en: "LinkedIn" },
        value: { pl: "krzysztof-nasuta", en: "krzysztof-nasuta" },
        link: "https://www.linkedin.com/in/krzysztof-nasuta/",
        icon: <Linkedin />,
      },
    ];
  }

  render() {
    const contacts = this.contacts.map((item) => {
      return (
        <div
          className="col-md-12 d-flex align-items-stretch justify-content-center"
          style={{ fontSize: "2em" }}
          key={item.name["en"]}
        >
          <ContactLine language={this.props.language} contact={item} />
        </div>
      );
    });
    const year = new Date().getFullYear();
    return (
      <div>
        <ParallaxProvider>
          <ParallaxBanner
            layers={[{ image: "bg2.webp", speed: 25 }]}
            className="aspect-[2/1]"
          >
            <div className=" container parallaxContent parallaxContact">
              <div className="row">
                <div className="col-md d-flex align-items-stretch justify-content-center">
                  <p style={{ fontSize: "4em" }} className="raleway lightblue">
                    {this.props.language === "pl" ? "Kontakt" : "Contact"}
                  </p>
                </div>
              </div>
              <div className="container">
                <div className="row">{contacts}</div>
                <br />
                <br />
                <div className="row">
                  <div className="lightblue col-md-12 d-flex align-items-stretch justify-content-center">
                    Krzysztof Nasuta &copy; {year}
                  </div>
                </div>
              </div>
            </div>
          </ParallaxBanner>
        </ParallaxProvider>
      </div>
    );
  }
}

export default Experience;
