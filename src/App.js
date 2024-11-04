import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/home/Home";

function App() {
  return (
    <div className="App  w-[98%] mx-auto p-4">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
