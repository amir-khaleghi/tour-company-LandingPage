import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import TourList from './components/TourList';

const App = () => {
  return (
    <div className="text-xl ">
      <Navbar />
      <Hero />
      <div className=" lg:mx-40 md:mx-20">
        <About />
        <Services />
        <TourList />
      </div>
      <Footer />
    </div>
  );
};
export default App;
