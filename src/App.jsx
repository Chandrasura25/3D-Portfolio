import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { Helmet } from "react-helmet";
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Helmet>
          <title>Asura's Portfolio</title>
          <meta
            name="description"
            content="A portfolio for showcasing prowess as a developer"
          />
        </Helmet>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="mt-5">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        </div>
        <div className="relative z-0">
    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="roqeebah-abdulganiy-367a48224" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ng.linkedin.com/in/roqeebah-abdulganiy-367a48224?trk=profile-badge">Roqeebah Abdulganiy</a></div>
              
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
