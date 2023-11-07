import { menu, socialLinks } from "../assets/fakedata/footer"
import logo from "./../assets/images/idea.gif"
const Footer = () => {
    return (
        <footer className="bg-gray-800  border-t-2">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    <div className="flex flex-col items-start">
                        <img src={logo} alt="Logo" className="w-12 mb-4" />
                        <p className="text-gray-200 text-sm">
                            We provide solutions for businesses and individuals that are interested in technological products.
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-200 mb-4">Menu</h3>
                        <ul className="list-none text-gray-200 text-sm">
                            {menu.map((item, index) => (
                                <li key={index} className="mb-2">
                                    <a href={item.url} className="hover:text-blue-600">{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-200 mb-4">Follow Us</h3>
                        <ul className="list-none text-gray-200 text-sm">
                            {socialLinks.map((item, index) => (
                                <li key={index} className="mb-2">
                                    <a href={item.url} className="hover:text-blue-600">{item.icon}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900">
                <div className="container mx-auto py-4">
                    <p className="text-center text-gray-200 text-sm">
                        &copy; 2022 - {new Date().getFullYear()} All rights reserved. Designed by <span className="link-text">Idea Tech</span>.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer