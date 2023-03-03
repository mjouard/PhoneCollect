import { useParams } from "react-router-dom"
import Slider from "../Slider"
import "./singleproductpage.css"
import { TiCloudStorageOutline } from "react-icons/ti"
import { add, exists } from 'cart-localstorage'
import { useEffect, useState } from "react"
import constants from "../../utils/constants"
import { getProduct } from "../../API/ProductsAPI"
import Loader from "../common/loader"
import DrawerAppBar from "../common/Navbar"
import { BsInfoCircle } from "react-icons/bs"

const static_host = constants.server_host + constants.static_files
const info_text = "Tous les produits vendus sur Phone Collect proviennent de reconditionneurs experts et vérifiés, qui s'engagent à tester chaque appareil selon notre charte qualité. Chaque produit est 100% fonctionnel, parfaitement nettoyé et garanti."

function addToCart(product, refresh, setRefresh, fullAnimation) {
    if (!exists(product.id)) {
        add(product)
        setRefresh(!refresh)
        fullAnimation();
    }
}

export default function SingleProductPage(props) {
    let { id } = useParams();
    const [product, setProduct] = useState();
    const [isMounted, setIsMounted] = useState(false);
    const color = {title: "Bleu", hexa: "#2596be"}

    useEffect(() => {
        !isMounted &&
            setTimeout(function () {
                getProduct(id).then((json) => {
                    setProduct(json);
                    setIsMounted(true);
                });
            }, 500);
    }, [isMounted]);

    useEffect(() => {
        setProduct()
        setIsMounted(false)
    }, [id]);

    const [refresh, setRefresh] = useState(exists(id))

    function animateBounce(){
        var cartContainer = document.getElementsByClassName("cart-icon-container");
        if (cartContainer) {
            cartContainer[0].classList.remove("bounce")
            cartContainer[0].classList.add("bounce")
            cartContainer[1].classList.remove("bounce")
            cartContainer[1].classList.add("bounce")
        }
    }

    function clearBounce(){
        var cartContainer = document.getElementsByClassName("cart-icon-container");
        if (cartContainer) {
            cartContainer[0].classList.remove("bounce")
            cartContainer[1].classList.remove("bounce")
        }
    }

    function fullAnimation(){
        animateBounce();
        setTimeout(() => {
            clearBounce();
          }, "1000")
    }
    
    return (
        <div>
            <DrawerAppBar />
            {isMounted ?
                <div className="single-product-container">
                    <div className="product-slider-container">
                        <div className="product-slider-image">
                            <Slider src_prefixe={static_host} slides={product.image} showArrows={false} autoPlay={true} showIndicators={false} />
                        </div>
                    </div>
                    <div className="product-data-container">
                        <p className="single-product-title"> {product.name} </p>
                        <div className="single-product-stats">
                            <div className="stats-item">
                                <TiCloudStorageOutline style={{marginRight: "10px", fontSize: "25px"}}/>
                                <div> {product.capacity} GO</div>
                            </div>
                            <div className="stats-item">Très bon état</div>
                            <div className="stats-item">{product.price}€</div>
                            <div className="stats-item">
                                <div className="color-circle" style={{backgroundColor: color.hexa}}/>
                                {color.title}
                            </div>
                        </div>
                        <div className="single-product-description">
                            <BsInfoCircle style={{fontSize: "25px", marginRight: "10px"}} />
                            {info_text}
                        </div>
                        <button className="button-add-cart" onClick={() => addToCart(product, refresh, setRefresh, fullAnimation)}>
                            Ajouter au panier
                        </button>
                    </div>
                </div>
                :
                <Loader />
            }
        </div>
    )
}