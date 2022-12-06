import { FaShoppingCart, FaRegBookmark, FaFireAlt } from 'react-icons/fa';
import Slider from './Slider';
export function Products(props) {
    return(
        <div className='productList'>
            <div key={props.id} className='productCard'>
                    <h3 className='productName'>{props.name.toUpperCase()}</h3>
                    <div className='productImage'>
                        <Slider slides={props.image}/>
                    </div>
                <FaShoppingCart className={"productCard__cart"} />
                <FaRegBookmark className={"productCard__wishlist"} />
                <FaFireAlt className={"productCard__fastSelling"} />

                <div className='productCard__content'>
                    <div className='displayStack__1'>
                        <div className='productPrice'>${props.price}</div>
                        <div className='productSales'>{props.capacity} GO</div>
                    </div>
                </div>
            </div>
        </div>
    )
}