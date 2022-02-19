import { Link } from 'react-router-dom'

function DoctorsList({ Docs }) {
    return (
        <div className='z-10 h-full'>
            <h1 className='text-4xl dark:text-UiDarkText p-5'>List of all Doctors :</h1>
            <div className='flex flex-wrap  dark:bg-UiDarkBg text-gray-600 dark:text-UiDarkText mx-16' >
                {Docs.map(Doctor => (
                <div key={Doctor.Name}>
                    <div className='flex m-5 w-96 shadow-lg h-40 dark:bg-UiDarkNavigation'>
                        <img alt='Doctor ' src={Doctor.imageLink} className='w-40 h-40' />
                        <div>
                            <Link to={`/Doctors/${Doctor._id}`}><h1 className="text-3xl mx-4 dark:hover:text-green-500 hover:text-white">{Doctor.Name}</h1></Link>
                            <h2 className="text-xl mx-4 dark:hover:text-green-500 hover:text-white pt-3">{Doctor.Branche}</h2>
                            <h2 className='mx-4 dark:hover:text-green-500 hover:text-white pt-2'>{Doctor.Commune}</h2>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoctorsList;
