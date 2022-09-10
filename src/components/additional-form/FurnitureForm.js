import React from "react";

export default function FurnitureForm(props){
    return(
        <div id='Furniture' className='product-description'>
            <div className="input-line">
                <label htmlFor="height"> Height (CM) </label>
                <input
                    type="text"
                    name="height"
                    id="height"
                    className='input'
                    value={props.formData.height}
                    onChange={props.handleCooperation}
                />
            </div>

            <div className="input-line">
                <label htmlFor="width"> Width (CM) </label>
                <input
                    type="text"
                    name="width"
                    id="width"
                    className='input'
                    value={props.formData.width}
                    onChange={props.handleCooperation}
                />
            </div>

            <div className="input-line">
                <label htmlFor="length"> Length (CM) </label>
                <input
                    type="text"
                    name="length"
                    id="length"
                    className='input'
                    value={props.formData.length}
                    onChange={props.handleCooperation}
                />
            </div>

            <p>Product description</p>
        </div>
    )
}