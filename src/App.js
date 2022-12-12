import { useNavigate } from 'react-router-dom'


function App() {

   const navigate = useNavigate()

  const nextPage = () => {
     navigate('/pageone')
  }

  return (
    <div className="gittest">
      <span>Hello world</span>
      <button type="button" className="btn" onClick={nextPage}>next page</button>
    </div>
  );
}

export default App;
