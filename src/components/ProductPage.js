import { Products } from './products';
import Filter from './filter';
import React, { useEffect, useState } from "react"
import Header from './common/Header';
import { useParams } from 'react-router-dom';
import { getProducts } from '../API/ProductsAPI';
import Loader from './common/loader';

function singleFilter(products, productType, label) {
    if (productType.length === 0) {
        return products
    }
    else {
        if (productType[0] == null) {
            return products
        }
        return products.filter(product => productType.includes(product[label]))
    }
}

function filterProducts(products, type, capacity, searchQuery) {
    return searchFilter(singleFilter(singleFilter(products, capacity, "capacity"), type, "typeId"), searchQuery)
}

function searchFilter(products, searchQuery) {
    if (searchQuery === "") {
        return products
    }
    else {
        return products.filter(product => product.name.includes(searchQuery))
    }
}


export default function ProductPage() {
    let { productType } = useParams()
    productType = parseInt(productType) || null
    const [type, setType] = useState([productType]);
    const [capacity, setCapacity] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")
    const [products, setProducts] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        !isMounted &&
            setTimeout(function () {
                getProducts().then((json) => {
                    setProducts(json.data);
                    setIsMounted(true);
                });
            }, 1000);
    }, [isMounted]);


    return (
        <div className='App-container'>
            <Header />
            <div className='product-container'>
                {isMounted ? <Filter
                    capacity={capacity} setCapacity={setCapacity}
                    products={products} searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                /> : null}
                <div className='App'>
                    {isMounted ? null : <Loader />}
                    {filterProducts(products, type, capacity, searchQuery).map(product => (
                        <Products
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            capacity={product.capacity}
                            timeLeft={product.timeLeft}
                            rating={product.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}