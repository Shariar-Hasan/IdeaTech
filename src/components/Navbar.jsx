import { useState } from "react";
import { AiFillBell } from "react-icons/ai"
import { HiBars3BottomRight } from "react-icons/hi2"
import { FaUserAlt } from "react-icons/fa"
import { GiDeathStar } from "react-icons/gi"
import { routes } from "../assets/configs/routes";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-front text-primary shadow-md">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={() => setIsOpen(prev => !prev)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <HiBars3BottomRight />
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <GiDeathStar className="text-4xl" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {
                                    routes.map(({ title, path, isNavItem }, i) => isNavItem && <span key={i}>
                                        <NavLink className={({ isActive }) =>
                                            isActive ?
                                                "bg-back text-primary hover:bg-front hover:border-white px-2 py-1 border border-transparent rounded-sm" :
                                                "bg-back text-primary hover:bg-front px-2 py-1 border-white border rounded-sm"} to={path}>{title}</NavLink>
                                    </span>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            < AiFillBell />

                        </button>

                        <div className="relative ml-3">
                            <div>
                                <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <FaUserAlt />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
                    {routes.map(({ title, path, isNavItem }, i) => isNavItem && <span key={i} className="bg-front hover:bg-white hover:text-gray-800 duration-150"><NavLink to={path}>{title}</NavLink></span>)}
                </div>
            </div>}
        </nav>

    )
}

export default Navbar