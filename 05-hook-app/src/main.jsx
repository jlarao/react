import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HooksApp} from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memo/Memorize'
import { MemoHook } from './06-memo/MemoHook'
import { CallbackHook } from './06-memo/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-UseReducer/TodoApp'
// import  './08-UseReducer/intro-reducer';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    <TodoApp />
  </StrictMode>
)
