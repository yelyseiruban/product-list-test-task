import React from "react";
import Header from "../components/header/Header";
import Footer from "../footer/Footer";
import './ProductList.css';
import ProductCard from "../components/product-card/ProductCard";
import $ from "jquery";

function ProductList(){

    const [products, setProducts] = React.useState([]);
    const [checkedProducts, setCheckedProducts] = React.useState([]);
    const [result, setResult] = React.useState('');
    const [refresh, setRefresh] = React.useState(false);


    console.log(products)
    React.useEffect(()=>{
        const getProduct = async () => {
            const res = await fetch('http://localhost:8000/getData.php');
            const getData = await res.json();
            setProducts(getData);
        }
        getProduct();
    }, [refresh])

    const cards = products.map(product => {
        return (<ProductCard key={product.id} data={product} handleChange={() => handleChange(event, product)}/>)
    })

    function handleChange(event, product){
        setCheckedProducts((checkedProducts) => {
            let newCheckProducts = [...checkedProducts];
            const i = newCheckProducts.findIndex(e => e.id === product.id);
            i > -1
                ? newCheckProducts.splice(i, 1)
                : newCheckProducts.push({id: product.id, type: product.type});
            return newCheckProducts;
        })
    }

    function handleSubmitDelete(event) {
        event.preventDefault();
        const form = $(event.target);
        $.ajax({
            type: 'POST',
            url: form.attr("action"),
            data: {checked: JSON.stringify(checkedProducts)},
            dataType: 'json',
            success(data){
                setResult(data)
            }
        });
        setRefresh(prevState => !prevState);
    }

    return (
        <div>
            <form
                action="http://localhost:8000/remove.php"
                method="post"
                onSubmit={() => handleSubmitDelete(event)}
            >
                <Header headerTitle="Product List"/>
                <div className="content">
                    {cards}
                </div>
                <Footer />
            </form>
        </div>
    );
}

export default ProductList;