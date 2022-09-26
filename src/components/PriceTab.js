import { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PriceTab = () => {
    const [packages, setPackages] = useState(null)
    const [loading, setLoading] = useState('none')
    const navigate = useNavigate()

    const fetchData = async () => {
        setLoading('begin')
        const res = await fetch('https://wcforex.cyclic.app/api/v1/package/all').then((response) => Promise.resolve(response)).catch((err) => Promise.reject(new Error(`${err}`)))
        Promise.all([res.json()]).then((value) => {
            setPackages(value[0].packages)
            // console.log(value[0].packages)
            setLoading('done')
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleInvestClick = (item) => {
        // console.log(item)
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

                                            {/* <tr className="border-b">
                                                <td className="text-sm px-6 py-4 whitespace-nowrap">
                                                    <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-300 text-gray-700 rounded-full">Real Estate</span>
                                                </td>
                                                <td className="text-sm px-6 py-4 whitespace-nowrap">$500 - $999</td>
                                                <td className="text-sm px-6 py-4 whitespace-nowrap">60 days</td>
                                                <td className="text-sm px-6 py-4 whitespace-nowrap">3.3%</td>
                                                <td className="text-sm px-6 py-4 whitespace-nowrap">200%</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="text-sm px-6 py-4 whitespace-nowrap">
                                                    <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-yellow-400 text-gray-700 rounded-full">Trading Hub</span>
                                                </td>
                                                <td className="text-sm px-6 py-4 whitespace-nowrap">$1000 - $2000</td>
                                                <td className="text-sm px-6 py-4 whitespace-nowrap">90 days</td>
                                                <td className="text-sm px-6 py-4 whitespace-nowrap">2.7%</td>
                                                <td className="text-sm px-6 py-4 whitespace-nowrap">250%</td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                    {/* <section class="text-gray-600 body-font">
                                        <div class="container px-5 py-8 mx-auto">
                                            <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                                                <table class="table-auto w-full text-left whitespace-no-wrap">
                                                    <thead>
                                                        <tr>
                                                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
                                                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
                                                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
                                                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                                                            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="px-4 py-3">Start</td>
                                                            <td class="px-4 py-3">5 Mb/s</td>
                                                            <td class="px-4 py-3">15 GB</td>
                                                            <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                                                            <td class="w-10 text-center">
                                                                <input name="plan" type="radio" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                                                            <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                                                            <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                                                            <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
                                                            <td class="border-t-2 border-gray-200 w-10 text-center">
                                                                <input name="plan" type="radio" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
                                                            <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                                                            <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                                                            <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
                                                            <td class="border-t-2 border-gray-200 w-10 text-center">
                                                                <input name="plan" type="radio" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
                                                            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
                                                            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
                                                            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
                                                            <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                                                <input name="plan" type="radio" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                                                <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                            </div>
                                        </div>
                                    </section> */}
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
