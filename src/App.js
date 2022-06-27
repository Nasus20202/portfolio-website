import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: Cookies.get('language') || 'pl'
    };
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.sections = [{id: 'about', name: {'pl': 'O mnie', 'en': 'About'}}, {id: 'projects', name: {'pl': 'Projekty', 'en': 'Projects'}}, {id: 'experience', name: {'pl': 'Edukacja', 'en': 'Education'}}, {id: 'contact', name: {'pl': 'Kontakt', 'en': 'Contact'}}];
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
      <div className='bg-1 text-4'>
        <Navbar sections={this.sections} changeLanguage={this.handleLanguageChange} language={this.state.language}/>
        <section id="about"><About language={this.state.language}/></section>
        <section id="projects"><Projects language={this.state.language}/></section>
        <section id="experience"><Experience language={this.state.language}/></section>
        <section id="contact"><Contact language={this.state.language}/></section>
      </div>


    );
  }
}

export default App;
