import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pageone = () => {

    const navigate = useNavigate()

    const prevPage = () => {
        navigate('/')
    }

    const nextPage = () => {
        navigate('/pagetwo')
    }


    return (
        <div className="pageone">
            <span>Page 1</span>
            <div className="btnBox">
                <button type="button" className="btn" onClick={prevPage}>back</button>
                <button type="button" className="btn2" onClick={nextPage}>next</button>
            </div>
        </div>
    )
}

export default Pageone
