import React, { Component } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './Gallery.css';
import {Motion, spring} from 'react-motion';

import thumb1 from './img/no-enemies.jpg';
import thumb2 from './img/nox.jpg';
import thumb3 from './img/wormhole.jpg';

import About from './About.js';



class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showing: window.pageYOffset <100
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        var scrollTop = window.pageYOffset

        if (scrollTop < 100) {
            this.setState({ showing: false});
            
        } else {
            this.setState({ showing: true});
        }
    }

    handleScroll(event) {
        var scrollTop = window.pageYOffset
        // let overlayWrap = document.getElementById('wrapper')


        if (scrollTop < 100) {
            this.setState({ showing: false});
            // overlayWrap.classList.add('dontTouch');

        } else {
            this.setState({ showing: true});
            // overlayWrap.classList.remove('dontTouch');

        }
    }




    render() {



        const springconfig = { stiffness: 75, damping: 9};

  
    
    return (
        <div> 
        <About /> 
        <Motion
        defaultStyle={{ translateY: 100, scale: 0.9, blur: 35}}
        style={{
            scale: spring(this.state.showing ? 1 : 0.9, springconfig),
            translateY: spring(this.state.showing ? 0 : 100, springconfig)
        }}>

        {style => <div className="galleryContainer"    id="wrapper"  
            style={{ 
                     transform: `translateY(${style.translateY}px) 
                     scale(${style.scale})` 
                  }}>


             <ResponsiveMasonry
                columnsCountBreakPoints={{414: 1, 415: 3}}
            >
                <Masonry gutter="1vw">
                    <div className="galleryCard">
                        <img src={thumb3} /></div>
                    <div className="galleryCard">
                        <img src={thumb2} /></div>
                    <div className="galleryCard">
                        <img src={thumb1} /></div>
                    <div className="galleryCard">
                        <img src={thumb2} /></div>
                    <div className="galleryCard">
                        <img src={thumb1} /></div>
                    <div className="galleryCard">
                        <img src={thumb2} /></div>
                    <div className="galleryCard">
                        <img src={thumb1} /></div>
                    <div className="galleryCard">
                        <img src={thumb2} /></div>
     

                </Masonry>

            </ResponsiveMasonry>
            </div>


        }
        </Motion>
        </div>

    );
    }
}

export default Gallery;

