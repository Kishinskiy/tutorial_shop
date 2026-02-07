export default function Button({variant, handleClick, children}){
    return (
        <button className={variant} onClick={handleClick}>{children}</button>
    )
}