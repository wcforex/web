import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import instance from "../../services/provider"
import { useUserState } from '../../state/store'

export default function Confirm() {
    const location = useLocation()
    const item = location.state
    console.log(item)

    const [dailyReturns, setDailyReturns] = useState(0)
    const [totalReturn, setTotalReturn] = useState(0)
    const [profits, setProfits] = useState(0)
    const [loading, setLoading] = useState(false);
    const user = useUserState((state) => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        let dReturns = item.selected.interestRatePerDay / 100 * item.amount
        setDailyReturns(dReturns)
        console.log('daily:', dReturns)

        let tReturn = item.selected.interestRate / 100 * item.amount
        setTotalReturn(tReturn)
        console.log('total:', tReturn)

        let pr = tReturn - item.amount
        setProfits(pr)
        console.log('Prfite:', pr)
    }, [item.amount, item.selected])

    const onConfirm = async (e) => {
        e.preventDefault()
        const payload = {
            userId: user._id,
            packageId: item.selected._id,
            paymentMethod: item.picked.name,
            amount: item.amount,
            dailyReturn: dailyReturns,
            profit: profits,
            totalReturn: totalReturn,
            duration: item.selected.duration,
        }

        try {
            const order = await instance.post('/order/create', payload).then((response) => Promise.resolve(response))
            if (order) {
                setLoading(false)
                alert('Order created successfully')
                navigate('/account')
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }

    }

    return (
        <div className='pt-24 px-4'>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Investment Preview</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Confirm investment.</p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>

                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Package</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{item.selected.name}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Investment</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">USD {item.amount}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Daily Return</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">USD {dailyReturns}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Total Return</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">USD {totalReturn}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Profit</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">USD {profits}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="lg:text-sm text-xs font-medium text-gray-500">Notice</dt>
                            <dd className="mt-1 lg:text-sm text-xs text-gray-900 font-semibold sm:col-span-2 sm:mt-0">
                                Please read the instructions carefully, we will not hold responsible for wrong deposits.
                                <p>{item.picked.description}</p>
                                <br />
                                {/* <p>Use the code as <b>Memo</b> when sending.</p> */}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="lg:text-sm text-xs font-medium text-gray-500">Amount to deposit</dt>
                            <dd className="mt-1 lg:text-sm text-xs text-gray-900 sm:col-span-2 sm:mt-0">
                                {item.picked.name}  {item.amount}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="lg:text-sm text-xs font-medium text-gray-500">Payment Method</dt>
                            <dd className="mt-1 lg:text-sm text-xs text-gray-900 sm:col-span-2 sm:mt-0">{item.picked.name}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="lg:text-sm text-xs font-medium text-gray-500">Send {item.picked.name} to this address</dt>
                            <dd className="mt-1 lg:text-sm text-xs text-gray-900 font-semibold sm:col-span-2 sm:mt-0">
                                {item.picked.account}
                            </dd>
                        </div>
                        <div className='py-2 flex justify-center'>
                            <button type="button" onClick={() => navigate(-1)} className="text-gray-50 mx-4 bg-gray-500 border border-gray-200 outline-none font-medium rounded-lg text-sm px-10 py-2 text-center inline-flex items-center">
                                Back
                            </button>
                            <button type="submit" onClick={onConfirm} className="text-gray-50 bg-sky-600 border border-gray-200 outline-none font-medium rounded-lg text-sm px-10 py-2 text-center inline-flex justify-center items-center">
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
    )
}
