import Navigation from '../../Components/Nav'
import { useSelector } from 'react-redux'
import UserImg from '../../Assets/User-avatar.svg'

function Profile() {
    const MyData = useSelector(state => state.UserReducer.UserData)
    console.log(MyData)
    return (
        <div>
            <div className='fixed w-full z-30'>
                <Navigation />
            </div>
            {/* Profile Hero Section */}
            <div className='-translate-y-32 w-full dark:bg-ProfilebgBlack'>
                {/* 1st Part */}
                <div className='h-3/5 dark:bg-ProfilebgBlack w-4/6 mx-auto relative' >
                    {/* Cover Pic */}
                    <div className='w-full h-full'>
                        <img className='mx-auto object-cover w-full h-full rounded-md' src='https://scontent.falg7-1.fna.fbcdn.net/v/t1.6435-9/167915947_3059223627647916_4207159454825372268_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=97U9BTqcILsAX_sJxk0&_nc_ht=scontent.falg7-1.fna&oh=00_AT8N4FLJsutmyC5SycM2HPIavtSIEOd9c43eyx-f-bI69Q&oe=623824C9'>
                        </img>
                    </div>
                    <div className='absolute right-10 bottom-3 '>
                        <button className="bg-UiDarkText  hover:bg-gray500 text-sm font-semibold py-1 px-2 rounded flex">
                            <div className='w-5 h-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 297 297" >
                                    <g>
                                        <path d="M269.542,35.892c0-4.956-4.032-8.988-8.988-8.988h-77.665c-4.956,0-8.988,4.032-8.988,8.988v14.541h95.642V35.892z" />
                                        <path d="M93.584,233.486c36.462,0,66.126-29.664,66.126-66.126s-29.664-66.126-66.126-66.126s-66.126,29.664-66.126,66.126
		S57.122,233.486,93.584,233.486z M61.108,134.884c17.907-17.905,47.044-17.905,64.951,0c8.674,8.675,13.452,20.209,13.452,32.476
		s-4.777,23.801-13.453,32.475c-8.673,8.673-20.207,13.451-32.474,13.451s-23.801-4.777-32.475-13.451
		c-8.674-8.675-13.452-20.209-13.452-32.475C47.656,155.093,52.434,143.559,61.108,134.884z"/>
                                        <path d="M173.901,167.36c0,17.902-5.892,34.451-15.831,47.82H297V119.54H158.069C168.009,132.909,173.901,149.458,173.901,167.36z"
                                        />
                                        <path d="M13.267,167.36c0-17.902,5.892-34.452,15.832-47.821H0v95.641h29.098C19.158,201.811,13.267,185.262,13.267,167.36z" />
                                        <path d="M116.024,189.8c5.995-5.994,9.296-13.963,9.296-22.44c0-8.477-3.301-16.447-9.296-22.441
		c-5.994-5.995-13.962-9.295-22.44-9.295s-16.446,3.3-22.44,9.295c-5.995,5.994-9.296,13.963-9.296,22.441
		c0,8.476,3.301,16.446,9.296,22.44C83.517,202.174,103.65,202.174,116.024,189.8z"/>
                                        <path d="M280.655,64.623H16.345C7.332,64.623,0,71.955,0,80.968v24.38h42.598c13.878-11.431,31.644-18.305,50.985-18.305
		s37.107,6.874,50.985,18.305H297v-24.38C297,71.955,289.668,64.623,280.655,64.623z M252.508,92.359h-54.916
		c-3.919,0-7.096-3.177-7.096-7.096s3.177-7.096,7.096-7.096h54.916c3.919,0,7.096,3.177,7.096,7.096S256.427,92.359,252.508,92.359
		z"/>
                                        <path d="M93.584,247.678c-19.342,0-37.108-6.874-50.987-18.306H0v24.38c0,9.013,7.332,16.345,16.345,16.345h264.31
		c9.013,0,16.345-7.332,16.345-16.345v-24.38H144.57C130.692,240.803,112.926,247.678,93.584,247.678z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className='mx-2'>
                                Upload Cover Picture
                            </div>
                        </button>
                    </div>
                </div>
                {/* 2nd Part*/}
                <div className=' w-4/6 h-1/5 mx-auto dark:bg-ProfilebgBlack px-10 border-b border-x-gray500 '>
                    {/* Profile Pic with edit picture Button */}
                    <div className='flex items-center justify-between'>
                        <div className='flex justify-center items-center'>
                                <div className='relative -translate-y-4'>
                                    <img src={MyData.ImageLink?MyData.ImageLink:UserImg} className='w-36 h-36 rounded-full border-UiDarkBg border' />
                                    <div className='absolute h-10 w-10 bottom-2 -right-2  bg-buttonDark hover:bg-gray500 cursor-pointer rounded-full' >
                                        <svg className='w-5 h-5 translate-x-1/2 translate-y-1/2 text-UiDarkText' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 297 297" >
                                            <g>
                                                <path d="M269.542,35.892c0-4.956-4.032-8.988-8.988-8.988h-77.665c-4.956,0-8.988,4.032-8.988,8.988v14.541h95.642V35.892z" />
                                                <path d="M93.584,233.486c36.462,0,66.126-29.664,66.126-66.126s-29.664-66.126-66.126-66.126s-66.126,29.664-66.126,66.126
		S57.122,233.486,93.584,233.486z M61.108,134.884c17.907-17.905,47.044-17.905,64.951,0c8.674,8.675,13.452,20.209,13.452,32.476
		s-4.777,23.801-13.453,32.475c-8.673,8.673-20.207,13.451-32.474,13.451s-23.801-4.777-32.475-13.451
		c-8.674-8.675-13.452-20.209-13.452-32.475C47.656,155.093,52.434,143.559,61.108,134.884z"/>
                                                <path d="M173.901,167.36c0,17.902-5.892,34.451-15.831,47.82H297V119.54H158.069C168.009,132.909,173.901,149.458,173.901,167.36z"
                                                />
                                                <path d="M13.267,167.36c0-17.902,5.892-34.452,15.832-47.821H0v95.641h29.098C19.158,201.811,13.267,185.262,13.267,167.36z" />
                                                <path d="M116.024,189.8c5.995-5.994,9.296-13.963,9.296-22.44c0-8.477-3.301-16.447-9.296-22.441
		c-5.994-5.995-13.962-9.295-22.44-9.295s-16.446,3.3-22.44,9.295c-5.995,5.994-9.296,13.963-9.296,22.441
		c0,8.476,3.301,16.446,9.296,22.44C83.517,202.174,103.65,202.174,116.024,189.8z"/>
                                                <path d="M280.655,64.623H16.345C7.332,64.623,0,71.955,0,80.968v24.38h42.598c13.878-11.431,31.644-18.305,50.985-18.305
		s37.107,6.874,50.985,18.305H297v-24.38C297,71.955,289.668,64.623,280.655,64.623z M252.508,92.359h-54.916
		c-3.919,0-7.096-3.177-7.096-7.096s3.177-7.096,7.096-7.096h54.916c3.919,0,7.096,3.177,7.096,7.096S256.427,92.359,252.508,92.359
		z"/>
                                                <path d="M93.584,247.678c-19.342,0-37.108-6.874-50.987-18.306H0v24.38c0,9.013,7.332,16.345,16.345,16.345h264.31
		c9.013,0,16.345-7.332,16.345-16.345v-24.38H144.57C130.692,240.803,112.926,247.678,93.584,247.678z"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            <div className='flex flex-col'>
                                <p className='ml-5 font-extrabold text-3xl text-UiDarkBg dark:text-UiDarkText'>{MyData.Firstname} {MyData.Lastname}</p>
                                <p className='ml-5 font-bold text-xl text-UiDarkBg dark:text-UiDarkText'>Followers : 300 </p>
                            </div>
                        </div>
                        <div>
                            <button className="justify-end items-end bg-buttonDark text-UiDarkText hover:bg-gray500 font-bold py-1 px-2 rounded">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
                {/* 3rd Part */}
                <div className='flex justify-around mx-auto mb-2 items-center dark:bg-ProfilebgBlack text-UiDarkBg dark:text-UiDarkText text-lg font-bold w-4/6'>
                    <p className='text-red border-b border-red mb-1 cursor-pointer'>About</p>
                    <p className='cursor-pointer mb-1 text-UiDarkBg'>Favorite Doctors</p>
                </div>
            </div>
            {/* Profile Main Content Section */}
            <div>
                {/* About */}
                <div>
                </div>
                {/* Favorite Doctors */}
                <div>
                </div>
            </div>
        </div>
    )
}
export default Profile
