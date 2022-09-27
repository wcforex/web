import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Confirm() {
    const location = useLocation()
    const item = location.state

    const [dailyReturns, setDailyReturns] = useState(0)
    const [totalReturn, setTotalReturn] = useState(0)
    const [profits, setProfits] = useState(0)
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
                        <div className='py-2 flex justify-center'>
                            <button type="button" onClick={() => navigate(-1)} className="text-gray-50 mx-4 bg-gray-500 border border-gray-200 outline-none font-medium rounded-lg text-sm px-10 py-2 text-center inline-flex items-center">
                                Back
                            </button>
                            <button type="submit" className="text-gray-50 bg-sky-600 border border-gray-200 outline-none font-medium rounded-lg text-sm px-10 py-2 text-center inline-flex items-center">
                                Confirm
                            </button>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}
