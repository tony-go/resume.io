import React from 'react';
import bodymovin from 'bodymovin'
import animationData from './hobbies.json'



class Hobbies extends React.Component {

    animationIsAttached = false;

    componentDidMount () {
        this.attachAnimation()
    }

    render() {
        return (
        <div className="wrap">
            <h1>Hobbies</h1>
            <div ref={(animationDiv) => { this.animationContainer = animationDiv; }}/>
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
            animationData: animationData,
            assetsPath : './images'
          }
  
          bodymovin.loadAnimation(animationProperties);
        }
      }
}

export default Hobbies; 