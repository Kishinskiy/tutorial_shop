import {categories} from '../data/data.js';
import {Link, useSearchParams} from "react-router-dom";
import {useState} from "react";
export default function Home(){
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name")|| "";

    const handleChange =(e) => {
        setSearchParams({name: e.target.value});
    }
    return (
        <div className="py-10">
            <h1>Home Page</h1>
            <p>Current value of the "name" parameter: <b>{name}</b></p>
            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Search by name..."
                style={{marginRight: "10px"}}
            />


            <h1 className="text-2xl font-semibold text-center mb-8">Categories</h1>
            <ul className="grid grid-cols-3 gap-4 px-5">
                {categories.map((category) => (
                    <li key={category.id} >
                        <Link className="relative flex flex-col items-center justify-center" to={`/category/${category.id}`}>
                            <span className="z-10 absolute font-semibold text-white text-xl">{category.name}</span>
                        <img className="rounded-md" src={category.img} alt={category.name}/>
                            <div className="absolute bg-linear-to-t from-gray-900 via-gray-700 via-30% to-gray-300 inset-0 rounded-md opacity-40"></div>
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}