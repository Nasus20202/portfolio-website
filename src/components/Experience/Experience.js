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
                time: { 'pl': '07.2023 - 09.2023', 'en': '07.2023 - 09.2023' }, 
                description: { 
                    'pl': 'Pracowałem nad aplikacją demo Dynatrace. Byłem odpowiedzialny za refaktoryzację mikroserwisu. Technologie: ASP.NET Core, Docker', 
                    'en': 'I was working on the Dynatrace demo application. I was responsible for refactoring a microservice. Stack: ASP.NET Core, Docker' 
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