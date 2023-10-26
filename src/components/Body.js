import "./body.css";
import Weather from "./Weather";
import Header from "./Header";
import MobileView from "./MobileView";
import { BrowserHeight } from "./constant/Height";
import BottomNav from "./BottomNav";

const Body = ({ notify, handleClose }) => {
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
      {/* <img
        src="https://www.macworld.com/wp-content/uploads/2023/01/folder-icon-macos-1.png"
        alt=""
        width={100}
      /> */}
      <div className="madewith">
        <p>Made with react</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
          alt=""
          width={20}
        />
      </div>
      <Weather />
      <MobileView />
      <BottomNav notify={notify} handleClose={handleClose} />
    </div>
  );
};

export default Body;
