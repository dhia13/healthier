import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDisplay, hideDisplay,ChangeCommuneSearch } from '../../../../features/Actions/InterfaceActions'
function FilterListByCommune() {
    const [selectedCommune, setSelectedCommune] = useState('')
    const [districtMenu, setDistrictMenu] = useState('hidden')
    const [arrowClassName, setArrowClassName] = useState('mx-2 translate-y-1/4 dark:fill-white fill-black')
    const toggleDistrictMenu = () => {
        return (
            districtMenu === 'hidden' ? setDistrictMenu('') : setDistrictMenu('hidden'),
            arrowClassName === 'mx-2 translate-y-1/4 dark:fill-white fill-black' ? setArrowClassName('mx-2 translate-y-1/4 dark:fill-white rotate-90 fill-black') : setArrowClassName('mx-2 translate-y-1/4 dark:fill-white fill-black')
        )
    }
    const closeDistrictMenu = () => {
        setDistrictMenu('hidden')
    }
    const dispatch = useDispatch()
    const Districts = useSelector(state => state.InterfaceReducer.Districts)
    function openMenu(a, b) {
        if (b === '') {
            dispatch(hideDisplay(a))
        }
        else {
            dispatch(changeDisplay(a))
        }
    }
    useEffect(()=>{
        dispatch(ChangeCommuneSearch(selectedCommune))
    },[selectedCommune])
    return (
        <div>
            <h1 className='text-3xl dark:text-UiDarkText p-10 flex items-center cursor-pointer' onClick={toggleDistrictMenu} >Select Commune : {selectedCommune}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={arrowClassName}>
                    <path d="M8.094 2.814l9.092 9.186-9.092 9.186-1.244-1.207 7.979-7.979-7.979-7.979 1.244-1.207zm.028-2.814l-4.122 4 8 8-8 8 4.122 4 11.878-12-11.878-12z" />
                </svg>
            </h1>
            <div className='absolute bg-UiDarkNavigation bg-opacity-80 rounded-lg ml-10'>
                <div className={districtMenu} >
                    <div className='bg-gray-600 opacity-80 w-80 text-center mx-10 z-0 flex flex-col justify-center items-center'>
                        {Districts.map(district => (
                            <div key={district.Name}>
                                <div className='flex hover:bg-lime-500'>
                                    <button onClick={openMenu.bind(null, district.Name, district.Display)} className='flex text-3xl dark:text-UiDarkText justify-center items-center'>
                                            <p>{district.Communes.Name}</p>
                                    </button>
                                </div>
                                <div>
                                    {district.Communes.Communes.map(Commune => (
                                        <div key={Commune} className={district.Display}>
                                            <button>
                                                <p className='dark:text-UiDarkText hover:bg-sky-700 text-2xl' onClick={()=>{return(setDistrictMenu('hidden'),setSelectedCommune(Commune))}}>{Commune}</p>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterListByCommune;