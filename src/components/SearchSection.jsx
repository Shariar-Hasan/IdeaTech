import { useState } from "react";
import { BsSearch } from "react-icons/bs"
import banner from "./../assets/images/banner.jpg"
const SearchSection = () => {
    const [searchText, setSearchText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchText)
    };
    return (
        <div className="min-h-[50vh] md:min-h-[100vh] bg-[url('./public/banner.jpg')] bg-fixed after:absolute relative after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:bg-opacity-60 after:z-[-1] z-0  flex items-center justify-center flex-col py-12 px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl font-bold tracking-widest">Search your Internal Query with us</h1>
            <div className="max-w-md w-full space-y-8">
                <form onSubmit={handleSubmit} className="mt-8 space-y-2">
                    <input
                        type="text"
                        name="searchText"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="What are you looking for?"
                    />
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <BsSearch className="mr-2" /> Search Query
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchSection