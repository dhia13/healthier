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
            <div className='dark:bg-UiDarkBg'>
                <div className='fixed w-full z-30'>
                    <Navigation />
                </div>
                {/* Doctor Hero Section */}
                <div className='-translate-y-32 w-full dark:bg-ProfilebgBlack'>
                    {/* 1st Part */}
                    <div className='h-3/5 dark:bg-ProfilebgBlack w-4/6 mx-auto relative' >
                        {/* Cover Pic */}
                        <div className='w-full h-full'>
                            <img className='mx-auto object-cover w-full h-full rounded-md' src='https://www.irishtimes.com/polopoly_fs/1.2654014.1463688367!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'>
                            </img>
                        </div>
                    </div>
                    {/* 2nd Part*/}
                    <div className=' w-4/6 h-1/5 mx-auto dark:bg-ProfilebgBlack px-10 border-b-2 border-UiDarkText'>
                        {/* Profile Pic with edit picture Button */}
                        <div className='flex items-center justify-between '>
                            <div className='flex justify-center items-center'>
                                <div className='relative -translate-y-20'>
                                    <img src={doctor.imageLink} className='w-44 h-64 rounded-lg' />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='ml-5 font-extrabold text-3xl text-UiDarkBg dark:text-UiDarkText'>{doctor.Name}</p>
                                    <p className='ml-5 font-bold text-xl text-UiDarkBg dark:text-UiDarkText'>Followers : 300 </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Doctor About Section */}
                    <div className='dark:bg-UiDarkBg text-xl w-6/6 text-UiDarkBg dark:text-UiDarkText mx-auto'>
                        <div className='w-3/6 mx-auto'>
                            <p className='text-center my-2'>Informations</p>
                            <p className='my-2'>Branche : {doctor.Branche}</p>
                            <p className='my-2'>Commune : {doctor.Commune}</p>
                            <p className='my-2'>Adress : {doctor.Adress}</p>
                            <p className='my-2'>Age : {doctor.Age}</p>
                            <p className='my-2'>Studies : {doctor.Studies}</p>
                            <p className='my-2'>Phone Number : {doctor.PhoneNumber}</p>
                            <p className='mt-2'>GPS Location : {doctor.Location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Doctor
