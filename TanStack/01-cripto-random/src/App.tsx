import './App.css';
import { useRandom } from './hooks/useRandom';
// import { RandomNumber } from './components/RandomNumber';


function App() {

  const {randomQuery} = useRandom();

  return (
    <>
      {randomQuery.isFetching ? <h1>Loading</h1> : 
      <h1>Numero aleatorio : {randomQuery.data} </h1>
      }

      {/* <RandomNumber /> */}
      <div>{  JSON.stringify(randomQuery.error) }</div>
      
      <button 
        disabled={randomQuery.isFetching}
        onClick={() => randomQuery.refetch()}>Refresh
      </button>  
    </>
  )
}

export default App
