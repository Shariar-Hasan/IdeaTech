import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube } from "react-icons/ai"
const menu = [
    { title: 'About', url: '#' },
    { title: 'Privacy Policy', url: '#' },
    { title: 'Terms & Conditions', url: '#' },
    { title: 'FAQ', url: '#' },
    { title: 'Contact Us', url: '#' },
];

const socialLinks = [
    {
        icon: <span className="flex items-center hover:text-blue-600">
            <AiFillFacebook className="mr-2 text-lg text-blue-600" /> Facebook
        </span>, url: '#'
    },
    {
        icon: <span className="flex items-center hover:text-blue-400">
            <AiFillTwitterSquare className="mr-2 text-lg  text-blue-400" /> Twitter
        </span>, url: '#'
    },
    {
        icon: <span className="flex items-center  hover:text-pink-600">
            <AiFillInstagram className="mr-2 text-lg text-pink-600" /> Instagram
        </span>, url: '#'
    },
    {
        icon: <span className="flex items-center hover:text-red-600">
            <AiFillYoutube className="mr-2 text-lg text-red-600" /> Youtube
        </span>, url: '#'
    },
];

export {
    menu,
    socialLinks
}