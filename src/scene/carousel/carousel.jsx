import React, { Component } from 'react'
import Slider  from 'react-slick';
import {Panel,Button} from 'react-bootstrap'
import './carousel.css'
import Logo1 from '../../images/Material.jpg'
import Logo2 from '../../images/Material1.png'

//Source of this plugin
//https://github.com/akiran/react-slick/blob/master/examples/Responsive.js
//Demos - http://kenwheeler.github.io/slick/

class SimpleSlider extends Component {
    
   constructor(){
       super()
       this.pop = this.pop.bind(this);
   } 

   pop(bgImg){
        const background = {
            backgroundImage: 'url(' + bgImg + ')'
        }
        return background;
   }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };

    const image = [
        {
            heading:"Slider 1",
            images:{Logo1},
            buttonInfo : "LearnMore"
        },
        {
            heading:"Slider 2",
            images:"../../images/Material1.png",
            buttonInfo : "Learn More"
        }
    ]

    // const populateSliderContent = image.map((content,id) =>
    //      <div className="bgimg" key={id} style={() => this.pop(content.images)}>
    //         <h3 className="content">{content.heading}</h3>
    //         <div className="inside-content">
    //             <Button>{content.buttonInfo}</Button>
    //         </div>
    //     </div>);
    
    return (
        <div className="boxw">
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                {/*<div className="images-slider">
                    <h3>Slider 1</h3>
                    <p> This is good!</p>
                    <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" ></img>
                </div>
                <div className="images-slider">
                    <h3>Slider 2</h3>
                    <p>THis is awesome</p>
                    <img src={Logo1} height="400" width="400"></img>
                </div>*/}
                <div className="bgimg" style={{backgroundImage: `url(${Logo1})`}}>
                    <h3 className="content">1</h3>
                    <div className="inside-content">
                        <Button>Learn More</Button>
                    </div>
                </div>
                <div className="bgimg" style={{backgroundImage: `url(${Logo2})`}}>
                    <h3 className="content">2</h3>
                    <div className="inside-content">
                        <Button>Learn More</Button>
                    </div>
                </div>
                </Slider>
            </div>
        </div>
    );
  }
}

export default SimpleSlider;