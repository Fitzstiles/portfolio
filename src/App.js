import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/pages/Projects";
import Messages from "./components/pages/Messages";
import About from "./components/pages/About";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Notification from "./components/Notification";
import { SetisFalseTimeout } from "./components/constant/timeout";

function App() {
  const [notify, setNotify] = useState(false);
  // const [isopen, setIsOpen] = useState();

  const loading = SetisFalseTimeout();

  useEffect(() => {
    const Timeout = setTimeout(() => {
      setNotify(true);
    }, 10000);
    return () => clearTimeout(Timeout);
  }, []);
  const handleClose = () => setNotify(false);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Notification />
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Body notify={notify} handleClose={handleClose} />}
              ></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/messages" element={<Messages />}></Route>
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
