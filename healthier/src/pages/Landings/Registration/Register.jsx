import { useState,useEffect } from 'react'
import { RegisterAction } from '../../../features/Actions/UserActions'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
function Register() {
    let navigate = useNavigate();
    const Logged = useSelector(state => state.UserReducer.Parameters.Logged)
    const [Email, setEmail] = useState('')
    const [Firstname, setFirstname] = useState('')
    const [Lastname, setLastname] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [BirthDate, setbirthDate] = useState('')
    const UserData = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()
    async function registerUser(event) {
        event.preventDefault()
        const loadData = async () => {
            await dispatch(RegisterAction(Email, Password, Firstname,Lastname,BirthDate))
        }
        loadData(Email, Password, Firstname,Lastname,BirthDate)
        }
    useEffect(()=>{
        if (Logged) {
            localStorage.setItem('UserInfo', JSON.stringify(UserData))
            navigate('/doctors')
    }},[Logged])

    return (
        <div className='w-screen  h-screen absolute z-10 bg-gray-900'>
            <div className='flex text-center  justify-center z-4 items-center bg-[url(https://img.search.brave.com/HH3aOagNXk_Z-Gywvu0DbYbkA4rDCB_eGq0cnIXVo5M/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9vbmxp/bmVudXRyaXRpb24u/Y25zLnV0ZXhhcy5l/ZHUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMTEvR2V0dHlJ/bWFnZXMtODIzNzY3/MTI4X2hpZ2gtMS5q/cGc)] bg-no-repeat bg-cover w-screen h-screen'>
                <div className='w-96 z-4 bg-gradient-to-r from-blue-200 to-cyan-500 mt-36 pt-10 border-3 rounded-xl -translate-y-10 m-10'>
                    <form onSubmit={registerUser}>
                        <div className='pt-3'>
                            <label htmlFor="firstName" className="sr-only">First Name</label>
                            <input
                                value={Firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                type="firstName"
                                placeholder="First Name"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                        <div className='pt-3'>
                            <label htmlFor="lastName" className="sr-only">Last Name</label>
                            <input
                                value={Lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                type="lastName"
                                placeholder="Last Name"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                        <div className='pt-3'>
                            <label htmlFor="Email" className="sr-only">Email</label>
                            <input
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="Email"
                                placeholder="Email"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                        <div className='pt-3'>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="Password"
                                placeholder="Password"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                        <div className='pt-3'>
                            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                            <input
                                value={ConfirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="Password"
                                placeholder=" Confirm Password"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                        <div className='pt-3'>
                            <label htmlFor="BirthDate" className="sr-only">Birth Date</label>
                            <input
                                value={BirthDate}
                                onChange={(e) => setbirthDate(e.target.value)}
                                type="Date"
                                placeholder="BirthDate"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                        <button type='submit' className="group relative mt-2 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip="evenodd" />
                                </svg>
                            </span>
                            Register
                        </button>
                    </form>
                    <p>already have an account?<Link to='/Login' className='text-blue-800'>Login</Link></p>
                </div>
            </div>
        </div>

    )
}
export default Register