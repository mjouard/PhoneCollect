import { useNavigate } from 'react-router-dom';
import Slider from './Slider';
import constants from '../utils/constants';
import { useEffect, useState } from 'react';

const static_host = constants.server_host + constants.static_files

function start_animation() {
    var list = document.getElementsByClassName("productList");

    var delay = 0;

    for (var i = 0; i < list.length; ++i) {
        list[i].style.animationDelay = delay + 's';
        delay += 0.25;
    }
}

export function Products(props) {
    const navigate = useNavigate();
    const [isMounted, setIsMounted] = useState(false)

    const navigateToProduct = () => {
        // 👇️ navigate to /products
        navigate('/product/' + props.name + '/' + props.id);
    };
    useEffect(() => {
        !isMounted &&
            start_animation();
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