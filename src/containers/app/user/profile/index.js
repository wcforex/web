import React, { useState } from "react";
import { useUserState } from "../../../state/store";
import instance from '../../../services/provider'

function Profile() {
    const user = useUserState((state) => state.user)
    const setUser = useUserState((state) => state.setUser)
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        usdtAddress: user.usdtAddress,
        password: user.password,
        phoneNumber: user.phoneNumber,
        country: user.country,
    })
    const referralCode = user.myCode;

    const onChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }
    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const { data } = await instance.patch(`/user/${user._id}`, userData)
            console.log(data)
            if (data) {
                setUser(data.user);
                setLoading(false);
                alert('Profile updated successfully')
            }
        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    }

    return (
        <>
            <div className="flex items-center justify-center pt-24" >
                <div className=" w-full px-8">
                    <form className="xl:px-24" onSubmit={onSubmit}>
                        <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 9.99999H20C20.2652 9.99999 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 9.99999 4 9.99999H5V8.99999C5 8.08074 5.18106 7.17049 5.53284 6.32121C5.88463 5.47193 6.40024 4.70026 7.05025 4.05025C7.70026 3.40023 8.47194 2.88462 9.32122 2.53284C10.1705 2.18105 11.0807 1.99999 12 1.99999C12.9193 1.99999 13.8295 2.18105 14.6788 2.53284C15.5281 2.88462 16.2997 3.40023 16.9497 4.05025C17.5998 4.70026 18.1154 5.47193 18.4672 6.32121C18.8189 7.17049 19 8.08074 19 8.99999V9.99999ZM17 9.99999V8.99999C17 7.67391 16.4732 6.40214 15.5355 5.46446C14.5979 4.52678 13.3261 3.99999 12 3.99999C10.6739 3.99999 9.40215 4.52678 8.46447 5.46446C7.52678 6.40214 7 7.67391 7 8.99999V9.99999H17ZM11 14V18H13V14H11Z"
                                            fill="#4B5563"
                                        />
                                    </svg>
                                </div>
                                <p className="lg:text-sm text-xs text-gray-800 pl-3">We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
                            </div>
                            <button className="md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded">
                                <svg aria-label="Close this banner" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8337 5.34166L14.6587 4.16666L10.0003 8.825L5.34199 4.16666L4.16699 5.34166L8.82533 10L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 10L15.8337 5.34166Z" fill="#79808F" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div className="max-w-80">
                                <div className="flex items-center">
                                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Personal Information</h1>
                                </div>
                                <p className="mt-4 lg:text-sm text-xs leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                            </div>
                            <div>
                                <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div className="md:w-64">
                                        <label className="lg:text-sm text-xs leading-none text-gray-800" id="firstName" >First name</label>
                                        <input type="text" name='firstName' value={userData.firstName} onChange={onChange} className="w-full p-2 lg:p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 lg:text-sm text-xs font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="lg:text-sm text-xs leading-none text-gray-800" id="lastName">Last name</label>
                                        <input type="text" name="lastName" value={userData.lastName} onChange={onChange} className="w-full p-2 lg:p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 lg:text-sm text-xs font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder="" />
                                    </div>
                                </div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64">
                                        <label className="lg:text-sm text-xs leading-none text-gray-800" id="emailAddress">Email address</label>
                                        <input type="email" name="email" value={userData.email} onChange={onChange} className="w-full p-2 lg:p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 lg:text-sm text-xs font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="lg:text-sm text-xs leading-none text-gray-800" id="phone" >Phone number</label>
                                        <input type="number" name="phoneNumber" value={userData.phoneNumber} onChange={onChange} className="w-full p-2 lg:p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 lg:text-sm text-xs font-medium leading-none text-gray-800" aria-labelledby="phoneNumber" placeholder="" />
                                    </div>
                                </div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64">
                                        <label className="lg:text-sm text-xs leading-none text-gray-800" id="password">Password</label>
                                        <input type="password" disabled name="password" value={userData.password} onChange={onChange} className="w-full p-2 lg:p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 lg:text-sm text-xs font-medium leading-none text-gray-800" aria-labelledby="password" placeholder="" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="lg:text-sm text-xs leading-none text-gray-800" id="altPhone">Country</label>
                                        <input disabled type="name" name="country" value={userData.country} onChange={onChange} className="w-full p-2 lg:p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 lg:text-sm text-xs font-medium leading-none text-gray-800" aria-labelledby="country" placeholder="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 lg:flex justify-between pb-16 mb-4">
                            <div className="max-w-80">
                                <div className="flex items-center">
                                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Payment Details</h1>
                                </div>
                                <p className="mt-4 lg:text-sm text-xs leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                            </div>
                            <div>
                                <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div className="md:w-64">
                                        <label className="lg:text-sm text-xs leading-none text-gray-800" id="password">USDT Address</label>
                                        <input type="text" name="usdtAddress" value={userData.usdtAddress} onChange={onChange} className="w-full p-2 lg:p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 lg:text-sm text-xs font-medium leading-none text-gray-800" aria-labelledby="usdtAddress" placeholder="" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <h4>Share your referral code and get 10% of first package profit for every person who registers with your code.</h4>
                                        <div >Referral code: <code className="bg-sky-200">{referralCode}</code></div>
                                    </div>
                                    {/* <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="lg:text-sm text-xs leading-none text-gray-800" id="securityCode">USDT Address</label>
                                        <input disabled type="text" onChange={onChange} name="" className="w-full p-2 lg:p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 lg:text-sm text-xs font-medium leading-none text-gray-800" aria-labelledby="usdtAddress" placeholder="Enter your usdt address" />
                                    </div> */}
                                </div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    {/* <div className="md:w-64">
                                        <label className="lg:text-sm text-xs leading-none text-gray-800" id="recoverEmail">Litecoin Address</label>
                                        <input disabled type="text" className="w-full p-2 lg:p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 lg:text-sm text-xs font-medium leading-none text-gray-800" aria-labelledby="litecoinAddress" placeholder="Enter your litecoin address" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="lg:text-sm text-xs leading-none text-gray-800" id="altPhone">Dogecoin Address</label>
                                        <input disabled type="text" className="w-full p-2 lg:p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 lg:lg:text-sm text-xs font-medium leading-none text-gray-800" aria-labelledby="dogecoinAddress" placeholder="Enter your dogecoin address" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <button type="submit" aria-label="Submit" className="flex items-center mx-auto my-0 justify-center py-2 px-16 focus:outline-none bg-sky-700 rounded md:mt-4">
                            {loading && <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
                                <path
                                    className="fill-sky-400"
                                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                <path
                                    className="fill-blue-100"
                                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                            </svg>}
                            <span className="lg:text-sm text-xs font-medium text-center text-sky-50 capitalize">Save</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Profile;
