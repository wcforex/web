import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//
import Signin from "./containers/app/auth/Signin"
import Signup from "./containers/app/auth/Signup"

import Admin from "./containers/admin"
import User from "./containers/app/user"
import Account from "./containers/app/user/account"
import Profile from './containers/app/user/profile';
import Deposit from './containers/app/user/deposit';
import Withdrawal from './containers/app/user/withdrawal';
import ConfirmDeposit from './containers/app/user/deposit/ConfirmDeposit';

import About from "./containers/app/about";
import Home from "./containers/app/home"
import CustomerCare from "./containers/app/customercare"
import Packages from "./containers/app/packages"
import Plans from './containers/app/plans';
import Confirm from './containers/app/plans/Confirm';
import Services from './containers/app/services';
import PageNotFound from "./containers/app/error"
import New from './containers/app/new';

import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

//protected routes
import UserRoutes from './routes/UserRoutes';
import Invest from './containers/app/plans/Invest';
import { AxiosInterceptor } from './containers/services/provider';

function App() {
  return (
    <AxiosInterceptor className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/about' element={<About />} />
          <Route path='/customer-care' element={<CustomerCare />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/services' element={<Services />} />
          <Route path='*' element={<PageNotFound />} />

          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />

          <Route element={<UserRoutes />}>
            <Route path='/account' element={<Account />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/deposit/:token' element={<ConfirmDeposit />} />
            <Route path='/withdrawal' element={<Withdrawal />} />
            <Route path='/invest/:id' element={<Invest />} />
            <Route path='/confirm/:id' element={<Confirm />} />

            <Route path='/user' element={<User />}>
              <Route path='account' element={<Account />} />
              <Route path='profile' element={<Profile />} />
              <Route path='deposit' element={<Deposit />} />
              <Route path='withdrawal' element={<Withdrawal />} />
            </Route>
          </Route>
          {/* <Route element={<AdminRoutes />}> */}
          <Route path='/admin' element={<Admin />}></Route>
          {/* </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </AxiosInterceptor>
  );
}

export default App;
