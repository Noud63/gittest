import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pagethree = () => {

    const navigate = useNavigate()

     const prevPage = () => {
        navigate('/pagetwo')
    }

  return (
    <div className="pageone">
      <span>Page 3</span>
            <button type="button" className="btn" onClick={prevPage}>back</button>
    </div>
  )
}

export default Pagethree
