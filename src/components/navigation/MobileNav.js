import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div>
      <div className="bottom_nav_container">
        <a href="tel:+234 8136080403">
          <div className="image_container">
            <img
              src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png"
              alt=""
            />
          </div>
        </a>
        <a href="mailto:austinpaul606@gmail.com?subject=Hello from my portfolio">
          <div className="image_container">
            <img
              src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
              alt=""
            />
          </div>
        </a>

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
      </div>
    </div>
  );
};

export default MobileNav;
