import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai"
import { total, list, remove } from 'cart-localstorage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './cardoffcanvas.css'
import constants from '../../utils/constants';

const server_host = constants.server_host
const static_files = constants.static_files

function deleteProduct(id, setCart) {
    remove(id)
    setCart(list())
}

export default function CardOffCanvas() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cart, setCart] = useState(list())

    const navigateToProduct = (name, id) => {
        // 👇️ navigate to /products
        setShow(false);
        navigate('/product/' + name + '/' + id);
    };

    const navigateToPayment = () => {
        navigate('/payment');
    }

    return (
        <>
            <div className='cart-icon-container' onClick={handleShow}>
                <AiOutlineShoppingCart className='cart-icon'/>
                <div className='cart-icon-number'>
                    {list().length}
                </div>
            </div>
            <Offcanvas placement='end' show={show} onHide={handleClose} style={{ width: "auto" }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <h1>Votre panier</h1></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {list().map(product => {
                        return (
                            <div key={product.id} className='cart-item-container'>
                                <img src={server_host + static_files + product.image[0]} width="70px" style={{cursor: "pointer", marginLeft: "10px"}} onClick={() => navigateToProduct(product.name, product.id)} alt=""/>
                                <div className='item-details' onClick={() => navigateToProduct(product.name, product.id)}>
                                    <h3 style={{fontWeight: "bold"}}>{product.name}</h3>
                                    <p>{product.price}€</p>
                                    <p>{product.capacity} GO</p>
                                </div>
                                <AiFillDelete className='delete-icon' onClick={() => deleteProduct(product.id, setCart)} />
                            </div>
                        )
                    })}
                    <button className='pay-button' onClick={navigateToPayment}> Payer {total()}€ </button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}