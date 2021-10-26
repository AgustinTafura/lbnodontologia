import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'slick-carousel/slick/slick';
import './App.scss';



import { BrowserRouter } from 'react-router-dom';
import HelmetLBN from './components/helmetLBN';
import Header from './components/header';
import Footer from './components/footer';
import Bubble from './components/bubble';
import CarouselHome from './components/carousel';
import Modals from './components/modals';
import Main from './components/main';





function App() {
  return (
    <div id="app" className="App">
      <BrowserRouter>

        <HelmetLBN/>
      
        <Header/>
        <CarouselHome/>
        <Main/>        
        <Footer/>

        <Modals/>
        <Bubble/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
