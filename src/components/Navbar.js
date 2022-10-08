import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'
import { useUserState } from '../containers/state/store';

export default function Navbar() {
    const user = useUserState((state) => state.user)
    const isLoggedIn = useUserState((state) => state.isLoggedIn)
    return (
        <div>
            <header>
                <input type="checkbox" name="hbr" id="hbr" className="hbr peer" hidden aria-hidden="true" />
                <nav className="fixed md:absolute z-10 w-full border-b bg-white backdrop-blur navbar peer-checked:navbar-active">
                    <div className="container m-auto px-2 md:px-12 lg:px-7">
                        <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
                            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                                <a href="/" aria-label="logo" className="flex space-x-2 items-center">
                                    <div aria-hidden="true" className="flex space-x-1">
                                        <div className="h-4 w-4 rounded-full bg-gray-900"></div>
                                        <div className="h-6 w-2 bg-sky-500"></div>
                                    </div>
                                    <span className="text-base font-bold text-gray-400">WCFI</span>
                                </a>
                                <label htmlFor="hbr" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                    <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                    <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                </label>
                            </div>
                            <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 mx-6 space-y-20 p-6 rounded-xl shadow-lg bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none">
                                {isLoggedIn ? (
                                    <div className="text-gray-600 lg:pr-4">
                                        {user.role === 'admin' ? (
                                            <ul className="space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0">
                                                <li>
                                                    <NavLink to="/admin/all-orders" className="block md:px-4 transition hover:text-sky-700">
                                                        <span>Orders</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/admin/all-withdrawals" className="block md:px-4 transition hover:text-sky-700">
                                                        <span>Withdrawals</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/admin/all-packages" className="block md:px-4 transition hover:text-sky-700">
                                                        <span>Packages</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/admin/payment-method" className="block md:px-4 transition hover:text-sky-700">
                                                        <span>Payment Method</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/admin/all-users" className="block md:px-4 transition hover:text-sky-700">
                                                        <span>Users</span>
                                                    </NavLink>
                                                </li>

                                            </ul>
                                        ) : (
                                            <ul className="space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0">
                                                <li>
                                                    <NavLink to="/account" className="block md:px-4 transition hover:text-sky-700">
                                                        <span>Dashboard</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/plans" className="block md:px-4 transition hover:text-sky-700">
                                                        <span>Investment Plan</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/withdrawal" className="block md:px-4 transition hover:text-sky-700">
                                                        <span>Withdraw</span>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <div className="text-gray-600 lg:pr-4">
                                        <ul className="space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0">
                                            <li>
                                                <NavLink to="/" className="block md:px-4 transition hover:text-sky-700">
                                                    <span>Home</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/plans" className="block md:px-4 transition hover:text-sky-700">
                                                    <span>Investment Plan</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/services" className="block md:px-4 transition hover:text-sky-700">
                                                    <span>Services</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                {isLoggedIn ? (
                                    <div className="w-full space-y-2 border-sky-200 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                                        {/* <button type="button" title="Start buying" className="w-full py-2.5 px-5 text-center rounded-full transition sm:w-max">
                                            <span className="block text-sky-800 font-semibold lg:text-sm">
                                                USD {userData ? userData.wallet : (<>{loading ? 'updating wallet...' : ''}</>)}
                                            </span>
                                        </button> */}
                                        <Dropdown />
                                    </div>
                                ) : <div className="w-full space-y-2 border-sky-200 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                                    <Link to='/signup'>
                                        <button type="button" title="Start buying" className="w-full py-2.5 px-5 text-center rounded-full transition sm:w-max">
                                            <span className="block text-sky-800 font-semibold lg:text-sm">
                                                Sign up
                                            </span>
                                        </button>
                                    </Link>
                                    <Link to='/signin'>
                                        <button type="button" title="Start buying" className="w-full py-2 px-5 text-center rounded-md transition bg-gradient-to-b from-sky-400 to-cyan-300 sm:w-max">
                                            <span className="block text-sky-900 font-semibold lg:text-sm">
                                                Login
                                            </span>
                                        </button>
                                    </Link>
                                </div>}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
