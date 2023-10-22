import { Link } from "react-router-dom";
import "./body.css";

const MobileView = () => {
  return (
    <div className="mobile__view__container">
      <Link to="/projects">
        <div className="mobile__view__contents">
          <div className="mobile__view__image">
            <img
              src="https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png"
              alt=""
            />
          </div>
          <p>Projects</p>
        </div>
      </Link>
      <div className="mobile__view__contents">
        <div className="mobile__view__image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/1200px-Adobe_Acrobat_DC_logo_2020.svg.png"
            alt=""
          />
        </div>
        <p>Resume</p>
      </div>
      <a href="https://github.com/Fitzstiles" target="_blank" rel="noreferrer">
        <div className="mobile__view__contents">
          <div className="mobile__view__image">
            <img
              src="https://upcdn.io/FW25bBB/image/content/app_logos/e71493b6-3fb2-4532-b850-bc45b937142c.webp?f=webp&w=1920&q=85&fit=shrink-cover"
              style={{ borderRadius: 15 }}
              alt=""
            />
          </div>
          <p>Github</p>
        </div>
      </a>
    </div>
  );
};

export default MobileView;
