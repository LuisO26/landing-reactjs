import React, {Component} from 'react'
import {Carousel, Item, Caption} from 'react-bootstrap'
import imagen from '../img/imagen1.png'

class CarouselHome extends Component{
    render = ()=>(
                <div className="row">
                    <Carousel className="container-fluid">
                        <Carousel.Item>
                            <img className="imagen-carusel" width={900}  height={500} alt="900x500" src={imagen} />
                            <Carousel.Caption>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  height={500} alt="900x500" width={900} src={imagen} />
                            <Carousel.Caption>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  height={500} alt="900x500" width={900} src={imagen} />
                            <Carousel.Caption>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

    )
}
export default CarouselHome;