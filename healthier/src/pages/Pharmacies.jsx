import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctors } from '../features/Actions/actions'
import Navigation from '../Components/Nav'

function Pharmacies() {
    const [loading, setLoading] = useState(false);
    const [Doctors, setDoctors] = useState([]);
    const dispatch = useDispatch()
    // load Data
    // Getting Data from redux Store
    const Data = useSelector(state => state.Reducers.Pharmacies)
    return (
        <div className='dark:bg-gray-900 '>
            <Navigation />
            {/* Doctors List */}
            {loading ?
                //loading 
                <div className='w-auto h-auto dark:bg-gray-900'>
                    <div className='flex'>
                    <Link to=''><h1 className='text-4xl dark:text-white ml-5 mt-8 hover:text-green-500'>List Doctors by Commune...</h1></Link>
                    <Link to=''><h1 className='text-4xl dark:text-white ml-10 mt-8 hover:text-green-500'>List Doctors by Branch...</h1></Link>
                    </div>
                    <h1 className='dark:text-4xl text-white pl-5 mt-8'>List of all Doctors :</h1>
                    <div className='flex flex-wrap m-16'>
                    <div className='flex bg-green-500 dark:bg-gray-600  m-5 w-96 shadow-lg h-40'>
                    <span className='w-40 h-40  bg-gray-500 border-1'/>
                        <div className=''>
                            <div className='w-48 h-6 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-36 h-4 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-24 h-4 ml-4 mt-4 bg-gray-500 '/>
                        </div>
                    </div>
                    <div className='flex bg-green-500 dark:bg-gray-600  m-5 w-96 shadow-lg h-40'>
                    <span className='w-40 h-40  bg-gray-500 border-1'/>
                        <div className=''>
                            <div className='w-48 h-6 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-36 h-4 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-24 h-4 ml-4 mt-4 bg-gray-500 '/>
                        </div>
                    </div>
                    <div className='flex bg-green-500 dark:bg-gray-600  m-5 w-96 shadow-lg h-40'>
                    <span className='w-40 h-40  bg-gray-500 border-1'/>
                        <div className=''>
                            <div className='w-48 h-6 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-36 h-4 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-24 h-4 ml-4 mt-4 bg-gray-500 '/>
                        </div>
                    </div>
                    <div className='flex bg-green-500 dark:bg-gray-600  m-5 w-96 shadow-lg h-40'>
                    <span className='w-40 h-40  bg-gray-500 border-1'/>
                        <div className=''>
                            <div className='w-48 h-6 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-36 h-4 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-24 h-4 ml-4 mt-4 bg-gray-500 '/>
                        </div>
                    </div>
                    <div className='flex bg-green-500 dark:bg-gray-600  m-5 w-96 shadow-lg h-40'>
                    <span className='w-40 h-40  bg-gray-500 border-1'/>
                        <div className=''>
                            <div className='w-48 h-6 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-36 h-4 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-24 h-4 ml-4 mt-4 bg-gray-500 '/>
                        </div>
                    </div>
                    <div className='flex bg-green-500 dark:bg-gray-600  m-5 w-96 shadow-lg h-40'>
                    <span className='w-40 h-40  bg-gray-500 border-1'/>
                        <div className=''>
                            <div className='w-48 h-6 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-36 h-4 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-24 h-4 ml-4 mt-4 bg-gray-500 '/>
                        </div>
                    </div>
                    <div className='flex bg-green-500 dark:bg-gray-600  m-5 w-96 shadow-lg h-40'>
                    <span className='w-40 h-40  bg-gray-500 border-1'/>
                        <div className=''>
                            <div className='w-48 h-6 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-36 h-4 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-24 h-4 ml-4 mt-4 bg-gray-500 '/>
                        </div>
                    </div>
                    <div className='flex bg-green-500 dark:bg-gray-600  m-5 w-96 shadow-lg h-40'>
                    <span className='w-40 h-40  bg-gray-500 border-1'/>
                        <div className=''>
                            <div className='w-48 h-6 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-36 h-4 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-24 h-4 ml-4 mt-4 bg-gray-500 '/>
                        </div>
                    </div>
                    <div className='flex bg-green-500 dark:bg-gray-600  m-5 w-96 shadow-lg h-40'>
                    <span className='w-40 h-40  bg-gray-500 border-1'/>
                        <div className=''>
                            <div className='w-48 h-6 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-36 h-4 ml-4 mt-4 bg-gray-500 '/>
                            <div className='w-24 h-4 ml-4 mt-4 bg-gray-500 '/>
                        </div>
                    </div>
                    </div>
                    
                    </div>    
                :
                //loaded
                <div>
                    <div className='flex'>
                    <Link to=''><h1 className='text-4xl dark:text-white ml-5 mt-8 hover:text-green-500'>List pharmacies by Commune...</h1></Link>
                    <Link to=''><h1 className='text-4xl dark:text-white ml-10 mt-8 hover:text-green-500'>List Pharmacies on Gard...</h1></Link>
                    </div>
                    <h1 className='dark:text-4xl text-white pl-5 mt-8'>List of all Pharmacies :</h1>
                    <div className='flex flex-wrap bg-blue-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 m-16' >
                        {Data.map(Pharmacie => {
                            return (
                                <div className='flex bg-green-500 dark:bg-gray-800 rounded-md m-5 w-96 shadow-lg h-40' key={Pharmacie._id}>
                                    <img src={Pharmacie.imageLink} className='w-40 h-40' />
                                    <div>
                                        <Link to={`/Doctors/${Pharmacie._id}`}><h1 className="text-3xl mx-4 hover:text-green-500">{Pharmacie.Name}</h1></Link>
                                        <h2 className="text-xl mx-4 hover:text-green-500">{Pharmacie.OpenHours}</h2>
                                        <h2 className='mx-4 hover:text-green-500'>{Pharmacie.Commune}</h2>
                                        <h3 className='mx-4 flex'> on Guard : {Pharmacie.OnGuard?<p> Yes</p>:<p> No</p>}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                }
            {/* pagination */}
            <div className="flex justify-center items-center bg-green-400 h-16 dark:bg-gray-600 ">
                <Link to='' className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-500 dark:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </Link>

                <Link to='' className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-500 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-green-500 hover:text-green-200 dark:hover:text-white">
                    1
                </Link>

                <Link to='' className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-500 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-green-500 hover:text-green-200 dark:hover:text-white">
                    2
                </Link>

                <Link to='' className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-500 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-green-500 hover:text-green-200 dark:hover:text-white">
                    ...
                </Link>

                <Link to='' className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-500 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-green-500 hover:text-green-200 dark:hover:text-white">
                    9
                </Link>

                <Link to='' className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-500 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-green-500 hover:text-green-200 dark:hover:text-white">
                    10
                </Link>

                <Link to='' className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-500 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-green-500 hover:text-green-200 dark:hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Pharmacies
