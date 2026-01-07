import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Thanks(){
    const navigate = useNavigate();
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            navigate('/')
        }, 5000);
        return () => {clearTimeout(timeout);};
    }, [navigate])
    return(
        <div>Thank you!</div>
    )
}