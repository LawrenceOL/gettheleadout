import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage"
import Map from './Components/Map'
import Navigation from './Components/Navigation';
import About from './Components/About'
import Check from './Components/Check'
import Resources from './Components/Resources'
import Contact from './Components/Contact'


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navigation />
//         <Routes>
//           <Route exact path="/" element={<Map />} />
//           <Route exact path="/about" element={<About/>} />
//           <Route exact path="/check" element={<Check />} />
//           <Route exact path="/resources" element={<Resources />} />
//         </Routes>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
        <header className="App-header">
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/check" element={<Check />} />
          <Route exact path="/resources" element={<Resources />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        {/* <Map/>
        <About/>
        <Check/> */}
      </header>
    </div>

  );
}

export default App;
