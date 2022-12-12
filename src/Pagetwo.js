import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useLocation } from "react-router-dom";

const Pagetwo = () => {
    const navigate = useNavigate()
    // const myParam = useLocation().search;
    // console.log(myParam.split('')[1])

    const goBack = () => {
        navigate('/pageone')
    }


    return (
        <div className="pageone">
            <span>Page 2</span>
            <button type="button" className="btn" onClick={goBack}>back</button>
        </div>
    )
}


export default Pagetwo
