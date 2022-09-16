import React from "react";
import './ProductAdd.css'
import Header from "../components/header/Header";
import Footer from "../footer/Footer";
import DvdForm from "../components/additional-form/DvdForm";
import FurnitureForm from "../components/additional-form/FurnitureForm";
import BookForm from "../components/additional-form/BookForm";
import {validateDefaultForm, validateDVDForm, validateBookForm, validateFurnitureForm} from "../validation";
import $ from "jquery";
import {useNavigate} from "react-router-dom";

import {nanoid} from "nanoid";

export default function ProductAdd(){
    let navigate = useNavigate();
    /*Errors*/
    const [messageErrors, setMessageErrors] = React.useState([]);
    /*Main form*/
    const [mainFormData, setMainFormData] = React.useState({
        sku: "",
        name: "",
        price: "",
        type: "dvd",
        size: "",
        height: "",
        width: "",
        length: "",
        weight: ""
    })

    const [result, setResult] = React.useState('')

    let productDescription;
        if (mainFormData.type === 'dvd'){
            productDescription = <DvdForm handleCooperation={handleChange} formData={mainFormData}/>
        }
        else if (mainFormData.type === 'furniture'){
           productDescription = <FurnitureForm handleCooperation={handleChange} formData={mainFormData}/>
        }
        else if (mainFormData.type === 'book'){
            productDescription = <BookForm handleCooperation={handleChange} formData={mainFormData}/>
        }

    function handleChange(event){
        const {name, value} = event.target

        setMainFormData(prevState => ({
            ...prevState,
            [name]: value
        }))

    }

    function handleSubmit(event) {
        event.preventDefault();
        const form = $(event.target);

        let errors = [];
        errors = validateDefaultForm(mainFormData.sku, mainFormData.name, mainFormData.price, errors);
        switch (mainFormData.type){
            case 'dvd':
                errors = validateDVDForm(mainFormData.size, errors);
                break;
            case 'book':
                errors = validateBookForm(mainFormData.weight, errors);
                break;
            case 'furniture':
                errors = validateFurnitureForm(mainFormData.height, mainFormData.width, mainFormData.length, errors);
                break;
        }

        let messageErrors;
        errors = errors.filter((x) => {return x !== ""})
        if (errors.length > 0){
            messageErrors = errors.map(error => <li key={nanoid()}>{error}</li>);
            setMessageErrors(messageErrors);
            console.log(errors);
        }
        else {
            setMessageErrors(false);
            $.ajax({
                type: "POST",
                url: form.attr("action"),
                data: {form: JSON.stringify(mainFormData)},
                success(data){
                    setResult(data)
                }
            })
            navigate('/');

        }
    }

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
                            <select name="type" id="productType" className="switch" onChange={handleChange} value={mainFormData.type}>
                                <option value="dvd">DVD</option>
                                <option value="furniture">Furniture</option>
                                <option value="book">Book</option>
                            </select>
                        </div>
                        {productDescription}
                    {messageErrors.length > 0 && <ul className='errorMessages'>{messageErrors}</ul>}
                    {result && <ul className='errorMessages'><li>{result}</li></ul>}
                </div>
                <Footer />
            </form>


    );
}
