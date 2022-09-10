import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductAdd from "./pages/ProductAdd";

function App (){

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ProductList/>}/>
                <Route exact path="/add-product" element={<ProductAdd/>}/>
            </Routes>
        </Router>
    );
}

export default App;