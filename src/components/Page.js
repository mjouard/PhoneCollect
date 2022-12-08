import Header from "./common/Header";
import "./page.css"

export default function Page(props){
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
            <div className="home-div-page-2" />
            <div className="home-div-page-3" />
        </div>
    )
}