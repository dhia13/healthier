import { GET_DOCTORS,LOGIN } from '../Types'

const initialState = {
    Parameters: {
        loading: true,
        Logged: false,
    },
    UserData: {
        DarkMode: true,
        Language: 'English',
        Firstname: '',
        Lastname:'',
        Birthdate: '42',
        Username: '',
        Email:'',
        isAdmin:false,
        ImageLink: '../../../public/image',
        Adress: '',
        PhoneNumber: '',
        Studies: '',
        AboutMe: ''
    },
    Doctors: [{
        Name: 'Habess Tbibe',
        Age: '42',
        Speciality: 'Ophtalmologue',
        ImageLink: '',
        Adress: 'said hamdin rue 423 ',
        Location: '4134,41341,414312,41',
        Commune: 'Said Hamdin',
        PhoneNumber: '0661664229',
        Studies: 'Ophtalmologui',
        AboutMe: 'loram  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    }, {
        Name: 'Habess Tbibe',
        Age: '42',
        Speciality: 'Ophtalmologue',
        ImageLink: '',
        Adress: 'said hamdin rue 423 ',
        Location: '4134,41341,414312,41',
        Commune: 'Said Hamdin',
        PhoneNumber: '0661664229',
        Studies: 'Ophtalmologui',
        AboutMe: 'loram  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    }, {
        Name: 'Habess Tbibe',
        Age: '42',
        Speciality: 'Ophtalmologue',
        ImageLink: '',
        Adress: 'said hamdin rue 423 ',
        Location: '4134,41341,414312,41',
        Commune: 'Said Hamdin',
        PhoneNumber: '0661664229',
        Studies: 'Ophtalmologui',
        AboutMe: 'loram  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    }, {
        Name: 'Habess Tbibe',
        Age: '42',
        Speciality: 'Ophtalmologue',
        ImageLink: '',
        Adress: 'said hamdin rue 423 ',
        Location: '4134,41341,414312,41',
        Commune: 'Said Hamdin',
        PhoneNumber: '0661664229',
        Studies: 'Ophtalmologui',
        AboutMe: 'loram  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    }, {
        Name: 'Habess Tbibe',
        Age: '42',
        Speciality: 'Ophtalmologue',
        ImageLink: '',
        Adress: 'said hamdin rue 423 ',
        Location: '4134,41341,414312,41',
        Commune: 'Said Hamdin',
        PhoneNumber: '0661664229',
        Studies: 'Ophtalmologui',
        AboutMe: 'loram  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    }, {
        Name: 'Habess Tbibe',
        Age: '42',
        Speciality: 'Ophtalmologue',
        ImageLink: '',
        Adress: 'said hamdin rue 423 ',
        Location: '4134,41341,414312,41',
        Commune: 'Said Hamdin',
        PhoneNumber: '0661664229',
        Studies: 'Ophtalmologui',
        AboutMe: 'loram  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    }, {
        Name: 'Habess Tbibe',
        Age: '42',
        Speciality: 'Ophtalmologue',
        ImageLink: '',
        Adress: 'said hamdin rue 423 ',
        Location: '4134,41341,414312,41',
        Commune: 'Said Hamdin',
        PhoneNumber: '0661664229',
        Studies: 'Ophtalmologui',
        AboutMe: 'loram  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    }, {
        Name: 'Habess Tbibe',
        Age: '42',
        Speciality: 'Ophtalmologue',
        ImageLink: '',
        Adress: 'said hamdin rue 423 ',
        Location: '4134,41341,414312,41',
        Commune: 'Said Hamdin',
        PhoneNumber: '0661664229',
        Studies: 'Ophtalmologui',
        AboutMe: 'loram  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    }, {
        Name: 'Habess Tbibe',
        Age: '42',
        Speciality: 'Ophtalmologue',
        ImageLink: '',
        Adress: 'said hamdin rue 423 ',
        Location: '4134,41341,414312,41',
        Commune: 'Said Hamdin',
        PhoneNumber: '0661664229',
        Studies: 'Ophtalmologui',
        AboutMe: 'loram  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    }],
    Pharmacies: [{
        Name: 'Zigadi',
        Commune: 'Ain Benian',
        Adress: 'Ain Benian city 780 rue 323',
        ImageLink: '.......',
        Location: '432432,43242,4324',
        OnGuard: true,
        OpenHours: '7/7 from 8:00 to 22:00'
    }, {
        Name: 'Zigadi',
        Commune: 'Ain Benian',
        Adress: 'Ain Benian city 780 rue 323',
        ImageLink: '.......',
        Location: '432432,43242,4324',
        OnGuard: true,
        OpenHours: '7/7 from 8:00 to 22:00'
    }, {
        Name: 'Zigadi',
        Commune: 'Ain Benian',
        Adress: 'Ain Benian city 780 rue 323',
        ImageLink: '.......',
        Location: '432432,43242,4324',
        OnGuard: true,
        OpenHours: '7/7 from 8:00 to 22:00'
    }, {
        Name: 'Zigadi',
        Commune: 'Ain Benian',
        Adress: 'Ain Benian city 780 rue 323',
        ImageLink: '.......',
        Location: '432432,43242,4324',
        OnGuard: true,
        OpenHours: '7/7 from 8:00 to 22:00'
    }, {
        Name: 'Zigadi',
        Commune: 'Ain Benian',
        Adress: 'Ain Benian city 780 rue 323',
        ImageLink: '.......',
        Location: '432432,43242,4324',
        OnGuard: true,
        OpenHours: '7/7 from 8:00 to 22:00'
    }, {
        Name: 'Zigadi',
        Commune: 'Ain Benian',
        Adress: 'Ain Benian city 780 rue 323',
        ImageLink: '.......',
        Location: '432432,43242,4324',
        OnGuard: true,
        OpenHours: '7/7 from 8:00 to 22:00'
    }, {
        Name: 'Zigadi',
        Commune: 'Ain Benian',
        Adress: 'Ain Benian city 780 rue 323',
        ImageLink: '.......',
        Location: '432432,43242,4324',
        OnGuard: true,
        OpenHours: '7/7 from 8:00 to 22:00'
    }, {
        Name: 'Zigadi',
        Commune: 'Ain Benian',
        Adress: 'Ain Benian city 780 rue 323',
        ImageLink: '.......',
        Location: '432432,43242,4324',
        OnGuard: true,
        OpenHours: '7/7 from 8:00 to 22:00'
    }, {
        Name: 'Zigadi',
        Commune: 'Ain Benian',
        Adress: 'Ain Benian city 780 rue 323',
        ImageLink: '.......',
        Location: '432432,43242,4324',
        OnGuard: true,
        OpenHours: '7/7 from 8:00 to 22:00'
    }],
    Branches: [{
        Name: 'Anesthesiologist',
        SvgPath:`<path class="cls-1" d="M500.75,83.65,428.34,11.25A38.4,38.4,0,0,0,374,65.55l9.05,9L319.73,138l-54.3-54.31a12.8,12.8,0,0,0-18.1,18.1l18.1,18.1L247.3,138l-18,18-18.11,18.11-90.5,90.5-18.11,18.11L70.85,314.43a31.91,31.91,0,0,0,0,45.25l4.53,4.53-4.55,4.55a32,32,0,0,0,0,45.25l4.53,4.53L3.75,490.15a12.8,12.8,0,1,0,18.1,18.1l71.61-71.61L98,441.17a32,32,0,0,0,45.26,0l4.55-4.55,4.53,4.53a32,32,0,0,0,45.25,0L392.14,246.57l18.1,18.1a12.8,12.8,0,1,0,18.1-18.1L374,192.27l63.36-63.36,9.05,9.05a38.4,38.4,0,1,0,54.31-54.31ZM179.44,423.07a6.4,6.4,0,0,1-9.05,0L88.93,341.61a6.41,6.41,0,0,1,0-9.05L102.52,319l29.25,29.25a12.75,12.75,0,0,0,9,3.78,12.83,12.83,0,0,0,9.09-21.89l-29.26-29.26,18.1-18.1,18.07,18.1a12.81,12.81,0,1,0,18.11-18.11l-18.1-18.07,23-23,90.51,90.51Z"/>`
    },
    {
        Name: 'Nephrologist',
        SvgPath: `"M53.925,14.63C48.474,4.597,39.585-0.799,29.83,0.096C23.153,0.711,18.717,2.98,16.65,6.844
c-3.506,6.548,1.196,15.104,1.398,15.465l0.281,0.505l0.583,0.006c0.015,0,0.241,0.009,0.61,0.076
c-0.842,1.475-1.296,3.155-1.296,4.865v9.881c0,8.718-7.178,15.81-16,15.81c-0.553,0-1,0.442-1,0.988c0,0.546,0.447,0.988,1,0.988
c9.766,0,17.724-7.731,17.976-17.322c2.421-2.239,5.685-3.211,8.943-2.692c0.418,2.051,0.701,4.422,0.778,7.195
c0.437,15.606,8.711,16.819,11.236,16.819c0.396,0,0.688-0.029,0.831-0.047l0.095,0.001c4.706-0.001,8.326-1.472,10.758-4.373
c4.365-5.208,3.425-13.284,3.13-15.18C59.581,34.008,58.747,23.506,53.925,14.63z M40.226,39.081h-3v2.964
c0,0.546-0.447,0.988-1,0.988s-1-0.442-1-0.988v-3.593c-1.531-1.475-3.342-2.435-5.232-2.889c0.542,0.13,1.076-0.197,1.207-0.727
c0.131-0.531-0.199-1.065-0.735-1.194c-2.991-0.717-6.035-0.329-8.675,0.988c1.413-2.455,3.067-4.271,4.951-5.392
c0.474-0.281,0.626-0.889,0.341-1.356c-0.285-0.468-0.9-0.62-1.372-0.337c-2.101,1.25-3.932,3.211-5.484,5.82V27.76
c0-1.833,0.614-3.551,1.776-4.972c0.348-0.425,0.281-1.047-0.148-1.39c-0.386-0.309-0.922-0.269-1.281,0.044
c1.633-1.931,3.982-3.251,6.653-3.514v-3.015c0-0.546,0.447-0.988,1-0.988s1,0.442,1,0.988v2.964h3c0.553,0,1,0.442,1,0.988
c0,0.546-0.447,0.988-1,0.988h-4c-2.835,0-5.324,1.469-6.746,3.673c1.329,0.611,2.979,1.754,4.471,3.873
c1.121-0.628,2.195-0.992,3.15-1.187c2.179-0.444,4.164-0.083,5.405,0.579l2.244-2.217c0.391-0.386,1.023-0.386,1.414,0
s0.391,1.011,0,1.397l-2.121,2.096l2.121,2.097c0.391,0.386,0.391,1.011,0,1.397c-0.195,0.193-0.451,0.289-0.707,0.289
s-0.512-0.096-0.707-0.289l-2.829-2.796c-0.445-0.439-2.198-1.069-4.416-0.618c-0.763,0.155-1.62,0.449-2.519,0.947
c0.624,1.175,1.19,2.569,1.658,4.226c2.901,0.274,5.752,1.534,8.051,3.781h3.53c0.553,0,1,0.442,1,0.988
C41.226,38.639,40.779,39.081,40.226,39.081z M52.409,32.731c-0.01,0.02-0.01,0.043-0.021,0.063
c-0.06,0.103-0.139,0.185-0.226,0.256c-0.021,0.018-0.043,0.033-0.066,0.049c-0.095,0.067-0.197,0.121-0.309,0.151
c-0.003,0.001-0.004,0.003-0.007,0.003c-4.793,1.269-7.647,6.156-6.363,10.893c0.143,0.527-0.174,1.069-0.707,1.21
c-0.087,0.023-0.174,0.034-0.26,0.034c-0.441,0-0.846-0.29-0.965-0.732c-1.396-5.146,1.211-10.429,5.921-12.63
c-1.696-1.41-2.915-3.274-3.493-5.404c-0.579-2.134-0.464-4.355,0.295-6.416c-0.307,0.025-0.613,0.06-0.92,0.06
c-1.905,0-3.786-0.493-5.479-1.459c-2.543-1.451-4.362-3.796-5.123-6.602c-0.143-0.527,0.174-1.069,0.707-1.21
c0.534-0.142,1.083,0.172,1.225,0.699c0.622,2.297,2.111,4.215,4.191,5.402c2.08,1.187,4.502,1.502,6.829,0.887
c0.127-0.034,0.26-0.042,0.392-0.025c0.262,0.034,0.5,0.17,0.661,0.378c0.161,0.208,0.232,0.471,0.198,0.731
c-0.014,0.107-0.055,0.206-0.103,0.301c-0.01,0.02-0.01,0.043-0.021,0.063c-1.203,2.058-1.53,4.431-0.92,6.681
c0.61,2.249,2.094,4.142,4.176,5.331h0l0,0c0.003,0.001,0.004,0.004,0.006,0.006c0.109,0.064,0.207,0.148,0.286,0.249
c0.162,0.208,0.233,0.472,0.198,0.732C52.497,32.537,52.457,32.636,52.409,32.731z"`},
    {
        Name: 'Dentist',
        SvgPath: `"M447.337,42.461C420.484,15.524,384.903,0.448,347.146,0.01c-26.613-0.311-52.627,6.678-75.331,20.208
        c-9.756,5.811-21.872,5.811-31.627,0C217.483,6.688,191.45-0.284,164.855,0.009C127.098,0.448,91.516,15.524,64.662,42.46
        c-26.852,26.935-41.82,62.564-42.145,100.323c-0.273,31.694,9.555,61.843,28.422,87.188
        c19.022,25.554,32.002,56.391,37.537,89.179c8.402,49.771,20.338,95.454,33.61,128.635C139.371,490.995,158.015,512,179.082,512
        c7.884,0,15.217-3.192,21.208-9.231c20.36-20.523,28.299-74.563,27.404-186.527c-0.186-23.117,10.126-44.702,28.306-59.269
        c18.177,14.56,28.491,36.148,28.306,59.269c-0.896,111.963,7.044,166.003,27.404,186.527c5.991,6.039,13.325,9.231,21.208,9.231
        c21.067,0,39.712-21.005,56.995-64.214c13.272-33.182,25.208-78.865,33.609-128.635c5.535-32.787,18.516-63.625,37.537-89.178
        c18.867-25.345,28.695-55.495,28.422-87.188C489.157,105.026,474.19,69.397,447.337,42.461z M444.697,217.792
        c-20.941,28.13-35.218,62.006-41.287,97.962c-19.28,114.218-50.708,175.848-70.492,175.848c-1.654,0-3.914-0.364-6.727-3.199
        c-22.68-22.863-21.813-131.211-21.487-171.998c0.237-29.521-12.959-57.057-36.192-75.544l-0.344-0.274
        c-3.582-2.871-7.875-4.306-12.168-4.306s-8.587,1.436-12.171,4.307l-0.332,0.265c-23.242,18.493-36.437,46.031-36.201,75.552
        c0.325,40.789,1.191,149.136-21.489,171.998c-2.813,2.836-5.072,3.2-6.726,3.2c-19.782,0-51.21-61.63-70.492-175.846
        c-6.07-35.957-20.346-69.832-41.287-97.963c-16.188-21.748-24.621-47.624-24.387-74.833
        c0.576-66.8,55.385-121.776,122.175-122.551c22.815-0.261,45.176,5.729,64.654,17.335c16.194,9.648,36.314,9.649,52.51,0
        c19.476-11.606,41.848-17.615,64.654-17.335c66.793,0.775,121.602,55.752,122.176,122.553
        C469.319,170.168,460.885,196.045,444.697,217.792z"`
    }, {
        Name: 'General practitioner',
        SvgPath: ``
    }, {
        Name: 'ENT Specialist',
        SvgPath: `M745.9,302.7c-54-16.1-112.4,51.1-119.7,58.4c-5.8,5.8-4.4,16.1,1.5,20.4c5.8,5.8,16.1,4.4,20.4-1.5c13.1-16.1,58.4-58.4,89-49.6c23.3,7.3,37.9,40.9,46.7,100.7c14.6,122.6-113.8,143-119.7,144.5c-7.3,1.5-13.1,8.8-11.7,16.1c1.5,7.3,7.3,13.1,14.6,13.1h1.5c1.5,0,162-26.3,143-176.6C804.3,353.8,782.4,314.4,745.9,302.7z"/><path d="M684.7,34.2C562.1-5.2,439.5,3.5,324.2,60.4c-81.7,39.4-128.4,106.5-143,194.1c-5.8,36.5-7.3,73-7.3,109.4c0,48.2-13.1,89-45.2,125.5c-8.8,10.2-17.5,21.9-24.8,33.6c-11.7,21.9-4.4,40.9,17.5,49.6c10.2,2.9,20.4,4.4,30.6,7.3c8.8,2.9,19,5.8,30.6,8.8c-16.1,21.9-13.1,42.3,0,62.7c2.9,4.4,2.9,10.2,1.5,14.6c-8.8,19-1.5,35,13.1,48.2c13.1,11.7,17.5,26.3,16.1,42.3c0,2.9,0,7.3,0,10.2c2.9,49.6,26.3,67.1,74.4,59.8c27.7-4.4,54-8.8,81.7-13.1c26.3-4.4,39.4,1.5,39.4,20.4c0,2.9-1.5,7.3-1.5,11.7c-4.4,16.1-7.3,36.5-7.3,37.9v1.5c2.9,29.2,68.6,61.3,134.3,80.3c0,0,109.4,24.8,132.8,24.8c2.9,0,4.4-1.5,5.8-1.5c49.6-4.4,70-59.8,74.4-74.4l0,0c2.9-14.6,4.4-20.4,4.4-27.7c1.5-121.1,7.3-154.7,75.9-309.4c20.4-48.2,43.8-96.3,58.4-145.9C940,260.4,849.6,86.7,684.7,34.2z M433.7,879.1c0-4.4,1.5-14.6,2.9-24.8l2.9-8.8c1.5-7.3,1.5-16.1-2.9-24.8l0,0c-4.4-30.6-17.5-39.4-52.5-36.5c-30.6,2.9-61.3,7.3-91.9,13.1c-40.9,7.3-48.2-4.4-48.2-40.9c0-24.8-5.8-46.7-26.3-64.2c-4.4-2.9-7.3-13.1-5.8-17.5c5.8-16.1,2.9-29.2-5.8-42.3c-5.8-8.8-5.8-16.1,0-26.3c8.8-13.1,7.3-29.2-7.3-37.9c-4.4-2.9-7.3-4.4-11.7-5.8c103.6-70,185.3-87.6,243.7-52.5c118.2,70,113.8,335.6,109.4,418.8C486.2,912.7,438,892.2,433.7,879.1z M856.8,445.7c-20.4,56.9-48.2,112.4-71.5,167.8c-21.9,49.6-43.8,99.2-49.6,154.7c-4.4,37.9-2.9,75.9-5.8,113.8c-1.5,10.2-2.9,19-5.8,29.2c-2.9,11.7-16.1,39.4-48.2,42.3c-19,1.5-54-4.4-91.9-13.1c4.4-70,24.8-375,99.2-434.9c39.4-32.1,55.5-55.5,49.6-71.5c-4.4-11.7-17.5-16.1-24.8-17.5h-2.9l-2.9,2.9c-94.9,89-213.1,51.1-274.3,21.9c-46.7-23.3-100.7-23.3-143,1.5c-68.6,39.4-108,110.9-109.4,113.8l-1.5,2.9c-4.4-1.5-8.8-2.9-13.1-4.4c-10.2-2.9-20.4-4.4-36.5-8.8c10.2-14.6,16.1-24.8,24.8-33.6c40.9-45.2,56.9-97.8,54-157.6c-1.5-29.2,1.5-59.8,5.8-89c13.1-87.6,59.8-151.8,141.5-186.8C441,40,535.8,29.8,633.6,48.8c62.7,11.7,119.7,39.4,164.9,87.6C880.2,225.3,896.2,330.4,856.8,445.7z`
    }, {
        Name: 'Pediatrician',
        SvgPath: ``
    }, {
        Name: 'Urologist',
        SvgPath: ``
    }, {
        Name: 'Optometrist',
        SvgPath: ``
    }, {
        Name: 'Radiologist',
        SvgPath: ``
    }]
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_DOCTORS:
            return {
                ...state,
                Doctors: action.payload,
                loading: false

            }
        case LOGIN:
            return{
                ...state,
                UserData:action.payload,
                loading:false
                }
        default: return state
    }

}