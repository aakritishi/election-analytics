import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./component/Header";
import Home from '../src/component/home/Home';
import Home2 from '../src/component/home2/Home2'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/2074-data-analytics" />} /> 
          <Route path="/2074-data-analytics" element={<Home/>} />
          <Route path="/2079-data-analytics" element={<Home2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
