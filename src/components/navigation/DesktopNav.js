import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <div className="bottom_nav_container">
      <a href="tel:+234 8136080403">
        <div className="image_container">
          <img
            src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png"
            alt=""
          />
        </div>
      </a>
      <div className="image_container">
        <img
          src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
          alt=""
        />
      </div>
      <div className="image_container">
        <img
          src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Messages-512.png"
          alt=""
        />
      </div>
      <Link to="/about">
        <div className="image_container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Contacts_%28iOS%29.png"
            alt=""
          />
        </div>
      </Link>
      <a href="https://github.com/Fitzstiles" target="_blank" rel="noreferrer">
        <div className="image_container hide">
          <img
            src="https://upcdn.io/FW25bBB/image/content/app_logos/e71493b6-3fb2-4532-b850-bc45b937142c.webp?f=webp&w=1920&q=85&fit=shrink-cover"
            style={{ borderRadius: 15 }}
            alt=""
          />
        </div>
      </a>
      <div className="image_container hide">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/1200px-Adobe_Acrobat_DC_logo_2020.svg.png"
          alt=""
        />
      </div>

      <Link to="/projects">
        <div className="image_container hide">
          <img
            src="https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default DesktopNav;
