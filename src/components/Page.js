import Header from "./common/Header";
import "./page.css"

export default function Page(props){
    return(
        <div>
            <Header />
            <div>
                <img src="page/home-image-large.jpeg" className="home-image-large"/>
                <img src="page/home-image-middle.jpeg" className="home-image-middle"/>
            </div>
        </div>
    )
}