import React from 'react'
import Navbar from './adcomponents/Navbar/Navbar'
import Sidebar from './adcomponents/Sidebar/Sidebar'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Order from './pages/Order/Order'
import List from './pages/List/List'
import Add from './pages/Add/Add'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer />
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/order" element={<Order url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App