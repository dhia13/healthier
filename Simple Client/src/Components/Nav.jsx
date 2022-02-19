import { Link } from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {ChangeSearchWord} from '../features/Actions/actions'

// let navigate = useNavigate();
// function logout(){
//     navigate('/login')
//     localStorage.setItem('UserInfo', JSON.stringify(null))

// }

function Navigation() {
    const [Menu,setMenu]=useState({"Menu":'items-center md:flex hidden','open':false})
    const [search,setSearch]=useState()
    const [userMenu,setUserMenu]=useState('hidden')
    function toggleUserMenu(){
        (userMenu==='hidden')?setUserMenu(''):setUserMenu('hidden')
    }
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(ChangeSearchWord(search))
    })
    function OpenMenu(){
    setMenu({'Menu':'items-center md:flex ','open':true})
    }
    function CloseMenu(){
    setMenu({'Menu':'items-center md:flex hidden','open':false})
}

const LocalStorage=JSON.parse(window.localStorage.getItem('UserInfo'));
const logged = LocalStorage.Logged
const UserData = LocalStorage.UserData
    return(
            <nav className="dark:bg-UiDarkNavigation z-10">
                <div className="container px-6 py-3 mx-auto">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Link className="text-2xl font-bold transition-colors duration-200 transform dark:text-UiDarkText lg:text-3xl hover:text-green-500 dark:hover:text-green-500    " to="#">HEALTHY</Link>
                                {/* <!-- Search input on desktop screen --> */}
                                <div className="hidden mx-10 md:block">
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                        <input type="text" value={search} 
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-UiDarkText dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-green-300" placeholder="Search">
                                        </input>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Mobile menu button --> */}
                            <div className="flex md:hidden" onClick={Menu.open?CloseMenu:OpenMenu}>
                                <button type="button" className="text-gray-500 dark:text-UiDarkText hover:text-green-500 dark:hover:text-green-500 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                        <div className={Menu.Menu}>
                            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                                <Link className="my-1 text-sm text-white leading-5 transition-colors duration-200 transform dark:text-UiDarkText hover:text-green-500 dark:hover:text-green-400 hover:underline md:mx-4 md:my-0" to="/">Home</Link>
                                <Link className="my-1 text-sm leading-5 text-white transition-colors duration-200 transform dark:text-UiDarkText  hover:text-green-500 dark:hover:text-green-400 hover:underline md:mx-4 md:my-0" to='/doctors'>Doctors</Link>
                                <Link className="my-1 text-sm leading-5 text-white transition-colors duration-200 transform dark:text-UiDarkText hover:text-green-500 dark:hover:text-green-400 hover:underline md:mx-4 md:my-0" to="/pharmacies">Pharmacies</Link>
                                <Link className="my-1 text-sm leading-5 text-white transition-colors duration-200 transform dark:text-UiDarkText hover:text-green-500 dark:hover:text-green-400 hover:underline md:mx-4 md:my-0" to="/blogs">Blogs</Link>
                            </div>
                            {/* change login/signup with account avatar */}
                            <div>
                                <div className='relative'>
                                    {/* //userMenu */}
                                    <img src={UserData.ImageLink} className='w-8 rounded-r-full mx-2' onClick={toggleUserMenu}/>
                                    <div className={userMenu}>
                                    <div className='flex flex-col dark:bg-slate-500 absolute w-52 h-62 justify-center items-center right-0 top-5'>
                                    <Link to='/Profile' className='hover:bg-slate-600 w-full text-center'><p className='text-2xl font-extrabold my-5 '>Profile</p></Link>
                                        <p className='text-2xl font-extrabold my-5'>Settings</p>
                                     <Link to='/login' className='hover:bg-slate-600 w-full text-center'><p className='text-2xl font-extrabold my-5'>Logout</p></Link>   
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 md:hidden">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                    <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-UiDarkText dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-green-300" placeholder="Search">
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
    )
}

export default Navigation