import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
// loadBranches
function Branch() {
const branchesData= useSelector(state => state.Reducers.Branches)

    return (
        <div className='flex flex-wrap m-16'>
            {branchesData.map(Branch=>{
                return(
                    <Link to=''>
                    <div className='m-5 p-5 w-80 bg-green-100 dark:bg-gray-600 flex'>
                        <p className='text-2xl font-semibold'>{Branch.Name}</p>
                        <div className='translate-x-16'>
                        </div>
                    </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Branch
