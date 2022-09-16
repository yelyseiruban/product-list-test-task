import React from "react";

export default function BookForm(props){
    return(
        <div id='Book' className='product-description'>
            <p>Please provide book's weight in KG</p>
            <div className="input-line">
                <label htmlFor="weight"> Weight (KG) </label>
                <input
                    type="text"
                    name="weight"
                    id="weight"
                    className='input'
                    value={props.formData.weight}
                    onChange={props.handleCooperation}
                />
            </div>
            <p>Product description</p>
        </div>
    )
}