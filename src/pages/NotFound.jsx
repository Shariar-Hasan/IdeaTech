
const NotFound = () => {
    return (
        <div className="h-[80vh] w-screen flex justify-center items-center bg-back">
            <div className="flex justify-start items-center flex-col bg-front p-8 rounded-md text-primary">
                <h1 className="text-4xl">Page not Found</h1>
                <p className="text-gray-500 my-4"> Status Code 404</p>
                <button className="bg-button px-3 py-2">⬅️ Back to Home</button>
            </div>
        </div>
    )
}

export default NotFound