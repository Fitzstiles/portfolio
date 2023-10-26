import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/pages/Projects";
import Messages from "./components/pages/Messages";
import About from "./components/pages/About";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Notification from "./components/Notification";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    const Timeout = setTimeout(() => {
      setNotify(true);
    }, 10000);
    return () => clearTimeout(Timeout);
  }, []);
  const handleClose = () => setNotify(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
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
