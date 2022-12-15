import { Products } from './products';
import contents from '../content';
import Filter from './filter';
import React, {useState} from "react"
import Header from './common/Header';
import { useParams } from 'react-router-dom';

function singleFilter(products, productType, label){
    if (productType.length === 0){
        return products
    }
    else{
        if (productType[0] == null){
            return products
        }
        return products.filter(product => productType.includes(product[label]))
    }
}

function filterProducts(products, productType, capacity, searchQuery){
    return searchFilter(singleFilter(singleFilter(products, capacity, "capacity"), productType, "productType"), searchQuery)
}

function searchFilter(products, searchQuery){
    if (searchQuery === ""){
        return products
    }
    else{
        return products.filter(product => product.name.includes(searchQuery))
    }
}


export default function ProductPage() {
    let { productType } = useParams()
    productType = productType || null
    console.log(productType)
    const [type, setType] = useState([productType]);
    const [capacity, setCapacity] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")


    return(
        <div className='App-container'>
        <Header />
            <div className='product-container'>
                <Filter
                    capacity={capacity} setCapacity={setCapacity}
                    products={contents} searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                />
                <div className='App'>
                {filterProducts(contents, type, capacity, searchQuery).map(contents => (
                    <Products 
                        key={contents.id}
                        id={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        capacity={contents.capacity}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}