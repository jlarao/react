import { useEffect, useState } from 'react'
import './App.css'

function App() {
// https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [refreshToken, setRefreshToken] = useState(0);
  console.log('hello world');

  useEffect(() => {
    setIsLoading(true);
    fetch("https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new")
      .then(response => response.json())
      .then(data => {
        setNumber(data);
        setIsLoading(false);

      })
      .catch( error => setError(error))
      .finally(() => setIsLoading(false));


  }, [refreshToken]);



  return (
    <>
      {isLoading ? <h1>Loading</h1> : 
      <h1>Numero aleatorio : {number} </h1>
      }

      <div>...</div>
      
      <button 
        disabled={isLoading}
        onClick={() => setRefreshToken(refreshToken + 1)}>Refresh
      </button>  
    </>
  )
}

export default App
