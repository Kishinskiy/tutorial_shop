import {categories} from '../data/data.js';
import {Link} from "react-router-dom";

export default function Home(){
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">Shop Categories</h1>
                    <p className="text-xl text-gray-600">Browse our wide selection of products</p>
                </div>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <li key={category.id} className="transform transition-transform hover:scale-105">
                            <Link 
                                className="relative flex flex-col items-center justify-center group overflow-hidden rounded-lg shadow-lg h-64" 
                                to={`/category/${category.id}`}
                            >
                                <div className="relative w-full h-full overflow-hidden">
                                    <img 
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                                        src={category.img} 
                                        alt={category.name}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-700/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                    <span className="block font-bold text-white text-2xl group-hover:text-blue-300 transition-colors capitalize">
                                        {category.name}
                                    </span>
                                    <span className="block text-blue-300 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Explore products →
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
