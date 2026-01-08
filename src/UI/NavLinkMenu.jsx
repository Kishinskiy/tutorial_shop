import {NavLink} from "react-router-dom";

export default function NavLinkMenu({ to, children }) {
    return (
        <NavLink className={({isActive}) => isActive ? "text-2xl font-semibold text-red-400 hover:text-red-500" : "text-2xl font-semibold text-blue-600 hover:text-red-500"} to={to}>{children}</NavLink>
    )
}

