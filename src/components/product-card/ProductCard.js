import React from "react";
import './ProductCard.css'

export default function ProductCard(props){
    const description = ()=>{
        switch (props.data.type){
            case 'dvd':
                return (<p className="product-specific-attribute">Size: {props.data.size} MB</p>)
            case 'book':
                return (<p className="product-specific-attribute">Weight: {props.data.weight}KG</p>)
            case 'furniture':
                return (<p className="product-specific-attribute">Dimension: {props.data.height}x{props.data.width}x{props.data.length}</p> )
        }
    }
    return (
        <div className="one-product">
            <input
                type="checkbox"
                className='delete-checkbox'
                onChange={props.handleChange}
            />
            <div className='description'>
                <p className="sku">{props.data.sku}</p>
                <p className="name">{props.data.product_name}</p>
                <p className="price">{parseFloat(props.data.price).toFixed(2)} $</p>
                {description()}
            </div>
        </div>
    )
}