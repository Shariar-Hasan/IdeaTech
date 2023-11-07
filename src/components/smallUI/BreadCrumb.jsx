import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import capitalize from '../../assets/functions/capitalize';

const BreadCrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split("/").filter((path) => path !== "");
    let currentPath = "";

    return (
        <div className='container mx-auto'>
            <div className="flex items-center space-x-2 my-4 text-base md:text-lg">
                <Link to="/" className="text-blue-500 ">Home</Link>
                {paths.map((path, index) => {
                    currentPath += `/${path}`;
                    const isLast = index === paths.length - 1;
                    return (
                        <React.Fragment key={path}>
                            <span>/</span>
                            {isLast ? (
                                <span className="text-gray-600">{capitalize(path)}</span>
                            ) : (
                                <Link to={currentPath} className="text-blue-500">{capitalize(path)}</Link>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>

    );
};
export default BreadCrumb