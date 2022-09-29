import { useState, useEffect } from 'react'
import instance from '../../containers/services/provider'
import { useUserState } from '../../containers/state/store'
import { Link } from 'react-router-dom'
import moment from 'moment'

const History = () => {
    const [loading, setLoading] = useState('none')
    const [withdrawals, setWithdrawals] = useState(null)
    const user = useUserState((state) => state.user)

    useEffect(() => {
        const fetchData = async () => {
            setLoading('begin')
            try {
                const { data } = await instance.get(`/withdrawal/${user._id}`)
                // console.log(data)
                if (data) {
                    setWithdrawals(data.withdrawals)
                    setLoading('done')
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [user]);

    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow rounded-md">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-blueGray-700">
                            Withdrawal History
                        </h3>
                    </div>
                    <Link to='/withdrawal' className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <button
                            className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                        >
                            Withdrawal
                        </button>
                    </Link>
                </div>
            </div>
            <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 text-blueGray-500 bg-gray-200 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Amount
                            </th>
                            <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Payment Method
                            </th>
                            <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Amount
                            </th>
                            <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Status
                            </th>
                            <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading === 'done' && withdrawals ? (
                            <>
                                {withdrawals.map((withdrawal, idx) => (
                                    <tr key={idx}>
                                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            {withdrawal.amount}
                                        </th>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {withdrawal.paymentMethod}
                                        </td>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {withdrawal.account}
                                        </td>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {withdrawal.status === 'paid' && <span className='bg-green-300 rounded-md px-2 py-0.5'>{withdrawal.status}</span>}
                                            {withdrawal.status === 'pending' && <span className='bg-yellow-300 rounded-md px-2 py-0.5'>{withdrawal.status}</span>}
                                            {withdrawal.status === 'cancelled' && <span className='bg-red-300 rounded-md px-2 py-0.5'>{withdrawal.status}</span>}
                                            {withdrawal.status === 'failed' && <span className='bg-gray-700 rounded-md text-white px-2 py-0.5'>{withdrawal.status}</span>}
                                        </td>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {moment(`${withdrawal.createdAt}`).format('MMMM Do YYYY')}
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
    );
}

export default History;
