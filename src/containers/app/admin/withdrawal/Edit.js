import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import instance from '../../../services/provider';

export default function EditWithdrawal() {
  const location = useLocation()
  const withdrawal = location.state
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [state, setState] = useState(withdrawal.pg.status)

  const fetchData = async () => {
    try {
      const { data } = await instance.get(`/user/${withdrawal.pg.userId}`);
      if (data) {
        setUser(data.user)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  const onUpdate = async () => {
    setLoading(true)
    const payload = {
      status: state
    }
    try {
      const { data } = await instance.patch(`/withdrawal/${withdrawal.pg._id}`, payload)
      if (data) {
        setLoading(false)
        alert("Withdrawal was successfully updated.")
        navigate(-1)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <div className='py-24 px-4 lg:px-5 xl:px-5'>
      <div className='w-full flex justify-center'>
        <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-800 dark:text-gray-400">{user ? user.firstName + ' ' + user.lastName : 'loading...'}</span>
            <span className="px-3 py-1 text-xs text-blue-800 bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">Wallet {user ? `${user.wallet}.00` : 'loading...'}</span>
          </div>

          <div>
            <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
              <span>Payment method:</span>
              <span className="mx-2 font-medium">{withdrawal.pg.paymentMethod}</span>
            </div>
            <div className="flex flex-col items-center mt-2 text-gray-700 dark:text-gray-200">
              <span>Payment Address:</span>
              <span className="mx-2 font-medium">{withdrawal.pg.account}</span>
            </div>

            <div className="mt-4">
              <div className='flex items-center justify-start flex-wrap'>
                <div className=''>
                  <label htmlFor="state" className='text-sm lg:my-0.5 xl:my-1 my-1'>Status</label>
                  <select name='state' value={state} onChange={(e) => setState(e.target.value)} className='block border outline-none rounded py-1 px-2 text-sm'>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
                <button type="button" onClick={onUpdate} className=' inline-flex justify-center text-sm lg:mx-3 xl:mx-3 mx-2 mt-6 px-3 py-1 bg-sky-600 text-white rounded-md'>
                  {loading && <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
                    <path
                      className="fill-sky-400"
                      d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                    <path
                      className="fill-blue-100"
                      d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                  </svg>}
                  <span className='mx-0.5'>Update</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
