import { useNavigate } from 'react-router-dom';
import Slider from './Slider';
import constants from '../utils/constants';
import { useEffect, useState } from 'react';
import { start_animation_scale } from '../utils/utils';

const static_host = constants.server_host + constants.static_files

export function Products(props) {
    const navigate = useNavigate();
    const [isMounted, setIsMounted] = useState(false)

    const navigateToProduct = () => {
        // 👇️ navigate to /products
        navigate('/product/' + props.name + '/' + props.id);
    };
    useEffect(() => {
        !isMounted &&
            start_animation_scale("productList");
            setIsMounted(true);
    }, [isMounted]);

    return (
        <div className='productList' onClick={navigateToProduct}>
            <div key={props.id} className='productCard'>
                <h3 className='productName'>{props.name.toUpperCase()}</h3>
                <div className='productImage'>
                    <Slider src_prefixe={static_host} slides={props.image} showThumbs={false} showIndicators={false} showArrows={false} />
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