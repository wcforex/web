import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CalculatePrice() {
    const [packages, setPackages] = useState(null)
    const [loading, setLoading] = useState('none')

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

    const [selected, setSelected] = useState(null)
    const [amount, setAmount] = useState(null)
    const [dailyReturns, setDailyReturns] = useState(null)
    const [totalReturn, setTotalReturn] = useState(null)
    const [profits, setProfits] = useState(null)
    const [packageName, setPackageName] = useState(null)
    const [alert, setAlert] = useState(false)

    const onCalculate = (e) => {
        e.preventDefault()
        if (selected === null) {
            setAlert(true)
        } else {
            setAlert(false)
        }
        if (amount && selected) {
            setPackageName(selected.name)
            let dReturns = selected.interestRatePerDay / 100 * amount
            setDailyReturns(dReturns)
            console.log('daily:', dReturns)

            let tReturn = selected.interestRate / 100 * amount
            setTotalReturn(tReturn)
            console.log('total:', tReturn)

            let pr = tReturn - amount
            setProfits(pr)
            console.log('Prfite:', pr)
        }
    }

    return (
        <div>
            <div className="">
                <div className="container m-auto px-6 py-16 md:px-12 lg:px-[10rem]">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-sky-300">
                                INVESTMENT CALCULATOR
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <span className="relative">Calculate</span>
                            </span>{' '}
                            your Profits.
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p>
                    </div>
                    <div className="mb-6 xl:mb-0 flex-initial shrink w-full xl:pr-3">
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full sm:px-4 lg:px-8">
                                    <div className="overflow-hidden">
                                        <div className="min-w-full mb-0 bg-gray-100 flex justify-center flex-wrap rounded">
                                            <div className="lg:w-1/2 py-8 px-8 text-sky-900">
                                                <table className="text-sky-900 w-full">
                                                    <tr className=''>
                                                        <td className=' font-medium py-3 mb-8'>Package: </td>
                                                        <td className='py-3 mb-8'>{packageName ? packageName : ''}</td>
                                                    </tr>
                                                    <tr className=''>
                                                        <td className=' font-medium py-3 mb-4'>Daily Return: </td>
                                                        <td className='py-3 mb-4'>
                                                            <span className='bg-cyan-300 rounded-lg px-2 py-1 text-sm'>{dailyReturns ? `USD ${dailyReturns}` : ''}</span>
                                                        </td>
                                                    </tr>
                                                    <tr className='py-4 mb-4'>
                                                        <td className=' font-medium py-3 mb-4'>Total Return: </td>
                                                        <td className=' py-3 mb-4'>
                                                            <span className='bg-yellow-300 rounded-lg px-2 py-1 text-sm'>{totalReturn ? `USD ${totalReturn}` : ''}</span>
                                                        </td>
                                                    </tr>
                                                    <tr className='py-4 mb-4'>
                                                        <td className=' font-medium py-3 mb-4'>Profit: </td>
                                                        <td className=' py-3 mb-4'>
                                                            <span className='bg-green-300 rounded-lg px-2 py-1 text-sm'>{profits ? `USD ${profits}` : ''}</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <div className="lg:w-1/2 py-8 px-4 w-full">
                                                <form className="relative" onSubmit={onCalculate}>
                                                    <Listbox value={selected} onChange={setSelected}>
                                                        {({ open }) => (
                                                            <>
                                                                <Listbox.Label className="block text-sm font-medium text-gray-700">Investment Package</Listbox.Label>
                                                                <div className="relative mt-1">
                                                                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                                                        <span className="flex items-center">
                                                                            <span className="flex-shrink-0 rounded-full bg-sky-600 px-2 py-1 text-xs text-white">{selected === null ? '' : `${selected.interestRate}%`}</span>
                                                                            <span className="ml-3 block truncate">{selected === null ? 'Select a package' : selected.name}</span>
                                                                            <span className='px-2'>{selected === null ? '' : <span>${selected.minDeposite} - ${selected.maxDeposite}</span>}</span>
                                                                        </span>
                                                                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                        </span>
                                                                    </Listbox.Button>

                                                                    <Transition
                                                                        show={open}
                                                                        as={Fragment}
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                            {loading !== 'done' && packages === null ? (
                                                                                <Listbox.Option>
                                                                                    loading
                                                                                </Listbox.Option>
                                                                            ) : (
                                                                                <>
                                                                                    {packages.map((item) => (
                                                                                        <Listbox.Option
                                                                                            key={item.id}
                                                                                            className={({ active }) =>
                                                                                                classNames(
                                                                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                                                )
                                                                                            }
                                                                                            value={item}
                                                                                        >
                                                                                            {({ selected, active }) => (
                                                                                                <>
                                                                                                    <div className="flex items-center">
                                                                                                        <span className="flex-shrink-0 rounded-full bg-sky-600 px-2 py-1 text-xs text-white">{item.interestRate}%</span>
                                                                                                        <span
                                                                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                                                        >
                                                                                                            {item.name}
                                                                                                        </span>
                                                                                                        <span className='px-2'>${item.minDeposite} - ${item.maxDeposite}</span>
                                                                                                    </div>

                                                                                                    {selected ? (
                                                                                                        <span
                                                                                                            className={classNames(
                                                                                                                active ? 'text-white' : 'text-indigo-600',
                                                                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                                            )}
                                                                                                        >
                                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                        </span>
                                                                                                    ) : null}
                                                                                                </>
                                                                                            )}
                                                                                        </Listbox.Option>
                                                                                    ))}
                                                                                </>
                                                                            )}
                                                                        </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox>
                                                    {alert && <span className='text-sm text-red-600'>🚫Please select a package</span>}

                                                    <label htmlFor="name" className="text-gray-700 mt-8 leading-tight tracking-normal block text-sm font-medium">
                                                        Amount (USD)
                                                    </label>
                                                    <input id="name" type="number" name="amount" onChange={(e) => setAmount(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-sky-500 font-normal w-full h-10 lg:h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter amount" />
                                                    <div className="flex items-center justify-start w-full">
                                                        <button type="submit" className="focus:outline-none duration-150 ease-in-out transition bg-sky-700 rounded-md text-gray-50 font-semibold px-8 py-2 lg:text-sm text-xs">Calculate</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}