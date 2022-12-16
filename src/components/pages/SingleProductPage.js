import { useParams } from "react-router-dom"
import Header from "../common/Header"
import contents from "../../content"
import Slider from "../Slider"
import "./singleproductpage.css"
import { GrStorage } from "react-icons/gr"
import { add, exists, remove } from 'cart-localstorage' 
import { useState } from "react"

function addToCart(product, refresh, setRefresh){
    if (!exists(product.id)){
        add(product)
        setRefresh(!refresh)
    }
}

export default function SingleProductPage(props){
    let { id } = useParams()
    const product = contents.find(product => product.id === parseInt(id))
    const [refresh, setRefresh] = useState(exists(product.id))
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
                    <p className="single-product-title"> {product.name} </p>
                    <GrStorage />
                    <p> {product.capacity} GO</p>
                    <button className="buy-button" onClick={ () => addToCart(product, refresh, setRefresh)}> Ajouter au panier </button>
                </div>
            </div>
        </div>
    )
}