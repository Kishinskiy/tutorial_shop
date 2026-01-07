export default function NavLinkMenu({to, children}) {
    return (
        <NavLinkMenu className="text-2xl font-semibold text-blue-600 hover:text-red-400;" to={to}>{children}</NavLinkMenu>
    )
}