import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.scss';



import { BrowserRouter } from 'react-router-dom';
import HelmetLBN from './components/helmetLBN';
import Header from './components/header';
import Footer from './components/footer';
import Bubble from './components/bubble';
import CarouselHome from './components/carousel';
import Specialties from './components/specialties';
import Technology from './components/technology';
import Team from './components/team';





function App() {
  return (
    <div id="app" className="App">
      <BrowserRouter>

        <HelmetLBN/>
      
        <Header/>
        <CarouselHome/>
        
        <main className="container"> 
          <Specialties/>
          <Technology/>
          <Team/>
        </main>
        
        <Footer/>
        <Bubble/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
