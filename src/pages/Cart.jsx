import {Link, useNavigate} from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate();
    return(
        <div>
            <h1>Cart Page</h1>
                <button className="btn btn-primary" onClick={()=>navigate("/thanks")}>ORDER</button>
        </div>
    )
}