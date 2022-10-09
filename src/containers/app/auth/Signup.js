import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Message from '../../../components/Message'
import instance from '../../services/provider';


const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    usdtAddress: "",
    country: "",
    phoneNumber: "",
    password: "",
    referralCode: "",
    myCode: "",
  })

  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let code = '';
    let codeLenght = parseInt(8);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjkmnopqrstuvwxyz0123456789#';
    for (var i = 0; i < codeLenght; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setUserData({ myCode: code });
    // eslint-disable-next-line
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const { data } = await instance.post('/auth/register', userData)
      if (data) {
        setLoading(false)
        navigate('/signin')
      }
    } catch (error) {
      setLoading(false)
      setError(error.response.data && error.response.data.message ? error.response.data.message : error.message)
    }
  };

  return (
    <>
      <div className="py-24">
        <div className="flex flex-col max-w-md bg-white px-2 rounded-md text-gray-800 mx-auto">
          {error && <Message variant='warning'>{error}</Message>}
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign up</h1>
            <p className="text-sm text-gray-400">Create a new investment account</p>
          </div>
          <form noValidate="" action="" onSubmit={handleSubmit} className="w-full ng-untouched ng-pristine ng-valid">
            <div className="w-full flex lg:justify-between justify-center flex-wrap">
              <div>
                <label htmlFor="firstName" className="block text-sm">First name</label>
                <input type="text" name="firstName" value={userData.firstName} id="firstName" onChange={handleChange} placeholder="First name" className="w-full px-3 py-2 mb-4 border rounded-md outline-none border-gray-700 text-gray-800" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm">Last name</label>
                <input type="text" name="lastName" value={userData.lastName} id="lastName" onChange={handleChange} placeholder="Last name" className="w-full px-3 py-2 mb-4 border rounded-md outline-none border-gray-700 text-gray-800" />
              </div>
            </div>
            <div className="flex lg:justify-between justify-center flex-wrap">
              <div>
                <label htmlFor="email" className="block text-sm">Email</label>
                <input type="email" name="email" value={userData.email} id="email" onChange={handleChange} placeholder="Enter your email" className="w-full px-3 py-2 mb-4 border rounded-md outline-none border-gray-700 text-gray-800" />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm">Phone number</label>
                <input type="number" name="phoneNumber" value={userData.phoneNumber} id="phoneNumber" onChange={handleChange} placeholder="Phone number" className="w-full px-3 py-2 mb-4 border rounded-md outline-none border-gray-700 text-gray-800" />
              </div>
            </div>
            <div className="flex lg:justify-between justify-center flex-wrap">
              <div>
                <label htmlFor="country" className="block text-sm">Country</label>
                <input type="text" name="country" value={userData.country} id="country" onChange={handleChange} placeholder="Enter your country name" className="w-full px-3 py-2 mb-4 border rounded-md outline-none border-gray-700 text-gray-800" />
              </div>
              <div>
                <label htmlFor="usdtAddress" className="block text-sm">USDT Address</label>
                <input type="text" name="usdtAddress" value={userData.usdtAddress} id="usdtAddress" onChange={handleChange} placeholder="Enter your USDT address" className="w-full px-3 py-2 mb-4 border rounded-md outline-none border-gray-700 text-gray-800" />
              </div>
            </div>
            <div className="flex lg:justify-between justify-center flex-wrap">
              <div>
                <label htmlFor="password" className="flex justify-between  text-sm">
                  <span>Password</span>
                  <span onClick={() => setShow(!show)} className='text-sky-200 cursor-pointer'>View</span>
                </label>
                <input type={show ? 'text' : 'password'} name="password" value={userData.password} id="password" onChange={handleChange} placeholder="Password" className="w-full px-3 py-2 mb-4 border rounded-md outline-none border-gray-700 text-gray-800" />
              </div>
              <div>
                <label htmlFor="referralCode" className="block text-sm">Refferral</label>
                <input type="text" name="referralCode" value={userData.referralCode} id="referralCode" onChange={handleChange} placeholder="Enter referral code" className="w-full px-3 py-2 mb-4 border rounded-md outline-none border-gray-700 text-gray-800" />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full cursor-pointer select-none appearance-none items-center justify-center space-x-2 rounded-md bg-gradient-to-b from-sky-400 to-cyan-300 text-sky-900 px-8 py-3 text-sm font-medium  transition focus:outline-none disabled:pointer-events-none disabled:opacity-75">
                  {loading && <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
                    <path
                      className="fill-sky-400"
                      d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                    <path
                      className="fill-blue-100"
                      d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                  </svg>}
                  <span>Sign up</span>
                </button>
              </div>
              <p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
                <a rel="noopener noreferrer" href="/signin" className="hover:underline text-sky-900"> Signin</a>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup