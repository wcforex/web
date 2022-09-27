import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PriceTab = () => {
    const [packages, setPackages] = useState(null)
    const [loading, setLoading] = useState('none')
    const navigate = useNavigate()

    const fetchData = async () => {
        setLoading('begin')
        const res = await fetch('https://wcforex.cyclic.app/api/v1/package/all').then((response) => Promise.resolve(response)).catch((err) => Promise.reject(new Error(`${err}`)))
        Promise.all([res.json()]).then((value) => {
            setPackages(value[0].packages)
            setLoading('done')
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleInvestClick = (item) => {
        navigate(`/invest/${item._id}`, { state: { item } })
    }
    return (
        <div>
            <div className="container my-8 py-16 mx-auto px-4 md:px-6 lg:px-[10rem] bg-slate-800">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-sky-300">
                            INVESTMENTS
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-50 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="ace59d72-08d5-4850-b9e4-d9d0b86c0525"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative text-gray-50">Our Investment</span>
                        </span>{' '}
                        Packages.
                    </h2>
                    <p className="text-base text-gray-50 md:text-lg">
                        Invest in our high yielding investment packages and let your money works for you. Earn even when you are asleep.
                    </p>
                </div>
                <div className="mb-6 xl:mb-0 flex-initial shrink w-full xl:pr-3">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full mb-0 bg-gray-200">
                                        <thead className="border-b rounded-t-lg text-left">
                                            <tr>
                                                <th scope="col" className="rounded-tl-lg text-sm font-semibold px-6 py-4">Package</th>
                                                <th scope="col" className="text-sm font-semibold px-6 py-4">Deposit Requirement</th>
                                                <th scope="col" className="text-sm font-semibold px-6 py-4">Duration (days)</th>
                                                <th scope="col" className="text-sm font-semibold px-6 py-4">Daily Returns</th>
                                                <th scope="col" className="text-sm font-semibold px-6 py-4">Total Returns</th>
                                                <th scope="col" className="text-sm font-semibold px-6 py-4">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading !== 'done' && packages === null ? (
                                                <tr className=''><span>Loading...</span></tr>
                                            ) : (
                                                <>
                                                    {packages.map((item) => (
                                                        <tr className="border-b">
                                                            <td className="text-sm px-6 py-4 whitespace-nowrap">
                                                                <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-sky-300 text-gray-700 rounded-full">{item.name}</span>
                                                            </td>
                                                            <td className="text-sm px-6 py-4 whitespace-nowrap">${item.minDeposite} - ${item.maxDeposite}</td>
                                                            <td className="text-sm px-6 py-4 whitespace-nowrap">{item.duration}</td>
                                                            <td className="text-sm px-6 py-4 whitespace-nowrap">{item.interestRatePerDay}%</td>
                                                            <td className="text-sm px-6 py-4 whitespace-nowrap"><span className='bg-green-300 px-2.5 py-0.5 rounded-full text-xs font-medium'>{item.interestRate}%</span></td>
                                                            <td className="text-sm px-6 py-4 whitespace-nowrap"><button className="bg-sky-300 hover:bg-sky-400 text-xs py-1 px-4 rounded-full" onClick={() => handleInvestClick(item)}>Invest</button></td>
                                                        </tr>
                                                    ))}
                                                </>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceTab;
