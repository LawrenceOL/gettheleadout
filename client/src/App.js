// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Main/LandingPage/LandingPage"
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About'
import Check from './Components/Main/Residents/HowToCheckPipes'
import Resources from './Components/Resources'
import Contact from './Components/Contact'
import SubmitLeadData from './Components/Main/Residents/SubmitLeadData';
import ApplicationResources from './Components/Main/Officials/ApplictionResources';
import LinksToGrants from './Components/Main/Officials/LinksToGrants';
import RequestOrVerifyData from './Components/Main/Officials/RequestOrVerifyData';


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
        <Navigation />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/howtocheckpipes" element={<Check />} />
          <Route exact path="/submitleaddata" element={<SubmitLeadData />} />
          <Route exact path="/ApplicationResources" element={<ApplicationResources />} />
          <Route exact path="/LinksToGrants" element={<LinksToGrants />} />
          <Route exact path="/requestorverifydata" element={<RequestOrVerifyData />} />
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
