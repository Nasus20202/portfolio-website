import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import "./Projects.css";
import Card from "react-bootstrap/Card";
import { Github, Globe2 } from "react-bootstrap-icons";

function Project(props) {
  const github =
    props.project.github !== "" ? (
      <Card.Link
        className="btn btn-dark"
        href={props.project.github}
        target="_blank"
      >
        Github <Github />
      </Card.Link>
    ) : (
      ""
    );
  const page =
    props.project.website !== "" ? (
      <Card.Link
        className="btn btn-secondary"
        href={props.project.website}
        target="_blank"
      >
        {props.language === "pl" ? "Strona" : "Website"} <Globe2 />
      </Card.Link>
    ) : (
      ""
    );
  return (
    <Card style={{ width: "100%" }} className="text-4 mb-4 bg-0">
      <Card.Body>
        <Card.Title className="raleway" style={{ fontWeight: "bold" }}>
          {props.project.name[props.language]}
        </Card.Title>
        <Card.Text>{props.project.about[props.language]}</Card.Text>
        {github}
        {page}
      </Card.Body>
    </Card>
  );
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.projects = [
      {
        name: { pl: "Sklep - ASP.NET Core MVC", en: "ASP.NET Core MVC Shop" },
        about: {
          pl: "Sklep internetowy wykonany z użyciem frameworka ASP.NET Core. Zawiera system magazynu, konta użytkowników oraz panel administracyjny.",
          en: "Online shop created using ASP.NET Core framework. Includes warehouse system, tenants accounts and admin panel.",
        },
        github: "https://github.com/Nasus20202/AspShop",
        website: "",
      },
      {
        name: { pl: "Infrastruktura jako Kod", en: "Infrastructure as Code" },
        about: {
          pl: "Definicja klastra Kubernetes w kodzie, z użyciem Terraform oraz Ansible. Klaster składa się z 2 węzłów w chmurze Oracle Cloud Infrastructure.",
          en: "Definition of a Kubernetes cluster in code, using Terraform and Ansible. The cluster consists of 2 nodes in Oracle Cloud Infrastructure.",
        },
        github: "https://github.com/Nasus20202/infra",
        website: "",
      },
      {
        name: { pl: "CubeList", en: "CubeList" },
        about: {
          pl: "Prosta aplikacja internetowa agregująca serwery do gry Minecraft. Automatycznie sprawdza status oraz motd serwerów i prezentuje je w formie listy.",
          en: "Simple web application that aggregates Minecraft servers. Automatically checks the status and motd of servers and presents them in a list.",
        },
        github: "https://github.com/Nasus20202/MCserverList",
        website: "",
      },
      {
        name: { pl: "Strona portfolio", en: "Portfolio website" },
        about: {
          pl: "Strona internetowa, którą właśnie przeglądasz. Została wykonana z użyciem technologi React 18. Strona hostowana jest na klasterze Kubernetes.",
          en: "The website you are currently browsing. It was made using React 18. The website is hosted on a Kubernetes cluster.",
        },
        github: "https://github.com/Nasus20202/portfolio-website",
        website: "",
      },
      {
        name: { pl: "Django Store", en: "Django Store" },
        about: {
          pl: "Prosty sklep internetowy wykonany z użyciem frameworka Django. Umożliwia przeglądanie oraz zamawianie produktów. Przygotowany jako projekt do liceum.",
          en: "A simple online store made using the Django framework. It allows you to view and order products. Prepared as a high school project.",
        },
        github: "https://github.com/Nasus20202/django-store",
        website: "",
      },
      {
        name: { pl: "Family App", en: "Family App" },
        about: {
          pl: "Aplikacja Internetowa ASP.NET Core przeznaczona dla rodzin. Zawiera wspolną listę zadań do zrobienia oraz liste zakupów. Posiada zintegrowany chat.",
          en: "ASP.NET Core web app for families. Includes a shared to-do list and a shopping list. It has an integrated chat.",
        },
        github: "https://github.com/Nasus20202/FamilyApp",
        website: "",
      },
      {
        name: { pl: "League Bot dla Discorda", en: "League Bot for Discord" },
        about: {
          pl: "League Bot to bot wykonany z użyciem biblioteki Discord.py. Umożliwia użytkownikowi sprawdzić profil i mecze dowolnego gracza League of Legends.",
          en: "League Bot is a bot made using the Discord.py library. It allows the user to check the profile and matches of any League of Legends player.",
        },
        github: "https://github.com/Nasus20202/lolBot",
        website: "",
      },
      {
        name: { pl: "Skracacz linków", en: "Link cutter" },
        about: {
          pl: "Aplikacja internetowa umożliwiająca zastąpienie długiego linku krótkim. Stworzona z użyciem ASP.NET Core MVC.",
          en: "A web application that allows you to replace a long link with a short one. Created with ASP.NET Core MVC.",
        },
        github: "https://github.com/Nasus20202/LinkCutter",
        website: "",
      },
      {
        name: { pl: "Czy Dobrze", en: "Czy Dobrze" },
        about: {
          pl: "Czy Dobrze to strona, służąca do pomocy w rozwiązywaniu prac domowych. Projekt wykonany w grupie pięciu osób.",
          en: "Czy Dobrze is a website that helps in solving homework. Project made in a group of five people.",
        },
        github: "https://github.com/CzyDobrze/CzyDobrze.Api",
        website: "",
      },
    ];
  }

  render() {
    const projects = this.projects.map((project) => {
      return (
        <div
          key={project.name["en"]}
          className="col-md-4 d-flex align-items-stretch"
        >
          <Project project={project} language={this.props.language} />
        </div>
      );
    });
    return (
      <div>
        <ParallaxProvider>
          <ParallaxBanner
            layers={[{ image: "bg1.webp", speed: 15 }]}
            className="aspect-[2/1]"
          >
            <div className="container parallaxContent">
              <div className="row">
                <div className="col-md">
                  <p style={{ fontSize: "4em" }} className="raleway text-0">
                    {this.props.language === "pl" ? "Projekty" : "Projects"}
                  </p>
                </div>
              </div>
              <div className="text-1 container">
                <div className="row">{projects}</div>
              </div>
            </div>
          </ParallaxBanner>
        </ParallaxProvider>
      </div>
    );
  }
}

export default Projects;
