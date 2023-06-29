import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainpage from "./pages/Mainpage";
import Birthday from "./pages/Birthday";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/calendar/:curMonth" element={<Birthday />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
