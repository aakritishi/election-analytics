import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./component/Header";
import Home from "../src/component/home/Home";
import Home2 from "../src/component/home2/Home2";
import Comparison from "./component/compare/Comparison";
import Home3 from "./component/home3/Home3";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/2079-data-analytics" element={<Home2/>} />
          <Route path="/2081-data-analytics" element={<Home3/>} />
          {/* redirect to home if no path found */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/comparison" element={<Comparison/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
