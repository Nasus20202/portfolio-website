import React from "react";
import './Experience.css';
import Card from 'react-bootstrap/Card';


function ExperienceLine(props){
    return (
        <Card style={{width: '100%'}} className="text-4 mb-4 bg-0 card-experience">
            <Card.Body>
                <div className="mb-1 float-end">{props.experience.time[props.language]}</div>
                <Card.Title className="raleway" style={{fontWeight: 'bold'}}>{props.experience.name[props.language]}</Card.Title>
                <Card.Text>
                {props.experience.description[props.language]}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

class Experience extends React.Component
{
    constructor(props)
    {
        super(props);
        this.experience =[
            {   name: { 'pl': 'Politechnika Gdańska', 'en': 'Gdańsk University of Technology' }, 
                time: { 'pl': 'Od 2022', 'en': 'From 2022' }, 
                description: { 
                    'pl': 'Kierunek: Informatyka na wydziale Elektroniki, Informatyki i Telekomunikacji', 
                    'en': 'Field of study: Computer Science at Faculty of Electronics, Telecommunications and Informatics' 
                } 
            },
            {   name: { 'pl': 'Staż w Dynatrace', 'en': 'Dynatrace Internship' }, 
                time: { 'pl': '07.2023 - 09.2023, 07.2024 - obecnie', 'en': '07.2023 - 09.2023, 07.2024 - current' }, 
                description: { 
                    'pl': 'Jako członek zespołu odpowiedzialnego za aplikacje demo dla oprogramowania Dynatrace, pracowałem nad aplikacją webową opartą na mikroserwisach.', 
                    'en': 'As a member of a team responsible for the demo apps for Dynatrace software, I was working on microservices based web app.' 
                } 
            },
        ];
        this.experience.reverse();
    }

    render(){
        const experience = this.experience.map((item) => {
            return(<div className="col-md-6  d-flex align-items-stretch"  key={item.name['en']}>
                 <ExperienceLine language={this.props.language} experience={item}/>
             </div>
             )
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <p style={{fontSize: '3em'}} className='raleway'>{this.props.language === 'pl' ? "Edukacja i Doświadczenie" : 'Education and Experience'}</p>
                    <div className="row">
                        {experience}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;