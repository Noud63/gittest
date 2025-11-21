import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pagethree = () => {

    const navigate = useNavigate()

     const prevPage = () => {
        navigate('/pagetwo')
    }

    const nextPage = () => {
        navigate('/pagefour')
    }

  return (
    <div className="pageone">
      <span>Page 3</span>
       <div className="btnBox">
 <button type="button" className="btn" onClick={prevPage}>back</button>
            <button type="button" className="btn" onClick={nextPage}>next</button>
       </div>
           
    </div>
  )
}

export default Pagethree
