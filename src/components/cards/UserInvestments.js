import React, { useState, useEffect } from 'react';
import { useUserState } from '../../containers/state/store'
import instance from '../../containers/services/provider'
import moment from 'moment'

const UserInvestments = () => {
    const [loading, setLoading] = useState('none')
    const [investments, setInvestments] = useState(null)
    const user = useUserState((state) => state.user)

    useEffect(() => {
        const fetchData = async () => {
            setLoading('begin')
            try {
                const { data } = await instance.get(`/order/${user._id}`)
                console.log(data)
                if (data) {
                    setInvestments(data.orders)
                    setLoading('done')
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [user]);

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow rounded-md">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700">
                                Investments
                            </h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <button
                                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                Invest
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                {/* <th className="px-4 text-blueGray-500 bg-gray-200 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Package
                                </th> */}
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Invested
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Daily Returns
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Total Returns
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Profit
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Date
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading === 'done' && investments ? (
                                <>
                                    {investments.map((investment, idx) => (
                                        <tr key={idx}>
                                            {/* <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                {investment.packageId}
                                            </th> */}
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                USD {investment.amount}
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                USD {investment.dailyReturn}
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                USD {investment.totalReturn}
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                USD {investment.profit}
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {moment(`${investment.createdAt}`).format('MMMM Do YYYY')}
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {investment.state === 'open' && <span className='bg-green-300 rounded-md px-2 py-0.5'>{investment.state}</span>}
                                                {investment.state === 'waiting deposit' && <span className='bg-yellow-300 rounded-md px-2 py-0.5'>{investment.state}</span>}
                                                {investment.state === 'cancelled' && <span className='bg-red-300 rounded-md px-2 py-0.5'>{investment.state}</span>}
                                                {investment.state === 'closed' && <span className='bg-blue-300 rounded-md text-white px-2 py-0.5'>{investment.state}</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </>
                            ) : (
                                <tr>
                                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    </th>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        Loading...
                                    </td>
                                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default UserInvestments;
