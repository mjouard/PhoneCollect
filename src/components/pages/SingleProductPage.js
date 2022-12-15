import { useParams } from "react-router-dom"
import Header from "../common/Header"
import contents from "../../content"
import Slider from "../Slider"


export default function SingleProductPage(props){
    let { id } = useParams()
    const product = contents.find(product => product.id === parseInt(id))
    return(
        <div>
            <Header />
            <div style={{width: "40%"}}>
                <Slider slides={product.image} showArrows={false} autoPlay={true} showIndicators={false}/>
            </div>
        </div>
    )
}