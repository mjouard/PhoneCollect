import React, { Component } from 'react';
import {IoMdArrowDropleft, IoMdArrowDropright} from 'react-icons/io'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "50%",
    height: "30px",
    width: "30px",
    cursor: "pointer",
}
export default function Slider(props){
        return (
            <Carousel 
            infiniteLoop
            showThumbs={props.showThumbs}
            thumbWidth= "10%"
            showStatus={false}
            showArrows={props.showArrows}
            autoPlay={props.autoPlay}
            showIndicators={props.showIndicators}
            renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                    <IoMdArrowDropleft 
                        onClick={clickHandler}
                        style={{ ...arrowStyles, left: "3%"}}/>
                )
            }
            renderArrowNext={(clickHandler, hasNext, labelNext) =>
                hasNext && (
                    <IoMdArrowDropright 
                        onClick={clickHandler}
                        style={{ ...arrowStyles, right: "3%"}}/>
                )
            }
            >
                {props.slides.map((image, index) => {
                    return (
                        <div key={index}>
                            <img src={image} />
                        </div>
                    )
                })}
            </Carousel>
        );
    }