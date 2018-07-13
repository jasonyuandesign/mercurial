import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './About.css';
import './Gallery.css';

import scrollToComponent from 'react-scroll-to-component';



class About extends Component {

   
    constructor(props) {
        super(props)
        
        this.state = {
            showing: window.pageYOffset <100
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        // scrollToComponent(this.About, { offset: 0, align: 'top', duration: 250, ease:'outCirc'});

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
        // let overlay = document.getElementById('about')

        if (scrollTop < 100) {
            this.setState({ showing: false});
            // overlay.classList.remove('dontTouch')
            
        } else {
            this.setState({ showing: true});
            // overlay.classList.add('dontTouch')

        }
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
        // let arrOfPtags = document.getElementsByTagName("p")
        // if (!this.state.isToggleOn) {
        //     for (let i = 0;i < arrOfPtags.length; i++){
        //         arrOfPtags[i].classList.add("morefun");
        //     }
        // } else {
        //     for (let i = 0;i < arrOfPtags.length; i++) {
        //         arrOfPtags[i].classList.remove("morefun")
        //     }
        // }
      }

    onMouseOver() {
        // let email = document.getElementById('email')
        // email.innerText = "Email"
        // email.style.color = "blue"
        // let twitter = document.getElementById('twitter')
        // twitter.innerText = "Twitter"
        // twitter.style.color = "green"
        // let linkedin = document.getElementById('linkedin')
        // linkedin.innerText = "LinkedIn"
        // linkedin.style.color = "red"
    }
    
    onMouseLeave() {
        // let email = document.getElementById('email')
        // email.innerText = "here"
        // email.style.color = "white"
        // let twitter = document.getElementById('twitter')
        // twitter.innerText = "here"
        // twitter.style.color = "white"
        // let linkedin = document.getElementById('linkedin')
        // linkedin.innerText = "here"
        // linkedin.style.color = "white"
    }


    render() {
        const tightspring = { stiffness: 175, damping: 17};
        const springconfig = { stiffness: 75, damping: 9};
        // const loosespring = { stiffness: 200, damping: 20};

        return (
            <div ref={(section) => { this.About = section;}}>
            
            
            
            <div className="globalContainer">




            <div className="globalGrid squishyBoi">
            <div className="squishyBoi">
                 <h1 onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 750, ease:'inOutCirc'})}>Jason Yuan</h1>
            </div>
            <div className="squishyBoi">
                    <div>

                    <Motion
                    defaultStyle={{opacity: 1, translateY: 40}}
                    style={{
                    opacity: spring(this.state.showing ? 1 : 0.5, tightspring),
                    translateY: spring(this.state.showing ? 0 : 40, tightspring),

                    }}>
                    {style => <h1 id="workLink"
                    style={{ 
                        opacity: style.opacity,
                        transform: `translateY(${style.translateY}px)` 
                        
                    }} onClick={() => scrollToComponent(this.About, { offset: 300, align: 'top', duration: 750, ease:'inOutCirc'})}>

                    Work
                    </h1> }

                    </Motion>

                    </div>
                
                <div>

                <Motion
            defaultStyle={{opacity: 1, translateY: 0, translateX: 0, scale: 1}}
            style={{
                opacity: spring(this.state.showing ? 0.5 : 1, tightspring),
                translateY: spring(this.state.showing ? -45 : 0, tightspring),
                translateX: spring(this.state.showing ? -1 : 0, tightspring),

                scale: spring(this.state.showing ? 0.98 : 1, tightspring)
              
            }}>
                {style => <h1 id='aboutLink'    
            style={{ 
                     opacity: style.opacity,
                     transform: `translateY(${style.translateY}px) translateX(${style.translateX}px) scale(${style.scale}) 
                     ` 
                  }} onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 750, ease:'inOutCirc'})}>

                About
                </h1> }
            
            </Motion>

            </div>


            </div>

