import React from 'react'
import { useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Pagetwo = () => {
    const navigate = useNavigate()
    const myParam = useParams()
    const id = myParam.id
    console.log(myParam.id)

     const prevPage = () => {
        navigate(`/pageone/${id - 1}`)
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
