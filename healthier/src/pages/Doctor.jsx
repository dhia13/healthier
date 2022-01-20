import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Navigation from "../Components/Nav"
import { Link } from 'react-router-dom';
import axios from 'axios';
const Doctor=()=> {
    const Navigate=useNavigate()
    const [loading, setLoading] = useState(false);
    const [Doctor, setDoctor] = useState([]);
    const {id}=useParams()
    useEffect(() => {
        
        const loadDoctors = async () => {
  
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);
  
            // Await make wait until that 
            // promise settles and return its reult
            const response = await axios.get(
            `http://localhost:8000/Doctors/${id}`);

  
            // After fetching data stored it in posts state.
            setDoctor(response.data.doctor);
  
            // Closed the loading page
            setLoading(false);
        }
  
        // Call the function
        loadDoctors();
    }, []);
        

    return (
        <div>{loading?
        <div><Navigation/>
        <p>Loading</p></div>
        :<div><Navigation/><div className='bg-green-200 dark:bg-gray-400 rounded-lg m-5 h-full'>
        <div className='flex items-center'>
            <img src={Doctor.ImageLink} className='rounded w-20 h-30'></img>
            <h1 className='text-2xl font-bold px-5'>Dr. {Doctor.Name}</h1>
        </div>
        <h2 className='text-xl p-7 font-medium'>Speciality : {Doctor.Speciality}</h2>
        <h2 className='text-xl p-7 font-medium'>Studies : {Doctor.Studies} </h2>
        <div>
            <h2 className='text-xl p-7 font-medium'>Location : {Doctor.Adress}</h2>
            <div className="flex space-x-2 justify-center">
                <button type="button"
                className="inline-block px-6 py-2.5 bg-green-300 text-white font-medium text-xs 
                leading-tight uppercase rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-500 
                focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition 
                duration-150 ease-in-out" >Open in Google Maps</button>
            </div>
        </div>
        <div>
            <h2 className='text-xl p-7 font-medium'>Availability:</h2>
        </div>
        <div>
            <h2 className='text-xl p-7 font-medium'>Phone: {Doctor.PhoneNumber}</h2>
            <div className="flex space-x-2 justify-center">
                <button type="button" className="inline-block px-6 py-2.5 bg-green-300 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 mb-3 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out">Call</button>
            </div>
        </div>
    </div></div>}</div>
        
        

    )
}

export default Doctor
