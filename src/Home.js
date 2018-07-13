import React, { Component } from 'react';
import Gallery from './Gallery.js';
import thumb1 from './img/no-enemies.jpg';
import thumb2 from './img/nox.jpg';

class Home extends Component {
    render() {
      return (
        <div className="galleryContainer">

        <Gallery>
                
        <img src={thumb1} />
        <img src={thumb2} />
            
      </Gallery>
      </div>
       
      );
    }
  }
  
  export default Home;
  