import React from 'react';
import bodymovin from 'bodymovin'
import animationData from './hobbies.json'
import { Row } from 'react-materialize'

import './Hobbies.css'

class Hobbies extends React.Component {

    animationIsAttached = false;

    componentDidMount () {
        this.attachAnimation()
    }

    render() {
        return (
        <div className="wrap">
            <h1>Hobbies</h1>
            <Row>
                <div ref={(animationDiv) => { this.animationContainer = animationDiv; }}/>
            </Row>
            <Row>
                <div className="social-media">
                    <a href="#"><span>Facebook</span></a>
                    <a href="#"><span>Twitter</span></a>
                    <a href="#"><span>Google+</span></a>
                    <a href="#"><span>Github</span></a>
                    <a href="#"><span>Dribbble</span></a>
                    <a href="#"><span>CodePen</span></a>
                </div>
            </Row>
        </div>
        )
    }

    attachAnimation = () => {
        if (this.animationContainer !== undefined && !this.animationIsAttached) {
          const animationProperties = {
            container: this.animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
          }
  
          bodymovin.loadAnimation(animationProperties);
        }
      }
}

export default Hobbies; 