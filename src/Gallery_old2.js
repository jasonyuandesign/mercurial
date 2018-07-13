import React, { Component } from 'react';
import StackGrid, { easings } from 'react-stack-grid';
import './Gallery.css';
import thumb1 from './img/no-enemies.jpg';
import thumb2 from './img/nox.jpg';



class Gallery extends Component {
    

    render() {

       
        return (

            
            <div className="galleryContainer">
            <StackGrid
             columnWidth={"33.33%"}
             gutterWidth={30}
             gutterHeight={30}
             duration={1000}
             easing={"cubic-bezier(0.24, 1.36, 0.24, 0.96)"}

             >
             <div className="galleryCard"></div>
             <div className="galleryCard"></div>
             <div className="galleryCard"></div>
             {/* <div className="galleryCard"><img src={thumb2} /></div> */}

             </StackGrid>
            </div>
        );
    }
}

export default Gallery;


