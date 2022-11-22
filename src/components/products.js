import { FaShoppingCart, FaRegBookmark, FaFireAlt } from 'react-icons/fa';
import ImageSlider from './ImageSlider';

export function Products(props) {
    return(
        <div className='productList'>
            <div key={props.id} className='productCard'>
                    <div className='productImage'>
                        <ImageSlider slides={props.image}/>
                    </div>
                <FaShoppingCart className={"productCard__cart"} />
                <FaRegBookmark className={"productCard__wishlist"} />
                <FaFireAlt className={"productCard__fastSelling"} />

                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <div className='displayStack__1'>
                        <div className='productPrice'>${props.price}</div>
                        <div className='productSales'>{props.capacity} GO</div>
                    </div>
                </div>
            </div>
        </div>
    )
}