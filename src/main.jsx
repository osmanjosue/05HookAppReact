import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { MainApp } from './09-useContext/MainApp';
// import { TodoApp } from './08-useReducer/TodoApp'
// import './08-useReducer/intro-reducer';
// import { Padre } from './07-tareamemo/07-tarea-memo/Padre'
// import { CallbackHook } from './06-memo/CallbackHook'
// import { MemoHook } from './06-memo/MemoHook'
// import { Memorize } from './06-memo/Memorize'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'

// import { HooksApp } from './hooks.App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
