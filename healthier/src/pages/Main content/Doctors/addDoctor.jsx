import axios from 'axios';
import { useFormik } from 'formik'
import Navigation from "../../../Components/Nav"

function AddDoctor() {
    const formik = useFormik({
        initialValues: {
            Name: '',
            Age: '',
            Speciality: '',
            imageLink: '',
            Adress: '',
            Commune: '',
            Location: '',
            PhoneNumber: '',
            Studies: '',
        },
        handleSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            axios.post('http://localhost:8000/doctors', values)
        },
    });
    return (
        <div className=' m-auto justify-center align-center'>
            <Navigation />
            <div className='m-auto dark:bg-UiDarkBg bg-cyan-50 text-gray-600 dark:text-UiDarkText text-3xl align-middle justify-center'>
                <div className="relative">
                    <label hrmlfor="name-with-label" className="mx-5 dark:text-UiDarkText text-gray-700">
                        Name
                    </label>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="name-with-label" className="lg:w-1/4 mx-5 px-4 py-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="First Name" placeholder="First Name" />
                    </form>
                </div>
                <div className="relative">
                    <label htmlFor="name-with-label" className="mx-5s text-gray-700">
                        Email
                    </label>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="name-with-label" className=" lg:w-1/4 mx-5 px-4 py-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Email" placeholder="Email" />
                    </form>
                </div>
                <div className="relative">
                    <label htmlFor="with-indications" className="mx-5 text-gray-700">
                        Password
                        <span className="text-red-500 required-dot">
                            *
                        </span>
                    </label>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="with-indications" className="lg:w-1/4 mx-5 px-4 py-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" placeholder="Password" />
                    </form>
                </div>
                <div className="relative">
                    <label htmlFor="name-with-label" className="mx-5 dark:text-UiDarkText text-gray-700">
                        Adress
                    </label>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="name-with-label" className="lg:w-1/4 mx-5 px-4 py-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Adress" placeholder="Adress" />
                    </form>
                </div>
                <div className="relative">
                    <label htmlFor="name-with-label" className="mx-5 dark:text-UiDarkText text-gray-700">
                        Location
                    </label>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="name-with-label" className="lg:w-1/4 mx-5 px-4 py-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Location" placeholder="Location" />
                    </form>
                </div>
                <div className="relative">
                    <label htmlFor="name-with-label" className="mx-5 dark:text-UiDarkText text-gray-700">
                        Commune
                    </label>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="name-with-label" className="lg:w-1/4 mx-5 px-4 py-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Commune" placeholder="Commune" />
                    </form>
                </div>
                <div className="relative">
                    <label htmlFor="name-with-label" className="mx-5 dark:text-UiDarkText text-gray-700">
                        Speciality
                    </label>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="name-with-label" className="lg:w-1/4 mx-5 px-4 py-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Speciality" placeholder="Speciality" />
                    </form>
                </div>
                <div className="relative">
                    <label htmlFor="name-with-label" className="mx-5 dark:text-UiDarkText text-gray-700">
                        ImgLink
                    </label>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="name-with-label" className="lg:w-1/4 mx-5 px-4 py-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="ImgLink" placeholder="ImgLink" />
                    </form>
                </div>
                <div className="relative">
                    <label htmlFor="name-with-label" className="mx-5 dark:text-UiDarkText text-gray-700">
                        Phone Number
                    </label>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="name-with-label" className="lg:w-1/4 mx-5 px-4 py-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Phone Number" placeholder="Phone Number" />
                    </form>
                </div>
                <div className="relative">
                    <label htmlFor="name-with-label" className="mx-5 dark:text-UiDarkText text-gray-700">
                        Studies
                    </label>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="name-with-label" className="lg:w-1/4 mx-5 px-4 py-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Studies" placeholder="Studies" />
                    </form>
                </div>
                <div className="relative">
                    <label htmlFor="name-with-label" className="mx-5 dark:text-UiDarkText text-gray-700">
                        About Me
                    </label>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" id="name-with-label" className="lg:w-1/4 mx-5 px-4 py-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="AboutMe" placeholder="AboutMe" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddDoctor
