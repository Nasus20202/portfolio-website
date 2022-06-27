import React from 'react';
import './CodeParallax.css';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import bg1 from "./img/bg-1.jpg";
import bg2 from "./img/bg-2.png";
import bg3 from "./img/bg-3.png";
import bg4 from "./img/bg-4.png";
import bg5 from "./img/bg-5.png";

export default function CodeParallax() {
    return (
      <div>
        <ParallaxProvider>
        <ParallaxBanner className='codeParallax'
          layers={[
            {
              image: bg1,
              speed: -50,
            },
            {
              image: bg2,
              speed: -40,
            },
            {
              image: bg3,
              speed: -30,
            },
            {
              image: bg4,
              speed: -20,
            },
            {
              image: bg5,
              speed: -10,
            },
          ]}
          style={{ aspectRatio: '2 / 1' }}
        />
        </ParallaxProvider>
      </div>
    );
}