import { BrowserRouter } from "react-router-dom";

import { About, Contact2 ,Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-slate-500'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />  
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
        <Contact />
          <Contact2 />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
