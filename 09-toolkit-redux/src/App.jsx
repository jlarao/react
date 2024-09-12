import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/slices/counter';

function App() {

  const {counter} = useSelector(state => state.counter);
  const dispatch  = useDispatch();

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card"> 
        <h2>{counter}</h2>
        <button onClick={ () => { dispatch(increment())} }>
          increment
        </button>

        <button onClick={ () => { dispatch(decrement())}}>
            Decrement
        </button>

        <button onClick={ () => { dispatch(incrementByAmount(2))}}>
            Increment by 2
        </button>
        
      </div>
      
    </>
  )
}

export default App
