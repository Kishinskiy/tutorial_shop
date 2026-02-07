import {Link} from "react-router-dom";
import NavLinkMenu from "../UI/NavLinkMenu.jsx";
import logo from "../assets/images/logo.svg";
import Button from "../components/Button.jsx";
import {useState} from "react";
import Modal from "./Modal.jsx";

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleLoginClick = () => {
        console.log("login clicked");
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
        <header className="bg-linear-to-r from-blue-100 via-blue-400 to-blue-600 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center group">
                        <img 
                            className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" 
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                    <nav>
                        <ul className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
                            <li>
                                <NavLinkMenu to={"/"}>Home</NavLinkMenu>
                            </li>
                            <li>
                                <NavLinkMenu to={"/about"}>About</NavLinkMenu>
                            </li>
                            <li>
                                <NavLinkMenu to={"/cart"}>Cart</NavLinkMenu>
                            </li>
                            <li><Button variant="border px-3 py-1 border-back rounded-md text-white font-bold" handleClick={handleLoginClick}>LogIn</Button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    {isModalOpen && (
        <Modal
            closeModal={closeModal}
            title="Login"
            content="Please enter your credentials"
        >
            <Button variant="border border-black px-3 py-2 rounded-md" handleClick={closeModal}>Close</Button>
        </Modal>
    )}
    </>

    )
}
