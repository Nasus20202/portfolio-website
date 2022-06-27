import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import {Row, Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function Navitem(props){
  return (
      <Link className='et-hero-tab' activeClass="active" smooth spy to={props.section.id}>
        {props.section.name[props.language]}
      </Link>
  )
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.sections = [{id: 'about', name: {'pl': 'O mnie', 'en': 'About'}}, {id: 'projects', name: {'pl': 'Projekty', 'en': 'Projects'}}, {id: 'experience', name: {'pl': 'Edukacja i Doświadczenie', 'en': 'Education & Experience'}}, {id: 'contact', name: {'pl': 'Kontakt', 'en': 'Contact'}}];
  }

  render() {
    let navItems = this.sections.map(section => {
      return <Navitem section={section} language={this.props.language} key={section['id']} />
    });
    return (
      <section class="et-hero-tabs container-fluid">
      <h1>STICKY SLIDER NAV</h1>
      <h3>Sliding content with sticky tab nav</h3>
      <div class="et-hero-tabs-container">
        {navItems}
        <Button onClick={this.props.changeLanguage}>
          {this.props.language === 'pl' ? 'Polski' : 'English'}
        </Button>
        <span class="et-hero-tab-slider"></span>
      </div>
    </section>
    );
  }
}

export default Navbar;
