import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Carosoul extends Component {
    render() {
        return (
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} dynamicHeight={false}>
                <div >
                    <img src={require('../assets/1.jpg')} height="50%" alt="third kkf"/>
                </div>
                <div>
                    <img src={require('../assets/2.jpg')} height="50%" alt="third kkf"/>
                </div>
                {/* <div>
                    <img src={require('../assets/3.jpg')} height="50%"  alt="third kkf"/>
                </div>
                 <div>
                    <img src={require('../assets/4.jpg')} height="50%"  alt="third kkf"/>
                </div>
                 <div>
                    <img src={require('../assets/5.jpg')} height="50%"  alt="third kkf"/>
                </div>
                 <div>
                    <img src={require('../assets/6.jpg')} height="50%"  alt="third kkf"/>
                </div>
                 <div>
                    <img src={require('../assets/7.jpg')} height="50%"  alt="third kkf"/>
                </div>
                 <div>
                    <img src={require('../assets/8.jpg')} height="50%"  alt="third kkf"/>
                </div>
                 <div>
                    <img src={require('../assets/9.jpg')} height="50%"  alt="third kkf"/>
                </div>
                 <div>
                    <img src={require('../assets/10.jpg')} height="50%"  alt="third kkf"/>
                </div>
                 <div>
                    <img src={require('../assets/11.jpg')} height="50%"  alt="third kkf"/>
                </div>
                 <div>
                    <img src={require('../assets/12.jpg')} height="50%"  alt="third kkf"/>
                </div> */}
            </Carousel>
        );
    }
}

export default Carosoul;
