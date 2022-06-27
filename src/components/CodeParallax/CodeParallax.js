import React from 'react';
import './CodeParallax.css';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { Link } from 'react-scroll';
import code0 from "./img/code0.png";
import code1 from "./img/code1.png";
import code2 from "./img/code2.png";
import code3 from "./img/code3.png";
import code4 from "./img/code4.png";

export default function CodeParallax(props) {
    return (
      <div>
        <ParallaxProvider>
        <ParallaxBanner className='codeParallax'
          layers={[
            {
              image: code0,
              speed: -60,
            },
            {
              image: code1,
              speed: -40,
            },
            {
              image: code2,
              speed: -20
            },
            {
              image: code3,
              speed: 20,
            },
            {
              image: code4,
              speed: 40,
            },
          ]}
          style={{ aspectRatio: '2 / 1' }}>
            12
          <div className='codeParallaxContent container'>
            <Link smooth spy to={"about"}>
              <div className='container'>
              <p style={{fontSize: '10vh', fontWeight:'bold', color: '#a7daff'}} className='row'><span className='col'>Krzysztof Nasuta</span></p>
              <p style={{fontSize: '2em', fontWeight:'bold', color: '#bee9e8'}} className='row'><span className='col'>{props.language === 'pl' ? 'Junior Developer' : 'Junior Developer'}</span></p>
              </div>
            </Link>
          </div>
          </ParallaxBanner>
        </ParallaxProvider>
      </div>
    );
}