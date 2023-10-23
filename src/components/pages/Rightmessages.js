import { Link } from "react-router-dom";

const Rightmessages = ({ text, img }) => {
  return (
    <div className="right__messages">
      <p className="inline">
        <p>{text}</p>

        <Link to="/project">
          <div className="message__image">
            <img src={img} alt="" />
          </div>
        </Link>
      </p>
    </div>
  );
};

export default Rightmessages;
