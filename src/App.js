import About from "../src/components/About";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/pages/Projects";
// getting the width of the screen to be used in the entire app
export const width = window.innerWidth;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
