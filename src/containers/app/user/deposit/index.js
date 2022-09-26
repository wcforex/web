import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom';
import instance from '../../../services/provider'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Deposit = () => {
    const [loading, setLoading] = useState('none')
    const [paymentMethods, setPaymentMethods] = useState(null)

    const fetchData = async () => {
        setLoading('begin')
        try {
            const { data } = await instance.get('/payment-method/all')
            // console.log(data.paymentMethods)
            setPaymentMethods(data.paymentMethods)
            setLoading('done')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const [amount, setAmount] = useState(0)
    const [selected, setSelected] = useState(paymentMethods ? paymentMethods[0] : null)
    const [alert, setAlert] = useState(false)
    const [alertx, setAlertx] = useState({
        visible: '',
        message: ''
    })
    const navigate = useNavigate()

    const onContinue = async (e) => {
        e.preventDefault()
        if (selected === null) {
            setAlert(true)
        } else {
            setAlert(false)
            if (amount === null || amount === 0 || amount === '0' || amount === undefined || amount === '') {
                setAlertx({ visible: 'empty', message: '🚫Please enter amount to deposit' })
            } else {
                if (amount < selected.minimum) {
                    setAlertx({ visible: 'minimum', message: `The minimum deposit for ${selected.name} is ${selected.minimum}` })
                } else {
                    let token = '';
                    let codeLenght = parseInt(8);
                    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjkmnopqrstuvwxyz0123456789#';
                    for (var i = 0; i < codeLenght; i++) {
                        token += chars.charAt(Math.floor(Math.random() * chars.length));
                    }

                    navigate(`/deposit/${token}`, { state: { amount, selected, token } });
                }
            }
        }
    }

    return (
        <div className='pt-24 px-4'>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Deposit</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Enter your deposit details.</p>
                </div>
                <form className="border-t border-gray-200" onSubmit={onContinue}>
                    <dl>

                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Payment Method</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <Listbox value={selected} onChange={setSelected}>
                                    {({ open }) => (
                                        <>
                                            <div className="relative mt-1">
                                                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                                    <span className="flex items-center" key={selected ? selected._id : null}>
                                                        <span className="flex-shrink-0 rounded-full bg-sky-600 px-2 py-1 text-xs text-white">{selected === null ? '' : `${selected.minimum}`}</span>
                                                        <span className="ml-3 block truncate">{selected === null ? 'Select payment method' : selected.name}</span>
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
                                                        {loading !== 'done' && paymentMethods === null ? (
                                                            <Listbox.Option>
                                                                loading
                                                            </Listbox.Option>
                                                        ) : (
                                                            <>
                                                                {paymentMethods.map((item) => (
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
                                                                                    <span className="flex-shrink-0 rounded-full bg-sky-600 px-2 py-1 text-xs text-white">{item.minimum}</span>
                                                                                    <span
                                                                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                                    >
                                                                                        {item.name}
                                                                                    </span>
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
                                {alert && <span className='text-sm text-red-600'>🚫Please select a payment method</span>}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Amount</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <div className="w-full space-y-0.5">
                                    <input
                                        onChange={(e) => setAmount(e.target.value)}
                                        id="basic" name='amount' value={amount}
                                        type="number"
                                        placeholder="Enter amount to deposit"
                                        className="block w-full rounded-md py-2 px-2 border border-gray-200 text-sm outline-none transition focus:border focus:border-sky-600 focus:ring-sky-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                                    {alertx.visible === 'empty' && <span className='text-sm text-red-600'>{alertx.message}</span>}
                                    {alertx.visible === 'minimum' && <span className='text-sm text-red-600'>{alertx.message}</span>}
                                </div>
                            </dd>
                        </div>

                        <div className='py-2 flex justify-center'>
                            <button type="submit" className="text-gray-50 bg-sky-600 border border-gray-200 outline-none font-medium rounded-lg text-sm lg:px-10 px-4 py-0.5 lg:py-1.5 text-center inline-flex items-center">
                                Continue
                            </button>
                        </div>
                    </dl>
                </form>
            </div>
        </div>
    );
}
export default Deposit;