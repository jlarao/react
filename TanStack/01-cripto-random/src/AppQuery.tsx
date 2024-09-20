import './App.css'
import { useQuery } from '@tanstack/react-query';
// import { RandomNumber } from './components/RandomNumber';

const getCryptoNumber  = async():Promise<number> =>{
  throw "No se pudo obtener el numero";
  const resp = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json());

  return Number(resp);

}
;
function AppQuery() {

  const {
    isLoading, 
    isFetching,
    data:number, 
    error,
    refetch } = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getCryptoNumber,
    // refetchOnWindowFocus: false,
    // retry: false,
  });

  return (
    <>
      {isFetching ? <h1>Loading</h1> : 
      <h1>Numero aleatorio : {number} </h1>
      }

      {/* <RandomNumber /> */}
      <div>{  JSON.stringify(error) }</div>
      
      <button 
        disabled={isFetching}
        onClick={() => refetch()}>Refresh
      </button>  
    </>
  )
}

export default AppQuery
