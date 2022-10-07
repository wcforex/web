import React, { useState, useEffect } from 'react';
import instance from '../../../services/provider';
import moment from 'moment'
import { useNavigate, Link } from 'react-router-dom';

const AllUsers = () => {
    const [loading, setLoading] = useState('none')
    const [users, setUsers] = useState(null);
    const [count, setCount] = useState(null);
    const navigate = useNavigate()

    const fetchData = async () => {
        setLoading('begin')
        try {
            const { data } = await instance.get('/user/all')
            // console.log(data)
            if (data) {
                setUsers(data.users)
                setCount(data.count)
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

    const onEdit = (pg) => {
        navigate(`/admin/user/${pg._id}`, { state: { pg } })
     }
    return (
        <div className='py-24 px-4 lg:px-5 xl:px-5'>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow rounded-md">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700">
                                Users
                            </h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <Link to='/admin/package/new'>
                                <button
                                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    {count ? <>{count} Users</> : 'loading'}
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-4 text-blueGray-500 bg-gray-200 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Name
                                </th>
                                <th className="px-4 text-blueGray-500 bg-gray-200 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Email
                                </th>
                                <th className="px-4 text-blueGray-500 bg-gray-200 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    USDT Address
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Wallet
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Role
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Date
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading === 'done' && users ? (
                                <>
                                    {users.map((pg, idx) => (
                                        <tr key={idx}>
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                {pg.firstName + " " + pg.lastName}
                                            </th>
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                {pg.email}
                                            </th>
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                {pg.usdtAddress}
                                            </th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                USD {pg.wallet}
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {pg.role}
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {moment(`${pg.createdAt}`).format('MMMM Do YYYY')}
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <button type="button" className='bg-white border border-sky-400 rounded hover:bg-sky-400 text-gray-900 py-1 px-2' onClick={() => onEdit(pg)}>Edit</button>
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
        </div>
    );
}

export default AllUsers;
