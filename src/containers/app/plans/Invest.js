import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useLocation, useNavigate } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Invest = () => {
    const location = useLocation()
    const item = location.state
    // console.log(item.item)
    const navigate = useNavigate()

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

    const [invest, setInvest] = useState()
    const [selected, setSelected] = useState(item.item)
    const [amount, setAmount] = useState(0)
    const [alert, setAlert] = useState(false)
    const [alertx, setAlertx] = useState(false)

    const onConfirm = (e) => {
        e.preventDefault()
        console.log('reading: ', amount)
        if (selected === null) {
            setAlert(true)
        } else {
            setAlert(false)
        }
        if (amount === null || amount === 0 || amount === '0' || amount === undefined || amount === '') {
            setAlertx(true)
        } else {
            setAlertx(false)
        }
        if (amount > 0 && selected) {
            console.log({ amount, selected })
            // setInvest({ amount, selected })
            navigate(`/confirm/${selected._id}`, { state: { amount, selected } })
        } else {
            console.log('INVALID')
        }
    }

    return (
        <div className='pt-24 px-4'>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Investment Information</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Select and confirm investment.</p>
                </div>
                <form className="border-t border-gray-200" onSubmit={onConfirm}>
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Package</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{selected.name}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Daily Return</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{selected.interestRatePerDay}%</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Total Return</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{selected.interestRate}%</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Change package</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <Listbox value={selected} onChange={setSelected}>
                                    {({ open }) => (
                                        <>
                                            <div className="relative mt-1">
                                                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                                    <span className="flex items-center">
                                                        <span className="flex-shrink-0 rounded-full bg-sky-600 px-2 py-1 text-xs text-white">{selected === null ? '' : `${selected.duration} days`}</span>
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
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Amount to Invest</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <div className="w-full space-y-0.5">
                                    <input onChange={(e) => setAmount(e.target.value)}
                                        id="basic" name='amount'
                                        type="number"
                                        placeholder="Enter amount to invest"
                                        className="block w-full rounded-md py-2 px-2 border border-gray-200 text-sm outline-none transition focus:border focus:border-sky-600 focus:ring-sky-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                                    {alertx && <span className='text-sm text-red-600'>🚫Please enter amount to invest</span>}
                                </div>
                            </dd>
                        </div>
                        <div className='py-2 flex justify-center'>
                            <button type="submit" className="text-gray-50 bg-sky-600 border border-gray-200 outline-none font-medium rounded-lg text-sm px-10 py-2 text-center inline-flex items-center">
                                Continue
                            </button>
                        </div>
                    </dl>
                </form>
            </div>

        </div>
    );
}

export default Invest;