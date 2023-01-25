import "./page.css"
import { useNavigate } from 'react-router-dom';
import Slider from "./Slider";

export default function HomePage(props) {
    const navigate = useNavigate();

    const navigateToProducts = (type) => {
        // 👇️ navigate to /products
        navigate('/products/' + type);
    };

    const phoneSlides = ["home-2/phone-product-1.jpg", "home-2/phone-product-2.webp"]

    const computerSlides = ["home-2/computer-product-1.jpeg", "home-2/computer-product-2.jpg", "home-2/computer-product-3.jpeg"]


    return (
        <div>
            <div className="home-div-page-1">
                <p className="text-home-page-1">
                    Phone Collect
                </p>
                <div className="container-image-home">
                    <img src="/Iphone 12 2.png" className="image-home" alt="" />
                </div>
            </div>
            <div className="home-div-page-2">
                <div className="home-page-2-container">
                    <div className="home-2-div-products"
                        onClick={() => navigateToProducts(1)}>
                        Voir nos téléphones
                        <Slider src_prefixe="" slides={phoneSlides} showArrows={false} autoPlay={true} showIndicators={false} showThumbs={false} />
                    </div>
                    <div className="home-2-div-products"
                        onClick={() => navigateToProducts(2)}>
                        Voir nos ordinateurs
                        <Slider src_prefixe="" slides={computerSlides} showArrows={false} autoPlay={true} showIndicators={false} showThumbs={false} />
                    </div>
                </div>
            </div>
            <div className="home-div-page-3" />
        </div>
    )
}