import "./page.css"
import {useNavigate} from 'react-router-dom';

export default function Page(props){
    const navigate = useNavigate();

    const navigateToProducts = () => {
      // 👇️ navigate to /products
      navigate('/products');
    };


    return(
        <div>
            <div className="home-div-page-1">
                <img className="home-image-large" src="page/circuit-elec-large.jpeg" />
                <img className="home-image-middle" src="page/ampoule-middle.jpeg" />
                <img className="home-image-small" src="page/ampoule-small.jpeg" />
                <p className="text-home-page-1">
                    Phone Collect
                </p>
            </div>
            <div className="home-div-page-2">
                <div 
                style={{fontSize: 30, cursor: "pointer", backgroundColor: "cyan", width: "30vw", textAlign: "center"}}
                onClick={navigateToProducts}
                >
                    See products
                </div>
            </div>
            <div className="home-div-page-3" />
        </div>
    )
}