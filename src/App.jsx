import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import ErrorPage from './Error';
import NavBar from './NavBar';
import DetailAbout from './DetailAbout';
import Footer from './Footer';
import './index.css';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/detailabout" element={<DetailAbout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
