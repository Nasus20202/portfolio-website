import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Parralax from '../Parallax/Parallax';

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
    this.state = {position: 0};
    this.navtop = 0;
    this.sections = this.props.sections;
  }

  listenToScroll = () => {
    if(this.navtop === 0){
      this.navtop = document.getElementById('tabs-container').offsetTop;
    }
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    if(window.scrollY >= this.navtop){
      document.getElementById('tabs-container').classList.add('et-hero-tabs-container--top');
    }
    else{
      document.getElementById('tabs-container').classList.remove('et-hero-tabs-container--top');
    }
    const scrolled = winScroll / height
    this.setState({
      position: scrolled,
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  render() {
    let navItems = this.sections.map(section => {
      return <Navitem section={section} language={this.props.language} key={section['id']} />
    });
    let languageButton = <div style={{width: '40px', margin: '15px'}} onClick={this.props.changeLanguage}>
    <img src={this.props.language === 'pl' ? 'en.svg' : 'pl.svg'} alt='language'/>
    </div>
    return (
      <nav className="et-hero-tabs container-fluid">
      <Parralax language={this.props.language}/>
      <div id="tabs-container" className="et-hero-tabs-container">
        {navItems}
        {languageButton}
      </div>
    </nav>
    );
  }
}

export default Navbar;
