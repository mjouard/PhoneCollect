import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai"
import { total, list, remove } from 'cart-localstorage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

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

    return (
        <>
            <div style={{ position: 'absolute', right: "20px", cursor: "pointer" }} onClick={handleShow}>
                <AiOutlineShoppingCart style={{marginRight: "6px"}}/>
                <div style={{backgroundColor: '#DDC815', borderRadius: '20px', position: 'absolute', right: "0", top: "0", fontSize: "calc(10px + 0.5vw)", minWidth: "calc(10px + 1vw)" }}>
                    {list().length}
                </div>
            </div>
            <Offcanvas placement='end' show={show} onHide={handleClose} style={{ width: "50%" }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <h1>Votre panier</h1></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {list().map(product => {
                        return (
                            <div style={{display: "flex", flexDirection: "row", marginTop: "20px"}}>
                                <img src={product.image[0]} width="70px" style={{cursor: "pointer"}} onClick={() => navigateToProduct(product.name, product.id)}/>
                                <div style={{cursor: "pointer"}} onClick={() => navigateToProduct(product.name, product.id)}>
                                    <h3 style={{fontWeight: "bold"}}>{product.name}</h3>
                                    <p>{product.price}€</p>
                                    <p>{product.capacity} GO</p>
                                </div>
                                <AiFillDelete style={{alignSelf: 'center', marginLeft: "10px"}} cursor="pointer" color="#B82121" onClick={() => deleteProduct(product.id, setCart)} />
                            </div>
                        )
                    })}
                    <button style={{ width: "70%", marginTop: "10px", borderRadius: "5px", backgroundColor: "black", color: "white" }} > Payer {total()}€ </button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}