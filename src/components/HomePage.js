import "./page.css"
import { useNavigate } from 'react-router-dom';
import Slider from "./Slider";
import { useEffect, useState } from "react";

function start_animation() {
    const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('in-out-animation');
            }
        });
    });

    observer.observe(document.querySelector('.home-2-div-products-1'));
    observer.observe(document.querySelector('.home-2-div-products-2'));
}

export default function HomePage(props) {
    const navigate = useNavigate();

    const navigateToProducts = (type) => {
        // 👇️ navigate to /products
        navigate('/products/' + type);
    };
    const [isMounted, setIsMounted] = useState(false)

    const phoneSlides = ["home-2/phone-product-1.jpg", "home-2/phone-product-2.webp"]

    const computerSlides = ["home-2/computer-product-1.jpeg", "home-2/computer-product-2.jpg", "home-2/computer-product-3.jpeg"]

    useEffect(() => {
        !isMounted &&
            start_animation();
            setIsMounted(true);
    }, [isMounted]);
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
                <p className="text-home-page-2">
                    Nos produits
                </p>
                <div className="home-page-2-container">
                    <div className="home-2-div-products-1"
                        onClick={() => navigateToProducts(1)}>
                        <p style={{transform: "rotateY(180deg)"}}>Voir nos téléphones</p>
                        <Slider src_prefixe="" slides={phoneSlides} showArrows={false} autoPlay={true} showIndicators={false} showThumbs={false} />
                    </div>
                    <div className="home-2-div-products-2"
                        onClick={() => navigateToProducts(2)}>
                        <p style={{transform: "rotateY(180deg)"}}>Voir nos ordinateurs</p>
                        <Slider src_prefixe="" slides={computerSlides} showArrows={false} autoPlay={true} showIndicators={false} showThumbs={false} />
                    </div>
                </div>
            </div>
            <div className="home-div-page-3">
                <p className="text-home-page-1">
                    Vendre un appareil
                </p>
            </div>
        </div>
    )
}