import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Navigation from "../../../Components/Nav"
import { Link } from 'react-router-dom';
import axios from 'axios';
const Doctor = () => {
    const [loading, setLoading] = useState(false);
    const [doctor, setDoctor] = useState([]);
    const { id } = useParams()
    useEffect(() => {

        const loadDoctors = async () => {

            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);

            // Await make wait until that 
            // promise settles and return its reult
            const response = await axios.get(
                `http://localhost:8000/Doctor/${id}`);
            console.log(response)


            // After fetching data stored it in posts state.
            setDoctor(response.data.doctor);

            // Closed the loading page
            setLoading(false);
        }

        // Call the function
        loadDoctors();
    }, []);
    console.log(doctor)
    return (
        <div>
            <Navigation />
            <div className="dark:bg-UiDarkBg block">
                <div className="max-w-2xl mx-auto">
                    <div className="w-full">
                        <div className="w-full h-72 rounded-t-lg">
                            <img className='h-72 w-full' src='https://www.contractorcalculator.co.uk/common/images/doctor-heart.jpg' /></div>
                        <div className="absolute -mt-20 ml-5 flex">
                            <div className="border border-gray500 h-36 w-36 rounded-lg flex justify-center items-center">
                                <img className='h-36 w-36 rounded-lg border-gray500 shadow-md' src={doctor.imageLink} />
                            </div>
                            <div className="my-24 border border-gray500 h-12 w-64 dark:text-UiDarkText"><p className='ml-2 text-4xl'>{doctor.Name}</p></div>
                        </div>

                    </div>
                    <div className="border border-gray500 rounded-b-lg p-5 pt-20 flex flex-col">
                        <div className="mb-1 border border-gray500 h-7 w-auto dark:text-UiDarkText"><p className='ml-2'>Branche : {doctor.Branche}</p></div>
                        <div className="mb-1 border border-gray500 h-7 w-auto dark:text-UiDarkText"><p className='ml-2'>Commune : {doctor.Commune}</p></div>
                        <div className="mb-1 border border-gray500 h-7 w-auto dark:text-UiDarkText"><p className='ml-2'>Adress : {doctor.Adress}</p></div>
                        <div className="mb-1 border border-gray500 h-7 w-auto dark:text-UiDarkText"><p className='ml-2'>Studies : {doctor.Studies}</p></div>
                        <div className="mb-1 border border-gray500 h-7 w-auto dark:text-UiDarkText"><p className='ml-2'>Phone Number : {doctor.PhoneNumber}</p></div>
                        <div className="mb-1 border border-gray500 h-7 w-auto dark:text-UiDarkText"><p className='ml-2'>Location : {doctor.Location}</p></div>
                    </div>
                    <div className="py-5 break-all bbcode">
                    <div className="mb-1 border border-gray500 h-7 w-32 dark:text-UiDarkText"><p className='ml-4'>About</p></div>
                        <div className="mb-1 border border-gray500 w-full h-40"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Doctor
