import {NavLink} from "react-router-dom";

export default function NavLinkMenu({ to, children }) {
    return (
        <NavLink 
            className={({isActive}) => 
                isActive 
                    ? "relative px-4 py-2 text-base font-semibold text-white bg-white/20 rounded-lg backdrop-blur-sm transition-all  duration-200 shadow-md"
                    : "relative px-4 py-2 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all  duration-200"
            } 
            to={to}
        >
            {children}
        </NavLink>
    )
}

