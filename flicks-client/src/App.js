import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShow from './pages/TvShow';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/movies'  element={<Movies/>} />
        <Route path='/tv'  element={<TvShow/>} />
      </Routes>
      <footer className="section-container">
        <div className="footer-wrapper">
          <img src="assets/images/flicksTransparent.png" alt="flicks logo" />
          <div className="footer-links" >
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-links" >
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Disclamer</li>
            </ul>
          </div>
        </div>
         ©️ 2022 | This site is owned and operated by Flicks 
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
