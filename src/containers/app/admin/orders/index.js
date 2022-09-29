import React, { useState, useEffect } from 'react';
import instance from '../../../services/provider';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

const AllOrders = () => {
    const [loading, setLoading] = useState('none')
    const [orders, setOrders] = useState(null);
    const navigate = useNavigate()

    const fetchData = async () => {
        setLoading('begin')
        try {
            const { data } = await instance.get('/order/all')
            if (data) {
                setOrders(data.orders)
                setLoading('done')
            }
        } catch (error) {
            setLoading('done')
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, []);

    const onEdit = (order) => {
        navigate(`/admin/order/${order._id}`, { state: { order } })
    }

    return (
        <div className='py-24 px-4 lg:px-5 xl:px-5'>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow rounded-md">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700">
                                Orders
                            </h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <button
                                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                Order
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>

                                {/* <th className="px-2 text-blueGray-500 bg-gray-200 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Package
                                </th> */}
                                <th className="px-2 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Invested
                                </th>
                                <th className="px-2 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Daily Returns
                                </th>
                                <th className="px-2 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Total Returns
                                </th>
                                <th className="px-2 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Duration
                                </th>
                                <th className="px-2 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Date
                                </th>
                                <th className="px-2 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Status
                                </th>
                                <th className="px-2 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading === 'done' && orders ? (
                                <>
                                    {orders.map((order, idx) => (
                                        <tr key={idx}>
                                            {/* <th className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                {order.packageId}
                                            </th> */}
                                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                USD {order.amount}
                                            </td>
                                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                USD {order.dailyReturn.toFixed(3)}
                                            </td>
                                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                USD {order.totalReturn}
                                            </td>
                                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {order.duration} days
                                            </td>
                                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {moment(`${order.createdAt}`).format('MMMM Do YYYY')}
                                            </td>
                                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {order.state === 'open' && <span className='bg-green-300 capitalize rounded-md px-2 py-1'>{order.state}</span>}
                                                {order.state === 'waiting deposit' && <span className='bg-yellow-300 capitalize rounded-md px-2 py-0.5'>{order.state}</span>}
                                                {order.state === 'cancelled' && <span className='bg-red-500 text-white capitalize rounded-md px-2 py-0.5'>{order.state}</span>}
                                                {order.state === 'closed' && <span className='bg-blue-600 capitalize rounded-md text-white px-2 py-0.5'>{order.state}</span>}
                                            </td>
                                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <button type="button" className='bg-white border text-[10px] font-semibold border-sky-400 hover:bg-sky-500 hover:text-white rounded-md py-1 px-2  text-gray-900' onClick={() => onEdit(order)}>Update</button>
                                            </td>
                                        </tr>
                                    ))}
                                </>
                            ) : (
                                <tr>
                                    <th className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    </th>
                                    <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        Loading...
                                    </td>
                                    <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default AllOrders;