import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDisplay, hideDisplay, ChangeSearchBranche } from '../../../../features/Actions/InterfaceActions'
function FilterListByBranche() {
    const [selectedBranche, setSelectedBranche] = useState('')
    const [brancheMenu, setBrancheMenu] = useState('hidden')
    const [arrowClassName, setArrowClassName] = useState('mx-2 translate-y-1/4 dark:fill-white fill-black')
    const toggleBrancheMenu = () => {
        return (
            brancheMenu === 'hidden' ? setBrancheMenu('') : setBrancheMenu('hidden'),
            arrowClassName === 'mx-2 translate-y-1/4 dark:fill-white fill-black' ? setArrowClassName('mx-2 translate-y-1/4 dark:fill-white rotate-90 fill-black') : setArrowClassName('mx-2 translate-y-1/4 dark:fill-white fill-black')
        )
    }
    const closeBrancheMenu = () => {
        setBrancheMenu('hidden')
    }
    const dispatch = useDispatch()
    const Branches = useSelector(state => state.InterfaceReducer.Branches)
    function openMenu(a, b) {
        if (b === '') {
            dispatch(hideDisplay(a))
        }
        else {
            dispatch(changeDisplay(a))
        }
    }
    useEffect(() => {
        dispatch(ChangeSearchBranche(selectedBranche))
    }, [selectedBranche])
    return (
        <div>
            <h1 className='text-3xl dark:text-UiDarkText p-10 flex items-center cursor-pointer' onClick={toggleBrancheMenu} >Select Branche : {selectedBranche}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={arrowClassName}>
                    <path d="M8.094 2.814l9.092 9.186-9.092 9.186-1.244-1.207 7.979-7.979-7.979-7.979 1.244-1.207zm.028-2.814l-4.122 4 8 8-8 8 4.122 4 11.878-12-11.878-12z" />
                </svg>
            </h1>
            <div className='absolute'>
                <div className={brancheMenu} >
                    <div className='bg-gray-600 opacity-80 w-80 text-center mx-10 z-0 rounded-lg justify-center items-center flex flex-col'>
                        {Branches.map(Branche => (
                            <div key={Branche.id} className='hover:bg-lime-500 cursor-pointer'>
                                <p className='text-3xl dark:text-UiDarkText ' onClick={() => { return (setBrancheMenu('hidden'), setSelectedBranche(Branche.Name)) }}>{Branche.Name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterListByBranche
