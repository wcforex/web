import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

//
import Signin from "./containers/app/auth/Signin"
import Signup from "./containers/app/auth/Signup"

import Admin from "./containers/admin"
import User from "./containers/app/user"

import About from "./containers/app/about";
import Home from "./containers/app/home"
import CustomerCare from "./containers/app/customercare"
import Packages from "./containers/app/packages"
import PageNotFound from "./containers/app/error"

import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/customer-care' element={<CustomerCare/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='*' element={<PageNotFound/>}/>

        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route path='/user' element={<User/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
