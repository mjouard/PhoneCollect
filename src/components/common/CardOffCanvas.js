import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai"
import {total, list, remove } from 'cart-localstorage' 
import 'bootstrap/dist/css/bootstrap.min.css';

function deleteProduct(id, setCart){
    remove(id)
    setCart(list())
}

export default function CardOffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cart, setCart] = useState(list())

  return (
    <>
      <AiOutlineShoppingCart onClick={handleShow} style={{position: 'absolute', right: "20px", cursor: "pointer"}} />
      <div style={{position: 'absolute', right: "15px", top: "2%", fontSize: "25px"}}>
            {list().length}
      </div>
      <Offcanvas placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Votre panier</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {list().map( product => {
            return(
                <div>  <AiFillDelete onClick={ () => deleteProduct(product.id, setCart)}/> {product.name} {product.price}€</div>
            )
          })}
          <p> {total()}€ </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}