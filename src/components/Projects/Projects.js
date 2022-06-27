import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import './Projects.css';
import Card from 'react-bootstrap/Card';
import {Github, Globe2} from 'react-bootstrap-icons';

function Project(props){
    const github = props.project.github !== '' ? <Card.Link className="btn btn-dark" href={props.project.github} target="_blank">Github <Github/></Card.Link> : '';
    const page = props.project.website !== '' ? <Card.Link className="btn btn-secondary" href={props.project.website} target="_blank">{props.language === 'pl' ? 'Strona' : 'Website'} <Globe2/></Card.Link> : '';
    return(
            <Card style={{width: '100%'}} className="text-4 mb-4">
                <Card.Body className="bg-0">
                    <Card.Title className="raleway" style={{fontWeight: 'bold'}}>{props.project.name[props.language]}</Card.Title>
                    <Card.Text>
                    {props.project.about[props.language]}
                    </Card.Text>
                    {github}
                    {page}
                </Card.Body>
            </Card>
    )
}

class Projects extends React.Component
{
    constructor(props){
        super(props)
        this.projects = [
            {name: {'pl': 'Sklep - ASP.NET Core MVC', 'en': 'ASP.NET Core MVC Shop'}, about: {'pl': 'Sklep internetowy wykonany z użyciem frameworka ASP.NET Core.', 'en': 'Shop'}, github: 'https://github.com/Nasus20202/AspShop', website: 'https://www.example.com', img: ''},
            {name: {'pl': 'SpotiTrack dla Discorda', 'en': 'SpotiTrack for Discord'}, about: {'pl': 'SpotiTrack1', 'en': 'SpotiTrack2'}, github: 'https://github.com/Nasus20202/SpotiTrackForDiscord', website: '', img: ''},
            {name: {'pl': 'Aplikacja Rodzinna', 'en': 'Family App'}, about: {'pl': 'AplikacjaRodzinna', 'en': 'FamilyApp'}, github: 'https://github.com/Nasus20202/FamilyApp', website: 'https://www.example.com', img: ''},
            {name: {'pl': 'Django Sklep', 'en': 'Django Store'}, about: {'pl': 'DjangoSklep', 'en': 'DjangoStore'}, github: 'https://github.com/Nasus20202/django-store', website: 'https://django-store.nasus.repl.co/', img: ''},
            {name: {'pl': 'Cryptenz', 'en': 'Cryptenz'}, about: {'pl': 'Cryptenz', 'en': 'Cryptenz'}, github: 'https://github.com/Nasus20202/Cryptenz', website: '', img: ''},
            {name: {'pl': 'Skracacz linków', 'en': 'Link cutter'}, about: {'pl': 'Skracacz', 'en': 'Cutter'}, github: 'https://github.com/Nasus20202/LinkCutter', website: 'https://www.example.com', img: ''},
            {name: {'pl': 'Wizualizator playlist', 'en': 'Playlist visualizer'}, about: {'pl': 'Wizualizator', 'en': 'Visualizer'}, github: 'https://github.com/Nasus20202/PlaylistVisualizer', website: '', img: ''},
            {name: {'pl': 'League Bot dla Discorda', 'en': 'League Bot for Discord'}, about: {'pl': 'lolBot', 'en': 'lolBot'}, github: 'https://github.com/Nasus20202/lolBot', website: '', img: ''}
        ]
    }

    render(){
        const projects = this.projects.map((project) => {
            return(
                <div key={project.name['en']}  className="col-md-3 d-flex align-items-stretch">
                    <Project project={project} language={this.props.language}/>
                </div>
            )
        });
        return (
            <div>
                <ParallaxProvider>
                    <ParallaxBanner
                        layers={[{ image: 'bg1.webp', speed: 25 }]}
                        className="aspect-[2/1]"
                    >
                    <div className="container  parallaxContent">
                        <div className="row">
                            <div className="col-md">
                                <p style={{fontSize: '4em'}} className='raleway text-0'>{this.props.language === 'pl' ? "Projekty" : 'Projects'}</p>
                            </div>
                        </div>
                        <div className="text-1 container">
                            <div className="row">
                                {projects}
                            </div>
                        </div>
                    </div>
                    </ParallaxBanner>
                </ParallaxProvider>
            </div>
        )
    }
}

export default Projects;