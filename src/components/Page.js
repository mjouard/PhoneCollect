import "./page.css"
import {useNavigate} from 'react-router-dom';
import Slider from "./Slider";

export default function Page(props){
    const navigate = useNavigate();

    const navigateToProducts = () => {
      // 👇️ navigate to /products
      navigate('/products');
    };

    function wheel(e, minScroll){
        var pageHeight = window.innerHeight;
        const scrollY = window.scrollY
        const actualPage = Math.round(scrollY/pageHeight)
        if (e.deltaY > minScroll){
            window.scrollTo({
                top: pageHeight * (actualPage + 1),
                behavior: 'smooth',
            });
        }
        else if (e.deltaY < -minScroll){
            window.scrollTo({
                top: pageHeight * (actualPage - 1),
                behavior: 'smooth',
            });
        }
    }

    function scroll(e, minScroll){
        var pageHeight = window.innerHeight;
        const scrollY = window.scrollY
        const actualPage = Math.round(scrollY/pageHeight)
        window.scrollTo({
            top: pageHeight * (actualPage + 1),
            behavior: 'smooth',
        });
    }

    const phoneSlides = ["home-2/phone-product-1.jpg", "home-2/phone-product-2.webp"]

    const computerSlides = ["home-2/computer-product-1.jpeg", "home-2/computer-product-2.jpg", "home-2/computer-product-3.jpeg"]


    return(
        <div onWheel={(e)=>wheel(e, 50)} onScroll={(e) => scroll(e, 5)}>
            <div className="home-div-page-1">
                <p className="text-home-page-1">
                    Phone Collect
                </p>
            </div>
            <div className="home-div-page-2">
                <div className="home-page-2-container">
                    <div style={{fontSize: 30, cursor: "pointer", width: "80%", textAlign: "center", backgroundColor: "orange"}}
                    onClick={navigateToProducts}>
                        Voir nos téléphones
                        <Slider slides={phoneSlides} showArrows={false} autoPlay={true} showIndicators={false}/>
                    </div>
                    <div style={{fontSize: 30, cursor: "pointer", width: "80%", textAlign: "center", backgroundColor: "orange"}}
                    onClick={navigateToProducts}>
                        Voir nos ordinateurs
                        <Slider slides={computerSlides} showArrows={false} autoPlay={true} showIndicators={false}/>
                    </div>    
                </div>
            </div>
            <div className="home-div-page-3" />
        </div>
    )
}