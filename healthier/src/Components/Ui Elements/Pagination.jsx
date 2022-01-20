import {Link} from 'react-router-dom'

function Pagination() {
    return (
        <div className="flex justify-center items-center bg-green-400 h-16 dark:bg-gray-600 ">
        <Link to='' className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-400 dark:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        </Link>

        <Link to='' className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-600 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-green-500 hover:text-green-200 dark:hover:text-white">
            1
        </Link>

        <Link to='' className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-600 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-green-500 hover:text-green-200 dark:hover:text-white">
            2
        </Link>
        
        <Link to='' className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-600 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-green-500 hover:text-green-200 dark:hover:text-white">
            ...
        </Link>

        <Link to='' className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-600 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-green-500 hover:text-green-200 dark:hover:text-white">
            9
        </Link>

        <Link to='' className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-600 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-green-500 hover:text-green-200 dark:hover:text-white">
            10
        </Link>

        <Link to='' className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-600 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-green-500 hover:text-green-200 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </Link>
    </div>
    )
}

export default Pagination
