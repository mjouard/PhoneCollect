import { FaShoppingCart, FaRegBookmark, FaFireAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Slider from './Slider';
export function Products(props) {
    const navigate = useNavigate();

    const navigateToProduct = () => {
        // 👇️ navigate to /products
        console.log(props)
        navigate('/product/' + props.name + '/' + props.id);
      };

    return(
        <div className='productList' onClick={navigateToProduct}>
            <div key={props.id} className='productCard'>
                    <h3 className='productName'>{props.name.toUpperCase()}</h3>
                    <div className='productImage'>
                        <Slider slides={props.image} showThumbs={false} showIndicators={false} showArrows={false}/>
                    </div>

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