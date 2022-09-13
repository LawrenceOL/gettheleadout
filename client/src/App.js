// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Components/About/About";
import Check from "./Components/HowToCheckPipes";
import GetChecked from "./Components/GetPipesChecked";
import GetInvolved from "./Components/GetInvolved";
import Contact from "./Components/Contact";
import SubmitLeadData from "./Components/SubmitLeadData";
import Faq from "./Components/Faq";
import Contribute from "./Components/Contribute";
import GetOurDataSet from "./Components/GetOurDataSet";
import Footer from "./Components/Footer";
import Confirmation from "./Components/Confirmation";
import ScrollToTop from "./Components/ScrollToTop";

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
      {/* <header className="App-header"> */}

      <Navigation />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/howtocheckpipes" element={<Check />} />
          <Route exact path="/getpipeschecked" element={<GetChecked />} />
          <Route exact path="/submitleaddata" element={<SubmitLeadData />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/contribute" element={<Contribute />} />
          <Route exact path="/getinvolved" element={<GetInvolved />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/getourdataset" element={<GetOurDataSet />} />
          <Route exact path="/confirm" element={<Confirmation />} />
        </Routes>
      </ScrollToTop>
      {/* <Map/>
        <About/>
        <Check/> */}

      {/* <Footer /> */}
      {/* </header> */}
    </div>
  );
}

export default App;
