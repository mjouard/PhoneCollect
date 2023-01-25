import { useParams } from "react-router-dom"
import Header from "../common/Header"
import Slider from "../Slider"
import "./singleproductpage.css"
import { GrStorage } from "react-icons/gr"
import { add, exists } from 'cart-localstorage'
import { useEffect, useState } from "react"
import constants from "../../utils/constants"
import { getProduct } from "../../API/ProductsAPI"

const static_host = constants.server_host + constants.static_files

function addToCart(product, refresh, setRefresh) {
    if (!exists(product.id)) {
        add(product)
        setRefresh(!refresh)
    }
}

export default function SingleProductPage(props) {
    let { id } = useParams();
    const [product, setProduct] = useState();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        !isMounted &&
            getProduct(id).then((json) => {
                setProduct(json);
                setIsMounted(true);
            });
    }, [isMounted]);

    const [refresh, setRefresh] = useState(exists(id))
    return (
        <div>
            <Header />
            {isMounted ?
                <div className="single-product-container">
                    <div className="product-slider-container">
                        <div className="product-slider-image">
                            <Slider src_prefixe={static_host} slides={product.image} showArrows={false} autoPlay={true} showIndicators={false} />
                        </div>
                    </div>
                    <div className="product-data-container">
                        <p className="single-product-title"> {product.name} </p>
                        <div style={{ textAlign: "left", display: "flex", flexDirection: "row" }}>
                            <GrStorage />
                            <p> {product.capacity} GO</p>
                        </div>
                        <button className="buy-button" onClick={() => addToCart(product, refresh, setRefresh)}> Ajouter au panier </button>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}