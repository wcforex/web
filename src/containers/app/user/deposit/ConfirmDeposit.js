import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserState } from "../../../state/store"
import instance from "../../../services/provider"

const ConfirmDeposit = () => {
    const [loading, setLoading] = useState(false);
    const user = useUserState((state) => state.user)
    const location = useLocation()
    const data = location.state
    const navigate = useNavigate()

    const onConfirm = async (e) => {
        e.preventDefault()
        setLoading(true)
        const payload = {
            userId: user._id,
            userName: user.firstName + ' ' + user.lastName,
            amount: data.amount,
            paymentMethod: data.selected.name,
            account: data.selected.account,
            token: data.token,
        }
        try {
            const deposit = await instance.post('/deposit/create', payload).then((response) => Promise.resolve(response))
            // console.log(deposit)
            if (deposit) {
                setLoading(false)
                alert('Deposit created successfully')
                // navigate('/account')
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <div className='pt-24'>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg w-full">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Confirm</h3>
                    <p className="mt-1 max-w-2xl lg:text-sm text-xs text-gray-500">Confirm deposit details.</p>
                </div>
                <div className="border-t border-gray-200 w-full">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="lg:text-sm text-xs font-medium text-gray-500">Notice</dt>
                            <dd className="mt-1 lg:text-sm text-xs text-gray-900 font-semibold sm:col-span-2 sm:mt-0">
                                Please read the instructions carefully, we will not hold responsible for wrong deposits.
                                <p>{data.selected.description}</p>
                                <br />
                                {/* <p>Use the code as <b>Memo</b> when sending.</p> */}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="lg:text-sm text-xs font-medium text-gray-500">Amount</dt>
                            <dd className="mt-1 lg:text-sm text-xs text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.selected.name}  {data.amount}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="lg:text-sm text-xs font-medium text-gray-500">Payment Method</dt>
                            <dd className="mt-1 lg:text-sm text-xs text-gray-900 sm:col-span-2 sm:mt-0">{data.selected.name}</dd>
                        </div>
                        {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="lg:text-sm text-xs font-medium text-gray-500">Code</dt>
                            <dd className="mt-1 lg:text-sm text-xs text-gray-900 sm:col-span-2 sm:mt-0">{data.token}</dd>
                        </div> */}
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="lg:text-sm text-xs font-medium text-gray-500">{data.selected.name} Address</dt>
                            <dd className="mt-1 lg:text-sm text-xs text-gray-900 font-semibold sm:col-span-2 sm:mt-0">
                                {data.selected.account}
                            </dd>
                        </div>
                        <div className='py-2 flex justify-center'>
                            <button type="button" onClick={() => navigate(-1)} className="text-gray-50 bg-sky-600 border border-gray-200 outline-none font-medium rounded-lg lg:text-sm text-xs mx-4 lg:mx-10 px-4 py-1 lg:py-1.5 lg:px-10  text-center inline-flex items-center">
                                Back
                            </button>
                            <button type="submit" onClick={onConfirm} className="inline-flex justify-center text-gray-50 bg-sky-600 border border-gray-200 outline-none font-medium rounded-lg lg:text-sm text-xs px-4 py-1 lg:py-1.5 lg:px-10 text-center items-center">
                                {loading && <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
                                    <path
                                        className="fill-sky-400"
                                        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                    <path
                                        className="fill-blue-100"
                                        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                                </svg>}
                                <span>Confirm</span>
                            </button>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDeposit;
