import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/pages/Projects";
import Messages from "./components/pages/Messages";
import About from "./components/pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
