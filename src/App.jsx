import { BrowserRouter } from "react-router-dom";
import {About,Contact,Experience,Feedbacks,Hero, Navbar, Tech, Works, StarsCanvas} from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App =()=> {

  return (
    <BrowserRouter>
     <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
     </div>
     <ToastContainer />
    </BrowserRouter>
  )
}

export default App
