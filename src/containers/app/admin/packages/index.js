import React, { useState, useEffect } from 'react';
import instance from '../../../services/provider';
import { useNavigate, Link } from 'react-router-dom';
import moment from 'moment'

const AllPackages = () => {
    const [loading, setLoading] = useState('none')
    const [packages, setPackages] = useState(null);
    const navigate = useNavigate()

    const fetchData = async () => {
        setLoading('begin')
        try {
            const { data } = await instance.get('/package/all')
            console.log(data)
            if (data) {
                setPackages(data.packages)
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
        navigate(`/admin/package/${pg._id}`, { state: { pg } })
    }
    return (
        <div className='py-24 px-4 lg:px-5 xl:px-5'>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow rounded-md">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700">
                                Packages
                            </h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <Link to='/admin/package/new'>
                                <button
                                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    New Package
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
                                    Max Deposit
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Min Deposit
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Duration
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Daily Rate
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Total Rate
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Date
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Status
                                </th>
                                <th className="px-4 bg-gray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading === 'done' && packages ? (
                                <>
                                    {packages.map((pg, idx) => (
                                        <tr key={idx}>
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                {pg.name}
                                            </th>
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                USD {pg.maxDeposite}
                                            </th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                USD {pg.minDeposite}
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {pg.duration} days
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {pg.interestRatePerDay}%
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {pg.interestRate}%
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {moment(`${pg.createdAt}`).format('MMMM Do YYYY')}
                                            </td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {pg.status === 'active' && <span className='bg-green-300 rounded capitalize px-2 py-1'>{pg.status}</span>}
                                                {pg.status === 'inActive' && <span className='bg-red-300 rounded capitalize px-2 py-1'>{pg.status}</span>}
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

export default AllPackages;
