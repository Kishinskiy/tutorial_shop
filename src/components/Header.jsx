import {NavLink} from "react-router-dom";
import NavLinkMenu from "../UI/NavLinkMenu.jsx";

export default function Header() {
    return (
        <header className="bg-blue-200 py-8 px-5 flex justify-between font-bold shadow-md">
            <img className="h-8" src="/logo.svg" alt="logo"/>
            <nav>
                <ul className="flex space-x-8 gap-8">
                    <li className="mb-4"><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to={"/about"}> About</NavLink></li>
                    <li><NavLink to={"/cart"}> Cart</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}