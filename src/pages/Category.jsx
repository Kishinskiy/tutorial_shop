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
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-2 text-gray-800 capitalize">{categoryId}</h1>
                <p className="text-center text-gray-600 mb-8">{currentCategoryArray.length} {currentCategoryArray.length === 1 ? 'product' : 'products'} available</p>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-md mx-auto">
                    <label className="block text-lg font-semibold text-gray-700 mb-3" htmlFor="maxPrice">
                        Filter by Maximum Price
                    </label>
                    <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        type="number"
                        id="maxPrice"
                        placeholder="Enter max price"
                        onChange={handleChange}
                        value={searchParams.get("maxPrice") || ""}
                    />
                </div>

                {currentCategoryArray.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-500">No products found matching your criteria.</p>
                    </div>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {currentCategoryArray.map((product) => (
                            <li key={product.name} className="transform transition-transform hover:scale-105">
                                <Link className="relative flex flex-col items-center justify-center group overflow-hidden rounded-lg shadow-lg" to={`/product/${product.id}`}>
                                    <div className="relative w-full h-64 overflow-hidden">
                                        <img 
                                            src={product.img} 
                                            alt={product.name} 
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-700/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                                        <span className="block font-bold text-white text-lg mb-1 group-hover:text-blue-300 transition-colors">
                                            {product.name}
                                        </span>
                                        <span className="block font-semibold text-blue-300 text-xl">
                                            ${product.price}
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
