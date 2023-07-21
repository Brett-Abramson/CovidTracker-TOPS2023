import "./App.css";
import { Route, Routes } from "react-router-dom";

//Component imports
import Footer from "./Components/Footer"
import Nav from './Components/Nav/Nav'
//Route imports
import Home from "./Pages/Home";

//White Labeling Routes
// import DesignStart from "./Pages/WhiteLabeling/DesignStart"
import PartnerWhiteLabel from "./Pages/WhiteLabeling/PartnerWhiteLabel"
// import SiteBuildA from "./Pages/WhiteLabeling/SiteBuildA"
// import SiteBuildB from "./Pages/WhiteLabeling/SiteBuildB"
// import SiteBuildC from "./Pages/WhiteLabeling/SiteBuildC"
import ReviewAndSubmit from "./Pages/WhiteLabeling/ReviewAndSubmit"


function App() {
  return (
    
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/DesignStart" element={<DesignStart />} /> */}
        <Route path="/PartnerWhiteLabel" element={<PartnerWhiteLabel />} />
        {/* <Route path="/SiteBuildA" element={<SiteBuildA />} />
        <Route path="/SiteBuildB" element={<SiteBuildB />} />
        <Route path="/SiteBuildC" element={<SiteBuildC />} />*/
        <Route path="/ReviewAndSubmit" element={<ReviewAndSubmit />} /> }
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;