import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useLocation } from "react-router-dom";

const Pagetwo = () => {
    const navigate = useNavigate()
    const myParam = useLocation().search;
    console.log(myParam.split('')[1])

     const prevPage = () => {
        navigate('/')
    }

    const nextPage = () => {
        navigate('/pagethree')
    }
  return (
        <div className="pageone">
            <span>Page 2</span>
           <div className="btnBox">
                <button type="button" className="btn" onClick={prevPage}>back</button>
                <button type="button" className="btn2" onClick={nextPage}>next</button>
            </div>
        </div>
    )
}


export default Pagetwo
