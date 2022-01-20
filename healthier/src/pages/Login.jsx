import { useState } from 'react'
import { useDispatch } from 'react-redux'

function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const dispatch = useDispatch()

    async function loginUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({Email,Password}),
        })
        // dispatch(Login(data))

        const data = await response.json()
        if (data.Email) {
            localStorage.setItem('token', data.accessToken)
            alert('Login successful')
            // window.location.href = '/doctors'
            dispatch(data)
        } else {
            alert('Please check your Email and Password')
        }
    }
    return (
        <div className='flex'>
            <div className='w-60 mx-10 mt-36 pt-10 border-3'>
                <form onSubmit={loginUser}>
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
                        <label htmlFor="Password" className="sr-only">Password</label>
                        <input
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="Password"
                            placeholder="Password"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                    </div>
                    <button type='submit' className="group relative mt-2 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip="evenodd" />
                            </svg>
                        </span>
                        Login
                    </button>
                </form>
            </div>
            <img alt='health' src='https://th.bing.com/th/id/R.2ed06c0f19a77db3cfdddbae75d47685?rik=x0Lhs6KAbsO8Og&pid=ImgRaw&r=0' className='h-screen w-screen' />

        </div>

    )
}
export default Login