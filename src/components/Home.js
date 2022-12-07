import { Products } from './products';
import contents from '../content';
import Filter from './filter';
import React, {useState} from "react"

function singleFilter(products, productType, label){
    if (productType.length === 0){
        return products
    }
    else{
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


export default function Home() {
    const [type, setType] = useState([]);
    const [capacity, setCapacity] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")

    return(
        <div className='App-container'>
        <div className='app-header'>
          <p className='gradient-text-header'> Welcome in Phone Collect </p>
          <img src="logo/phone-collect-logo.png" style={{width: "15rem", position: "absolute", top: "0%", left: "0%", }}/>
        </div>
            <div className='product-container'>
                <Filter
                    setType={setType} type={type}
                    capacity={capacity} setCapacity={setCapacity}
                    products={contents} searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                />
                <div className='App'>
                {filterProducts(contents, type, capacity, searchQuery).map(contents => (
                    <Products 
                        key={contents.id}
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