import Time from "./Time";
import "./body.css";
import { Link } from "react-router-dom";
import WifiIcon from "@mui/icons-material/Wifi";
import AppleIcon from "@mui/icons-material/Apple";

const Header = () => {
  return (
    <div className="header__container">
      <Time />
      <div className="desktop__header">
        {/* the first part */}
        <div className="right__desktop__contents">
          <AppleIcon />
          <Link to="/about">About me</Link>
          <Link to="/about">Project</Link>
          <Link to="/about">Resume</Link>
          <Link to="/about">Email</Link>
          <Link to="/about">Help</Link>
          <Link to="/about">Contact me</Link>
        </div>
        {/* the second part */}

        <div className="left__section">
          <WifiIcon />
          <p>Mon June 24</p>
          <Time />
        </div>
      </div>
    </div>
  );
};

export default Header;
