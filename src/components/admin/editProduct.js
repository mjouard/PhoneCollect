import { useState } from "react"
import Modal from '@mui/material/Modal';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createProduct } from "../../API/ProductsAPI";
import { SlNote } from "react-icons/sl";


export default function EditProduct(props) {
    const product = props.product;
    const [image, setImage] = useState({ preview: '', data: '' })
    const capacities = [64, 128, 256, 512, 1024, 2048]
    const types = [{ id: 1, name: "phone" }, { id: 2, name: "computer" }]
    const [name, setName] = useState(product.name)
    const [type, setType] = useState(product.typeId)
    const [capacity, setCapacity] = useState(product.capacity)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('file', image.data)
        formData.append('name', name)
        formData.append('type', type)
        formData.append('capacity', capacity)
        formData.append('description', description)
        formData.append('price', price)
        createProduct(formData).then(res => {
            if (res.message){
                toast.error("Erreur: " + res.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000
                  });
            }
            else{
                toast.success(name + "a été crée!", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000
                  });
                  props.updateAdd(res)
                  setOpen(false)
                  console.log(res)
            }
        })
    }

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(img)
    }
    return (
        <>
            <ToastContainer />
            <SlNote className="icon-modify-product" onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "70%", backgroundColor: "black", color: "white", borderRadius: "10px", marginTop: "auto" }}>
                    <hr></hr>
                    <h1 style={{ textAlign: "center" }}> Modifier {product.name} </h1>
                    <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="pname">Nom du produit</label>
                            <input defaultValue={product.name} type="text" id="pname" name="product-name" placeholder="Iphone 11, ..." onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="price">Prix (euros)</label>
                            <input defaultValue={product.price} type="text" pattern="[0-9]*" id="price" name="product-price" placeholder="349" onChange={(e) => setPrice(e.target.value)} />
                            <label htmlFor="type">Type de produit</label>
                            <select defaultValue={product.typeId} id="type" name="type" onChange={(e) => setType(e.target.value)}>
                                {types.map(type => {
                                    return (
                                        <option key={type.id} value={type.id}>{type.name}</option>
                                    )
                                })}
                            </select>
                            <label htmlFor="capacity">Capacité</label>
                            <select defaultValue={product.capacity} id="capacity" name="capacity" onChange={(e) => setCapacity(e.target.value)}>
                                {capacities.map(capacity => {
                                    return (
                                        <option key={capacity} value={capacity}>{capacity}</option>
                                    )
                                })}
                            </select>
                            <label htmlFor="description">Description</label>
                            <input defaultValue={product.description} type="text" id="description" name="description" onChange={(e) => setDescription(e.target.value)} placeholder="Samsung Galaxy S21 en état parfait, sans aucune rayure, ..." />
                            <label htmlFor="file">Photos</label>
                            <input type='file' name='file' onChange={handleFileChange}></input>
                            <div style={{ width: "100%", textAlign: "center" }} >
                                <input style={{ margin: "8px 0", borderRadius: "4px", width: "60%", backgroundColor: "white", height: "30px" }} type='submit' value="Modifier le produit" />
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}