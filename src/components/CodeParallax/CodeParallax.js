import React from 'react';
import './CodeParallax.css';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { Link } from 'react-scroll';
import code0 from "./img/code0.webp";
import code1 from "./img/code1.webp";
import code2 from "./img/code2.webp";
import code3 from "./img/code3.webp";
import code4 from "./img/code4.webp";

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
            <Link smooth spy to={"about"} offset={-70}>
              <div className='container'>
              <p className='row'><span className='col main'>Krzysztof Nasuta</span></p>
              <p className='row'><span className='col second'>{props.language === 'pl' ? 'Junior Developer' : 'Junior Developer'}</span></p>
              </div>
            </Link>
          </div>
          </ParallaxBanner>
        </ParallaxProvider>
      </div>
    );
}