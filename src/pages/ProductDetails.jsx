import {useParams} from "react-router-dom";
import {products} from "../data/data.js";

export default function ProductDetails() {

    const {productId} = useParams();
    const product = products.find((product) => product.id === parseInt(productId));
    console.log(product);
    return(
        <div>
            {product ? (
                <>
                <h1>Product Details</h1>
                <h2>{product.name} </h2>
                <p>Prise: {product.price}$ </p>
                <img src={product.img} alt={product.name} style={{ width: "20%" }} />
                </>) : <p>Product Not Found</p>}
        </div>
    )
}