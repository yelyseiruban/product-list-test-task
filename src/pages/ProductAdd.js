import React from "react";
import './ProductAdd.css'
import Header from "../components/header/Header";
import DvdForm from "../components/additional-form/DvdForm";
import FurnitureForm from "../components/additional-form/FurnitureForm";
import BookForm from "../components/additional-form/BookForm";
import $ from "jquery";

export default function ProductAdd(){
    /*Main form*/
    const [mainFormData, setMainFormData] = React.useState({
        sku: "",
        name: "",
        price: "",
        typeSwitch: "DVD",
        size: "",
        height: "",
        width: "",
        length: "",
        weight: ""
    })

    const [result, setResult] = React.useState('')


    function handleChange(event){
        const {name, value} = event.target

        setMainFormData(prevState => ({
            ...prevState,
            [name]: value
        }))

        console.log(mainFormData)
    }

    let productDescription;
        if (mainFormData.typeSwitch==='DVD'){
            productDescription = <DvdForm handleCooperation={handleChange} formData={mainFormData}/>
        }
        else if (mainFormData.typeSwitch==='Furniture'){
           productDescription = <FurnitureForm handleCooperation={handleChange} formData={mainFormData}/>
        }
        else if (mainFormData.typeSwitch==='Book'){
            productDescription = <BookForm handleCooperation={handleChange} formData={mainFormData}/>
        }


    function handleSubmit(event) {
        event.preventDefault();
        const form = $(event.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data){
                setResult(data)
            }
        })
    }
    console.log(result);
    return(
            <form
                action="http://localhost:8000/server.php"
                id='product_form'
                method="post"
                onSubmit={(event) => handleSubmit(event)}
            >
                <Header headerTitle="Product Add"/>
                <div className="form-add col-md-6">
                        <div className='input-line'>
                            <label htmlFor="sku">SKU</label>
                            <input
                                type="text"
                                id="sku"
                                className="input"
                                name="sku"
                                value={mainFormData.sku}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='input-line'>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="input"
                                name="name"
                                value={mainFormData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='input-line'>
                            <label htmlFor="price">Price ($)</label>
                            <input
                                type="text"
                                id="price"
                                className="input"
                                name="price"
                                value={mainFormData.price}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='input-line'>
                            <label htmlFor="productType">Type Switcher</label>
                            <select name="typeSwitch" id="productType" className="switch" onChange={handleChange} value={mainFormData.typeSwitch}>
                                <option value="DVD">DVD</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Book">Book</option>
                            </select>
                        </div>
                        {productDescription}
                    {result}
                </div>
            </form>

    );
}
