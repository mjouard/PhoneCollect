import { useParams } from "react-router-dom"
import Header from "../common/Header"
import contents from "../../content"
import Slider from "../Slider"
import "./singleproductpage.css"

export default function SingleProductPage(props){
    let { id } = useParams()
    const product = contents.find(product => product.id === parseInt(id))
    return(
        <div>
            <Header />
            <div className="single-product-container">
                <div className="product-slider-container">
                    <div className="product-slider-image">
                        <Slider slides={product.image} showArrows={false} autoPlay={true} showIndicators={false}/>
                    </div>
                </div>
                <div className="product-data-container">
                    Coucou
                </div>
            </div>
        </div>
    )
}