import "./body.css";
import BottomNav from "./BottomNav";
import Weather from "./Weather";
import Header from "./Header";
import MobileView from "./MobileView";

const Body = () => {
  // Declared height to fix height for browser
  const height = (window.innerHeight / 100) * 100;

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

      <Weather />
      <MobileView />
      <BottomNav />
    </div>
  );
};

export default Body;
