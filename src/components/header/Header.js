import React from "react";
import './Header.css'
import {useNavigate} from "react-router-dom";

function Header(props) {
    let navigate = useNavigate();

    const buttons = ()=>{
        if (props.headerTitle === "Product List"){
            return (
                <div className="col-md-3 text-end">

                    <button type="button" className="btn btn-add border btn-light shadow-sm"
                            onClick={()=> {navigate('/add-product')}}>ADD</button>
                    <button type="submit" id="delete-product-btn" className="btn btn-mass-delete delete-product-btn border btn-light shadow-sm">MASS DELETE</button>
                </div>
            );
        }
        else if (props.headerTitle === "Product Add") {
            return (
                <div className="col-md-3 text-end">
                    <button type="submit" className="btn btn-add border btn-light shadow-sm">Save</button>
                    <button type="button" className="btn border btn-light shadow-sm" onClick={()=> navigate('/')}>Cancel</button>
                </div>
            );
        }
    }

    return(
        <div>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 header">
                <h3 className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    {props.headerTitle}
                </h3>

                {buttons()}
            </header>
        </div>
    );
}

export default Header;