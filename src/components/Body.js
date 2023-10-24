import "./body.css";
import Weather from "./Weather";
import Header from "./Header";
import MobileView from "./MobileView";
import { BrowserHeight } from "./constant/Height";
import BottomNav from "./BottomNav";

const Body = () => {
  // Declared height to fix browser height issues on mobile browser
  const height = BrowserHeight();
  return (
    <div
      className="hero__container"
      style={{ height: height, overflow: "hidden" }}
    >
      <div className="bg__img">
        <img src="../images/02.jpg" alt="" />
      </div>
      <Header />
      <img
        src="https://www.macworld.com/wp-content/uploads/2023/01/folder-icon-macos-1.png"
        alt=""
        width={100}
      />

      <Weather />
      <MobileView />
      <BottomNav />
    </div>
  );
};

export default Body;
