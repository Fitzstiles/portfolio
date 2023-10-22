import Time from "./Time";
import "./body.css";
import { Link } from "react-router-dom";
import WifiIcon from "@mui/icons-material/Wifi";
import AppleIcon from "@mui/icons-material/Apple";
import { day, dayInWords, month } from "./constant/DateTime";

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
          <a href="mailto:austinpaul606@gmail.com?subject=Hello from my portfolio">
            Email
          </a>
          <Link to="/about">Help</Link>
          <Link to="/about">Contact me</Link>
        </div>
        {/* the second part */}

        <div className="left__section">
          <WifiIcon />
          <p>
            {dayInWords} {month} {day}
          </p>
          <Time />
        </div>
      </div>
    </div>
  );
};

export default Header;
