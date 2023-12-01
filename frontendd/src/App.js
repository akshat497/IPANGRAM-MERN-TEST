
import React from 'react'
import LoginPage from './pages/loginPage'
import store from './redux/store/store'
import { Provider } from "react-redux"
import { ToastContainer } from 'react-toastify';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import Signup from './components/main/Signup';
import Homepage from './admin/pages/Homepage';
import ContextState from './context/ContextState';
export default function App() {
  return (
   <>
   <Provider store={store}>
   <ContextState>
   <BrowserRouter>
   
   <Routes>
   <Route path="/" element={<LoginPage/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/homepage/*" element={<Homepage/>}/>
   {/* <Route path="/dash-board" element={<DashBoard/>}/> */}
   </Routes>
   </BrowserRouter>
   <ToastContainer/>
   </ContextState>
   </Provider>
  
   </>
  )
}
