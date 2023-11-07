import Home from "../../pages/Home";
import { Navigate } from "react-router-dom"
import NotFound from "../../pages/NotFound";
import Authentication from "../../pages/Authentication";
import Services from "../../pages/Services";
import ServiceDetails from "../../pages/ServiceDetails";
export const routes = [
    {
        title: "Home",
        path: "/",
        element: <Home />,
        isNavItem: true,
        isVisible: true
    },
    {
        title: "Services",
        path: "/services",
        element: <Services />,
        isNavItem: true,
        isVisible: true
    },
    {
        title: "Services",
        path: "/services/:sid",
        element: <ServiceDetails />,
        isNavItem: false,
        isVisible: true
    },
    {
        title: "Login",
        path: "/authentication",
        element: <Authentication />,
        isNavItem: true,
        isVisible: true
    },
    {
        title: "Not Found",
        path: "/*",
        element: <Navigate to="/404" replace />,
        isNavItem: false,
        isVisible: true
    },
    {
        title: "Not Found",
        path: "/404",
        element: <NotFound />,
        isNavItem: false,
        isVisible: true
    }
]