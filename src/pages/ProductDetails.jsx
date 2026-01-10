import {useParams, Link} from "react-router-dom";
import {products} from "../data/data.js";

export default function ProductDetails() {

    const {productId} = useParams();
    const product = products.find((product) => product.id === parseInt(productId));

    const getProductDescription = (product) => {
        const descriptions = {
            "Laptop": "Powerful and versatile laptop perfect for work, gaming, and creative projects. Features high-performance processor, stunning display, and long-lasting battery life. Ideal for professionals and students alike.",
            "Smartphone": "Latest generation smartphone with cutting-edge technology. Crystal-clear display, advanced camera system, and lightning-fast performance. Stay connected and productive wherever you go.",
            "Headphones": "Premium wireless headphones with exceptional sound quality and noise cancellation. Comfortable design for extended listening sessions. Perfect for music lovers and professionals.",
            "Monitor": "High-resolution monitor with vibrant colors and crisp details. Excellent for work, gaming, and content creation. Features adjustable stand and multiple connectivity options.",
            "T-Shirt": "Comfortable and stylish cotton t-shirt. Soft fabric, perfect fit, and durable construction. Available in multiple colors. Great for everyday wear or casual occasions.",
            "Jeans": "Classic denim jeans with modern fit and style. Made from high-quality denim that gets better with age. Comfortable, durable, and timeless fashion staple.",
            "Jacket": "Stylish and functional jacket perfect for all seasons. Quality materials, excellent craftsmanship, and versatile design. Keep warm and look great.",
            "Sneakers": "Comfortable athletic sneakers with superior cushioning and support. Perfect for running, walking, or everyday wear. Breathable materials and stylish design.",
            "Novel": "Engaging fiction novel that will transport you to another world. Well-written story with compelling characters and plot twists. Perfect for book lovers and reading enthusiasts.",
            "Textbook": "Comprehensive educational textbook covering essential topics. Clear explanations, helpful examples, and practice exercises. Essential resource for students and educators.",
            "Magazine": "Latest issue featuring interesting articles, interviews, and stunning photography. Stay informed and entertained with quality journalism and beautiful design.",
            "Comic Book": "Exciting comic book with amazing artwork and thrilling storyline. Collectible edition perfect for fans and collectors. Immerse yourself in the world of heroes and adventures.",
            "Desk Chair": "Ergonomic office chair designed for comfort and productivity. Adjustable height, lumbar support, and premium materials. Perfect for long work sessions.",
            "Table": "Beautiful and functional table suitable for dining, work, or display. Sturdy construction and elegant design. Adds style and utility to any room.",
            "Bookshelf": "Spacious bookshelf with multiple shelves for organizing your collection. Solid construction and attractive design. Perfect for storing books, decorations, and more.",
            "Lamp": "Modern desk lamp with adjustable brightness and flexible design. Energy-efficient LED lighting with warm, comfortable glow. Perfect for reading and work.",
            "Bicycle": "High-quality bicycle built for performance and durability. Lightweight frame, smooth gears, and reliable brakes. Perfect for commuting, exercise, or leisurely rides.",
            "Scooter": "Fun and practical electric scooter for urban commuting. Compact design, long battery life, and easy to use. Eco-friendly transportation solution.",
            "Roller Skates": "Smooth-rolling roller skates perfect for recreation and fitness. Comfortable fit, quality wheels, and reliable brakes. Great for skating rinks and outdoor paths.",
            "Skateboard": "Professional-grade skateboard with premium deck and trucks. Smooth ride and excellent control. Perfect for tricks, commuting, or just having fun."
        };
        return descriptions[product.name] || "High-quality product with excellent features and great value. Perfect addition to your collection.";
    };

    return(
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            {product ? (
                <div className="max-w-6xl mx-auto">
                    <Link 
                        to={`/category/${product.categoryId}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to {product.categoryId}
                    </Link>

                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2 bg-gray-100 p-8 flex items-center justify-center">
                                <img 
                                    src={product.img} 
                                    alt={product.name} 
                                    className="max-w-full h-auto max-h-96 object-contain"
                                />
                            </div>
                            
                            <div className="md:w-1/2 p-8">
                                <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                                
                                <div className="mb-6">
                                    <span className="text-3xl font-bold text-blue-600">${product.price}</span>
                                    <span className="ml-2 text-sm text-gray-500">USD</span>
                                </div>

                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold capitalize">
                                        {product.categoryId}
                                    </span>
                                </div>

                                <div className="border-t border-gray-200 pt-6 mb-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Description</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {getProductDescription(product)}
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="max-w-2xl mx-auto text-center py-16">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
                    <p className="text-gray-600 mb-8">Sorry, we couldn't find the product you're looking for.</p>
                    <Link 
                        to="/"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                        Go to Homepage
                    </Link>
                </div>
            )}
        </div>
    )
}