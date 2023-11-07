import React from "react"
import { Route, Routes } from "react-router-dom"
import { routes } from "./assets/configs/routes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AllUiCOmponetns from "./components/smallUI/AllUiCOmponetns"


function App() {

  return (
    <React.Fragment>
      <AllUiCOmponetns />
      <Navbar />
      <Routes>
        {routes.map(({ element, path, isVisible }, i) => isVisible && <Route key={i} path={path} element={element} />)}
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
