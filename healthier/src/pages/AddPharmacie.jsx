import axios from 'axios';
import { useFormik } from 'formik'
import Navigation from "../Components/Nav"


function AddPharmacie() {
    const formik = useFormik({
        initialValues: {
          Name: '',
          imageLink:'',
          Adress:'',
          Commune:'',
          Location:'',
          PhoneNumber:''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          axios.post('http://localhost:8000/pharmacies',values)
        },
      });
    return (
      <div>
          <Navigation/>
        <div className='flex flex-col m-5'>
            <label htmlFor="Name">Name</label>
            <form onSubmit={formik.handleSubmit}>
                <input className='w-3/4 mr-10 px-4 py-2 text-base border border-gray-400 rounded outline-none' id="Name" name="Name" type="Name" onChange={formik.handleChange} value={formik.values.Name}/>
            </form>
        </div>
        <div className='flex flex-col m-5'>
            <label htmlFor="imageLink">ImgLink</label>
            <form onSubmit={formik.handleSubmit}>
                <input className='w-3/4 mr-10 px-4 py-2 text-base border border-gray-400 rounded outline-none' id="imageLink" name="imageLink" type="imageLink" onChange={formik.handleChange} value={formik.values.imageLink}/>
            </form>
        </div>
        <div className='flex flex-col m-5'>
            <label htmlFor="Address">Address</label>
            <form onSubmit={formik.handleSubmit}>
                <input className='w-3/4 mr-10 px-4 py-2 text-base border border-gray-400 rounded outline-none' id="Address" name="Address" type="Address" onChange={formik.handleChange} value={formik.values.Adress}/>
            </form>
        </div>
        <div className='flex flex-col m-5'>
            <label htmlFor="Commune">Commune</label>
            <form onSubmit={formik.handleSubmit}>
                <input className='w-3/4 mr-10 px-4 py-2 text-base border border-gray-400 rounded outline-none' id="Commune" name="Commune" type="Commune" onChange={formik.handleChange} value={formik.values.Commune}/>
            </form>
        </div>
        <div className='flex flex-col m-5'>
            <label htmlFor="Location">Location</label>
            <form onSubmit={formik.handleSubmit}>
                <input className='w-3/4 mr-10 px-4 py-2 text-base border border-gray-400 rounded outline-none' id="Location" name="Location" type="Location" onChange={formik.handleChange} value={formik.values.Location}/>
            </form>
        </div>
        <div className='flex flex-col m-5'>
            <label htmlFor="PhoneNumber">PhoneNumber</label>
            <form onSubmit={formik.handleSubmit}>
                <input className='w-3/4 mr-10 px-4 py-2 text-base border border-gray-400 rounded outline-none' id="PhoneNumber" name="PhoneNumber" type="PhoneNumber" onChange={formik.handleChange} value={formik.values.PhoneNumber}/>
            </form>
        </div>
      </div>
    )
}

export default AddPharmacie
