import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import NewsLetter from "./Components/NewsLetter/NewsLetter"
import ListingsPage from "./Pages/ListingsPage/ListingsPage"
import Dashboard from "./Pages/Dashboard/Dashboard"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Privacy from "./Pages/Privacy/Privacy"
import Registration from "./Components/Auth/Registration"
import Login from "./Components/Auth/Login"
import DoctorSinglePage from "./Pages/DoctorSinglePage/DoctorSinglePage"
import JobSingle from "./Pages/JobSingle/JobSingle"
import Error from "./Pages/Error/Error"
import RegisterServiceProvider from "./service-provider/RegisterServiceProvider"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<ListingsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sign-up" element={<Registration />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/doctor-detail" element={<DoctorSinglePage />} />
          <Route path="/job-detail" element={<JobSingle />} />
          <Route path="/*" element={<Error />} />
          <Route path="/Make-a-Service-Provider" element={<RegisterServiceProvider />} />

          
        </Routes>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
