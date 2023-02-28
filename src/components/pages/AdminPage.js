import { useEffect, useState } from "react"
import "./adminManageProduct.css"
import constants from "../../utils/constants";
import { deleteProduct, getProducts } from "../../API/ProductsAPI";
import NewProduct from "../admin/newProduct";
import { AiFillDelete } from "react-icons/ai"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from '@mui/material/Modal';
import { SlNote } from "react-icons/sl"
import EditProduct from "../admin/editProduct";
import DrawerAppBar from "../common/Navbar";
const server_host = constants.server_host;

export default function AdminPage() {
    const [products, setProducts] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const [openDelete, setOpenDelete] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState()

    useEffect(() => {
        !isMounted &&
            getProducts().then((json) => {
                setProducts(json.data);
                setIsMounted(true);
            });
    }, [isMounted]);

    const execDelete = (id, name) => {
        deleteProduct(id).then(res => {
            if (res.id) {
                setOpenDelete(false)
                toast.success(name + "a été supprimé!", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000
                });
                updateDelete(id);
            }
        })
    }

    const updateDelete = (id) => {
        setProducts((current) =>
            current.filter((product) => product.id !== id)
        );
    }

    const updateAdd = (product) => {
        console.log(products)
        setProducts([...products, product])
        console.log(products)
    }

    return (
        <div>
            <DrawerAppBar />
            <Modal
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{ padding: "20px", border: "2px solid white", textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "50%", backgroundColor: "black", color: "white", borderRadius: "10px", marginTop: "auto" }}>
                    <h1>Voulez vous vraiment supprimer ce produit ?</h1>
                    <button style={{ marginTop: "30px", borderRadius: "10px", fontSize: "calc( 20px + 2% )" }} onClick={() => execDelete(selectedProduct.id, selectedProduct.name)}>
                        {selectedProduct && "Supprimer " + selectedProduct.name + " ?"}
                    </button>
                </div>
            </Modal>
            <NewProduct updateAdd={updateAdd} />
            <div className="admin-list-container">
                {products.map(product => {
                    return (
                        <div className="admin-list-product" key={product.id}>
                            <img className="item-img" src={server_host + '/images/' + product.image} />
                            <p className="product-text">{product.name}</p>
                            <p className="product-text">{product.price} €</p>
                            <p className="product-text">{product.capacity} GO</p>
                            <p className="product-text">{product.isAvailable}</p>
                            <div className="icon-container">
                                <EditProduct product={product}/>
                                <AiFillDelete className="icon-delete-product" onClick={() => { setSelectedProduct(product); setOpenDelete(true) }} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <ToastContainer />
        </div>
    )
}