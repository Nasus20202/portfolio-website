import React from "react";
import "./Experience.css";
import Card from "react-bootstrap/Card";

function ExperienceLine(props) {
  return (
    <Card
      style={{ width: "100%" }}
      className="text-4 mb-4 bg-0 card-experience"
    >
      <Card.Body>
        <div className="mb-1 float-end">
          {props.experience.time[props.language]}
        </div>
        <Card.Title className="raleway" style={{ fontWeight: "bold" }}>
          {props.experience.name[props.language]}
        </Card.Title>
        <Card.Text>{props.experience.description[props.language]}</Card.Text>
      </Card.Body>
    </Card>
  );
}

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.experience = [
      {
        name: {
          pl: "",
          en: "",
        },
        time: { pl: "", en: "" },
        description: {
          pl: "",
          en: "",
        },
      },
      {
        name: {
          pl: "Politechnika Gdańska",
          en: "Gdańsk University of Technology",
        },
        time: { pl: "Od 2022", en: "From 2022" },
        description: {
          pl: "Kierunek: Informatyka na wydziale Elektroniki, Informatyki i Telekomunikacji",
          en: "Field of study: Computer Science at Faculty of Electronics, Telecommunications and Informatics",
        },
      },
      {
        name: { pl: "Staż w Dynatrace", en: "Dynatrace Internship" },
        time: {
          pl: "07.2023 - 09.2023, 07.2024 - 03.2025",
          en: "07.2023 - 09.2023, 07.2024 - 03.2025",
        },
        description: {
          pl:
            "Jako członek zespołu odpowiedzialnego za aplikacje demo dla oprogramowania Dynatrace, " +
            "pracowałem nad demonstracyjną aplikacją internetową opartą na mikroserwisach. " +
            "Miałem także okazję korzystać z środowiska Kubernetes oraz z technologi takich jak Terraform i Ansible.",
          en:
            "As a member of a team responsible for the demo apps for the Dynatrace software, " +
            "I worked on a demo web application based on microservices. " +
            "I also had the opportunity to work with Kubernetes environment and technologies like Terraform and Ansible.",
        },
      },
      {
        name: {
          pl: "Software Engineer I w Dynatrace",
          en: "Software Engineer I at Dynatrace",
        },
        time: {
          pl: "03.2025 - obecnie",
          en: "03.2025 - current",
        },
        description: {
          pl: "",
          en: "",
        },
      },
    ];
    this.experience.reverse();
  }

  render() {
    const experience = this.experience.map((item) => {
      return (
        <div
          className="col-md-6  d-flex align-items-stretch"
          key={item.name["en"]}
        >
          <ExperienceLine language={this.props.language} experience={item} />
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p style={{ fontSize: "3em" }} className="raleway">
              {this.props.language === "pl"
                ? "Edukacja i Doświadczenie"
                : "Education and Experience"}
            </p>
            <div className="row">{experience}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
