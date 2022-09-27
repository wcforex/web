import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

export default function User() {
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const onChange = (e) => {
    setValue(e.target.value);
  }
  useEffect(() => {
    if (value === 'account') {
      navigate('/user/account');
    }
    if (value === 'profile') {
      navigate('/user/profile');
    }
    if (value === 'deposit') {
      navigate('/user/deposit');
    }
    if (value === 'withdrawal') {
      navigate('/user/withdrawal');
    }
  }, [value])

  return (
    <div className="pt-16">
      {/* Page title starts */}
      <div className="bg-gray-200 w-full">
        <div className="container px-6 py-6 sm:py-0 mx-auto">
          <div className="sm:hidden bg-white w-full relative">
            <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="8 9 12 5 16 9" />
                <polyline points="16 15 12 19 8 15" />
              </svg>
            </div>
            <select aria-label="Selected tab" value={value} name='value' onChange={onChange} className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
              <option value='account' className="text-sm text-gray-600">Account</option>
              <option value='investment' className="text-sm text-gray-600">Investments</option>
              <option value='profile' className="text-sm text-gray-600">Profile</option>
              <option value='deposit' className="text-sm text-gray-600">Deposit</option>
              <option value='withdrawal' className="text-sm text-gray-600">Withdrawal</option>
            </select>
          </div>
          <ul className="hidden sm:flex flex-row pt-8">
            <li className="rounded-t w-32 h-12 flex items-center justify-center hover:bg-gray-100 bg-gray-300 focus:bg-white focus:ring-2 focus:ring-white text-sm text-gray-800">
              <NavLink to="/user/account">Account</NavLink>
            </li>
            <li className="rounded-t w-32 h-12 flex items-center justify-center hover:bg-gray-100 bg-gray-300 mx-1 text-sm text-gray-800">
              <NavLink to="/user/profile">Investments</NavLink>
            </li>
            <li className="rounded-t w-32 h-12 flex items-center justify-center hover:bg-gray-100 bg-gray-300 mx-1 text-sm text-gray-800">
              <NavLink to="/user/profile">Profile</NavLink>
            </li>
            <li className="rounded-t w-32 h-12 flex items-center justify-center hover:bg-gray-100 bg-gray-300 mr-1 text-sm text-gray-800">
              <NavLink to="/user/deposit">Deposit</NavLink>
            </li>
            <li className="rounded-t w-32 h-12 flex items-center justify-center hover:bg-gray-100 bg-gray-300 text-sm text-gray-800">
              <NavLink to="/user/withdrawal">Withdraw</NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Page title ends */}
      {/* Remove class [ h-64 ] when adding a card block */}
      <div className="container mx-auto px-2 lg:px-6 mt-10">
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        <div className="w-full h-full rounded border-dashed border-2 border-gray-300 pb-2 lg:p-4"><Outlet /></div>
      </div>
    </div>
  )
}
