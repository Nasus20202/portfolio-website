import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: Cookies.get('language') || 'pl'
    };
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(event) {
    if(this.state.language === 'pl') {
      this.setState({
        language: 'en'
      });
      Cookies.set('language', 'en');
    } else{
      this.setState({
        language: 'pl'
      });
      Cookies.set('language', 'pl');
    }
  }

  render(){
    return (
      <div>
        <Navbar changeLanguage={this.handleLanguageChange} language={this.state.language}/>
        Language: {this.state.language}
        <section id="about">About Me</section>
        <section id="projects">Projects</section>
        <section id="experience">Education and experience</section>
        <section id="contact">Contact</section>
      </div>
    );
  }
}

export default App;
