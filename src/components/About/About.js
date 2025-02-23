import React from "react";
import "./About.css";

function ContentPl() {
  return (
    <div className={"aboutMe"}>
      Nazywam się <b>Krzysztof Nasuta</b>. Jestem studentem informatyki na
      Politechnice Gdańskiej. Od zawsze fascynowały mnie komputery. W szkole
      podstawowej zainteresowało mnie, w jaki sposób tworzy się programy. W ten
      sposób zacząłem swoją przygodę z programowaniem. Na początku bawiłem się
      Scratchem. Pierwszym prawdziwym językiem programowania, którego się
      uczyłem był Python. Od tego czasu towarzyszy mi i umożliwia wykonywanie
      wielu ciekawych projektów. W gimnazjum nauczyłem się podstaw frontendu,
      czyli HTML, CSS i JavaScript. Zainteresował mnie także język C# oraz
      platforma .NET. Poznałem podstawy programowania aplikacji okienkowych z
      użyciem WPF. Nauczyłem się wtedy także podstaw języka C++. Wykorzystywałem
      go głównie do programowania algorytmów oraz na egzamin maturalny. W tym
      czasie także miałem pierwszą styczność z backendem. Moim pierwszym
      projektem był sklep internetowy wykonany z wykorzystaniem frameworka
      Django. Tworzenie tego programu było dla mnie wyjątkowo ciekawe i
      zachęciło mnie do pogłębienia mojej wiedzy związanej z aplikacjami
      internetowymi. Zdecydowałem się poznać framework ASP.NET Core. Z jego
      użyciem wykonałem m.in. nową, lepszą wersję sklepu internetowego. W
      międzyczasie poznałem także środowisko Node.js, które chętnie wykorzystuję
      do tworzenia różnych botów do serwisu Discord. Aby zgromadzić wszystkie
      moje projekty, postanowiłem utworzyć tą stronę internetową. Była to dla
      mnie motywacja, aby poznać JavaScriptowy framework React. <br />
      <p style={{ marginTop: "6px" }}>
        W wolnym czasie lubię słuchać muzyki, spacerować po lesie oraz grać na
        komputerze. Uwielbiam składać komputery. Do moich hobby należą
        klawiatury mechaniczne.{" "}
      </p>
    </div>
  );
}

function ContentEn() {
  return (
    <div className={"aboutMe"}>
      {" "}
      My name is <b> Krzysztof Nasuta</b>. I am a computer science student at
      the Gdańsk University of Technology. I've always been fascinated by
      computers. In primary school, I was interested in how programs are
      created. This is how I started my adventure in programming. At first, I
      was playing with Scratch. As my first real programming language, I chose
      Python. Since then, I have been using it to create many projects. Then I
      learned the basics of the frontend, i.e. HTML, CSS and JavaScript. I was
      also interested in the C# language and the .NET platform. I discovered the
      basics of programming window applications using WPF. Then I also learned
      the basics of the C++ language. I used it a lot to program algorithms and
      for the matura exam. At that time, I also had my first contact with
      backend programming. My first project was an online store programmed using
      the Django framework. Creating this program was extremely interesting for
      me and encouraged me to deepen my knowledge related to internet
      applications. I decided to learn the ASP.NET Core framework. With its use,
      I have created for example a new, better version of the online store. In
      the meantime, I also got to know the Node.js environment which I often use
      to create various bots for Discord. To gather all my projects, I decided
      to create this website. It was the motivation for me to learn the
      JavaScript framework React. <br />
      <p style={{ marginTop: "6px" }}>
        In my spare time, I like listening to music, walking outdoor and playing
        on the computer. I love building computers. Mechanical keyboards are one
        of my hobbies.
      </p>
    </div>
  );
}

class About extends React.Component {
  constructor(props) {
    super(props);
    this.skills = [
      [
        { pl: "C# i platforma .NET", en: "C# and .NET platform" },
        "csharp.webp",
      ],
      [
        { pl: "Framework ASP.NET Core", en: "ASP.NET Core Framework" },
        "dotnet.webp",
      ],
      [{ pl: "Python", en: "Python" }, "python.webp"],
      [{ pl: "TypeScript", en: "TypeScript" }, "typescript.webp"],
      [{ pl: "Node.js", en: "Node.js" }, "nodejs.webp"],
      [{ pl: "React", en: "React" }, "react.webp"],
      [{ pl: "Java", en: "Java" }, "java.webp"],
      [{ pl: "Docker", en: "Docker" }, "docker.webp"],
      [{ pl: "Kubernetes", en: "Kubernetes" }, "kubernetes.webp"],
      [{ pl: "Terraform", en: "Terraform" }, "terraform.webp"],
      [{ pl: "Ansible", en: "Ansible" }, "ansible.webp"],
    ];
  }

  render() {
    const skills = this.skills.map((skill) => {
      return (
        <li key={skill[1]} style={{ margin: "5px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {skill[0][this.props.language]}
            {skill[1] !== "" ? (
              <img
                style={{ height: "30px" }}
                className="img-fluid"
                src={skill[1]}
                alt={skill[0][this.props.language]}
              />
            ) : (
              ""
            )}
          </div>
        </li>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <p style={{ fontSize: "4em" }} className="raleway">
              {this.props.language === "pl" ? "O mnie" : "About me"}
            </p>
            {this.props.language === "pl" ? <ContentPl /> : <ContentEn />}
          </div>
          <div className="col-md-4">
            <p style={{ fontSize: "3em" }} className="raleway">
              {this.props.language === "pl" ? "Umiejętności" : "Skills"}
            </p>
            <ul className={"skills"}>{skills}</ul>
            <p style={{ fontSize: "1.5em" }} className="raleway">
              {this.props.language === "pl" ? "Języki" : "Languages"}
            </p>
            <ul style={{ fontSize: "1.1em" }}>
              <li>
                {this.props.language === "pl" ? "Polski" : "Polish (native)"}
              </li>
              <li>
                {this.props.language === "pl"
                  ? "Angielski (C1, certyfikat B2)"
                  : "English (C1, B2 certificate)"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
