import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//
import Signin from "./containers/app/auth/Signin"
import Signup from "./containers/app/auth/Signup"
import ForgotPassword from './containers/app/auth/ForgotPassword';

import User from "./containers/app/user"
import Account from "./containers/app/user/account"
import Profile from './containers/app/user/profile';
import Deposit from './containers/app/user/deposit';
import Withdrawal from './containers/app/user/withdrawal';
import ConfirmDeposit from './containers/app/user/deposit/ConfirmDeposit';

import About from "./containers/app/about";
import Home from "./containers/app/home"
import CustomerCare from "./containers/app/customercare"
import Plans from './containers/app/plans';
import Confirm from './containers/app/plans/Confirm';
import Services from './containers/app/services';
import PageNotFound from "./containers/app/error"
import New from './containers/app/new';

import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

//protected routes
import UserRoutes from './routes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes';
import Invest from './containers/app/plans/Invest';
import { AxiosInterceptor } from './containers/services/provider';

//admin
import AllOrders from './containers/app/admin/orders'
import EditOrder from './containers/app/admin/orders/Edit';
import AllUsers from './containers/app/admin/users';
import EditUser from './containers/app/admin/users/Edit';
import AllWithdrawals from './containers/app/admin/withdrawal';
import EditWithdrawal from './containers/app/admin/withdrawal/Edit';
import AllPackages from './containers/app/admin/packages';
import NewPackage from './containers/app/admin/packages/New';
import EditPackage from './containers/app/admin/packages/Edit';

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
          <Route path='/plans' element={<Plans />} />
          <Route path='/services' element={<Services />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />

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
          <Route element={<AdminRoutes />}>
            <Route path='/admin/all-orders' element={<AllOrders />} />
            <Route path='/admin/order/:id' element={<EditOrder />} />
            <Route path='/admin/all-users' element={<AllUsers />} />
            <Route path='/admin/user/:id' element={<EditUser />} />
            <Route path='/admin/all-withdrawals' element={<AllWithdrawals />} />
            <Route path='/admin/withdrawal/:id' element={<EditWithdrawal />} />
            <Route path='/admin/all-packages' element={<AllPackages />} />
            <Route path='/admin/package/new' element={<NewPackage />} />
            <Route path='/admin/package/:id' element={<EditPackage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AxiosInterceptor>
  );
}

export default App;
