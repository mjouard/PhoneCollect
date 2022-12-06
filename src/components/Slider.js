import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slider(props){
        return (
            <Carousel infiniteLoop showThumbs={false} showStatus={false}>
                {props.slides.map(image => {
                    return (
                        <div>
                            <img src={image} />
                        </div>
                    )
                })}
            </Carousel>
        );
    }