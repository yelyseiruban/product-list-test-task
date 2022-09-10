import React from "react";

export default function DvdForm(props){
    return(
        <div id='DVD' className='product-description'>
            <div className="input-line">
                <label htmlFor="size"> Size (MB) </label>
                <input
                    type="text"
                    name="size"
                    id="size"
                    className='input'
                    value={props.formData.size}
                    onChange={props.handleCooperation}
                />
            </div>
            <p>Product description</p>
        </div>
    )
}