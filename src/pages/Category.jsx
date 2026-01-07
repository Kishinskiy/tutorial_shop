import {products} from "../data/data.js";
import {Link, useParams, useSearchParams} from "react-router-dom";

export default function Category() {
    const [searchParams, setSearchParams] = useSearchParams();
    const {categoryId} = useParams();
    const maxPrice = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : Infinity;
    const currentCategoryArray = products.filter((product) => product.categoryId === categoryId && product.price <= maxPrice);

    function handleChange(e){
        const value = e.target.value;
        setSearchParams(value ? {maxPrice: value} : {});
    }
    return(
        <div>
            <h1>Category {categoryId}</h1>
            <label htmlFor="maxPrice">Max Price: </label>
            <input
                type="number"
                id="maxPrice"
                placeholder="Enter max price"
                onChange={handleChange}
                value={searchParams.get("maxPrice") || ""}
            />
            <ul style={{display: "flex", justifyContent: "space-between"}} >
                {currentCategoryArray.map((product) => (
                    <li key={product.name}>
                        <Link to={`/product/${product.id}`}>
                            {product.name}<br/>
                            <img src={product.img} alt={product.name} style={{ width: "50%" }} /><br/>
                            {product.price}$
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}