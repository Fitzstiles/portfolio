import { BrowserHeight } from "./constant/Height";

import "./preloader.css";
const Preloader = () => {
  const height = BrowserHeight();
  return (
    <div className="preloader__container" style={{ height: height }}>
      <div className="preloader__image">
        <img src="../images/01.jpg" alt="" />
      </div>
      <div className="loading"></div>
    </div>
  );
};

export default Preloader;
