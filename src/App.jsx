import React from 'react'
import Todo from './components/Todo'
import { Provider } from 'react-redux'
import Store from './app/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
       <Provider store={Store}>
        <Todo/>
        <ToastContainer/>
       </Provider>
    </div>
  )
}

export default App
