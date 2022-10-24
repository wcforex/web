import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../../services/provider';

export default function NewPaymentMethod() {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [account, setAccount] = useState('')
    const [host, setHost] = useState('')
    const [minimum, setMinimum] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const navigate = useNavigate()

    const onCreate = async (e) => {
        e.preventDefault();
        setLoading(true)
        const payload = {
            name: name,
            account: account,
            host: host,
            minimum: minimum,
            description: description,
            status: status,
        }
        try {
            const { data } = await instance.post('/payment-method/create', payload)
            if (data) {
                setLoading(false)
                alert("Payment method created!!")
                navigate(-1)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    return (
        <div className='py-24 px-4 lg:px-5 xl:px-5'>
            <form className='lg:px-16 xl:px-16 px-4' onSubmit={onCreate}>
                <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 lg:gap-8 xl:gap-8'>
                    <input className='py-1.5 lg:py-2 xl:py-3 lg:my-0 my-2 border lg:text-sm text-xs outline-none px-2 rounded' type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <input className='py-1.5 lg:py-2 xl:py-3 lg:my-0 my-2 border lg:text-sm text-xs outline-none px-2 rounded' type="text" name="account" value={account} onChange={(e) => setAccount(e.target.value)} placeholder="Account" />
                    <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className='py-1.5 lg:py-2 xl:py-3 lg:my-0 my-2 border lg:text-sm text-xs outline-none px-2 rounded'>
                        <option value=''>Select status</option>
                        <option value='active'>Active</option>
                        <option value='inActive'>InActive</option>
                    </select>
                    <input className='py-1.5 lg:py-2 xl:py-3 lg:my-0 my-2 border lg:text-sm text-xs outline-none px-2 rounded' type="text" name="host" value={host} onChange={(e) => setHost(e.target.value)} placeholder="Host" />
                    <input className='py-1.5 lg:py-2 xl:py-3 lg:my-0 my-2 border lg:text-sm text-xs outline-none px-2 rounded' type="text" name="minimum" value={minimum} onChange={(e) => setMinimum(e.target.value)} placeholder="Minimum (USD)" />
                    <textarea rows="" cols="" className='py-1.5 lg:py-2 xl:py-3 lg:my-0 my-2 border lg:text-sm text-xs outline-none px-2 rounded' type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
                    <button className='lg:w-[8rem] inline-flex items-center justify-center py-1.5 lg:py-1 xl:py-3 border rounded-md bg-sky-700 text-white' type="submit">
                        {loading && <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
                            <path
                                className="fill-sky-400"
                                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                            <path
                                className="fill-blue-100"
                                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                        </svg>}
                        <span>Create</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