{/* THIRDSECTION */}


            <div className="squishyBoi">
            <Motion
                    defaultStyle={{opacity: 1, translateY: 0}}
                    style={{
                    opacity: spring(this.state.showing ? 0 : 1, tightspring),
                    // translateX: spring(this.state.showing ? 100 : 0, loosespring),
                    translateY: spring(this.state.showing ? -175 : 0, tightspring),
                    // blur: spring(this.state.showing ? 10 : 0, loosespring),
                    // scale: spring(this.state.showing ? 1.1 : 1, loosespring)


                    }}>
                    {style => <p  id="workLink"
                    style={{ 
                        opacity: style.opacity,
                        transform: `translateY(${style.translateY}px)`,
                        // WebkitFilter: `blur(${style.blur}px)`
                        
                    }}>

                    I am a designer currently playing with UX at <a href="https://www.apple.com">Apple</a>. I will be graduating from <a href="https://www.risd.edu/academics/graphic-design/undergraduate/">RISD</a> in Spring 2019. Bye haters!
                    </p> }

             </Motion>



                         <div>
            <Motion
                    defaultStyle={{opacity: 1, translateY: 0}}
                    style={{
                    opacity: spring(this.state.showing ? 0 : 1, tightspring),
                    // translateX: spring(this.state.showing ? 100 : 0, loosespring),
                    translateY: spring(this.state.showing ? -160 : 0, tightspring),
                    // scale: spring(this.state.showing ? 1.1 : 1, loosespring)


                    }}>
                    {style => <p id="workLink"
                    style={{ 
                        opacity: style.opacity,
                        transform: `translateY(${style.translateY}px) `,
                        
                    }}>

I studied <a href="https://communication.northwestern.edu/programs/major_theatre">theatre</a> at Northwestern University, where I learned to observe, collaborate, and empathize. 
I believe that the spirit of play is <span className="fun" onClick={this.handleClick}>{this.state.isToggleOn ? 'yay' : 'fun'}</span>damental (ha) to great user experiences. 
I also enjoy <a href="https://uxdesign.cc/how-i-changed-my-life-with-one-medium-post-c7543454d0bd?gi=9db7dd56fcb6">writing</a>, <a href="https://twitter.com/JasonYuanDesign/status/915398998143508480">speaking</a>, and <a href="https://www.skillshare.com/classes/Talking-to-Strangers-An-Introduction-to-User-Interviews/528630630?via=user-profile">teaching</a>. 

</p> }

             </Motion>
            </div>

            <div>
            <Motion
                    defaultStyle={{opacity: 1, translateY: 0}}
                    style={{
                    opacity: spring(this.state.showing ? 0 : 1, tightspring),
                    // translateX: spring(this.state.showing ? 100 : 0, loosespring),
                    translateY: spring(this.state.showing ? -150 : 0, tightspring),
                    // scale: spring(this.state.showing ? 1.1 : 1, loosespring)


                    }}>
                    {style => <p id="workLink"
                    style={{ 
                        opacity: style.opacity,
                        transform: `translateY(${style.translateY}px) `,
                        
                    }}>


{/* Confused? Curious? Feel free to ping me <a href="mailto:me@jasonyuan.design?Subject=Hello!" onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}><span id="email">here</span></a>, <a href="https://www.twitter.com/jasonyuandesign" onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}><span id="twitter">here</span></a>, or <a href="https://www.linkedin.com/in/jasonyuandesign/" onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}><span id="linkedin">here</span></a>. Alternatively, check out my résumé. */}

</p> }

             </Motion>
            </div>

            </div>

            </div>
            </div>


        <Motion

        defaultStyle={{opacity: 0.5, blur: 30}}
        style={{
            opacity: spring(this.state.showing ? 0 : 0.5, springconfig),
            blur: spring(this.state.showing ? 0 : 30, springconfig)
            // brightness: spring(this.state.showing ? 100 : 75, springconfig),
            // saturate: spring(this.state.showing ? 100 : 150, springconfig)

        }}>
            {style => <div className="overlay dontTouch" id="about"
            style={{ backgroundColor: `rgba(0, 0, 0, ${style.opacity})`,

                
                     transform: `scale(${style.scale})`,    
                     WebkitBackdropFilter: `blur(${style.blur}px)` 
                  }}>
                  

                    

                    </div>
            }
        </Motion>
        </div>

        );
    }
}



export default About;
