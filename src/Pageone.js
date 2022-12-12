import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pageone = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }


    return (
        <div className="pageone">
            Page 1
            <button type="button" className="btn" onClick={goBack}>back</button>
        </div>
    )
}

export default Pageone
