import { Link } from "react-router-dom";

const Leftmessage = ({ text, img }) => {
  return (
    <>
      <p className="inline">
        {text}
        <Link to="/about">
          <div className="message__image">
            <img src={img} alt="" />
          </div>
        </Link>
      </p>
    </>
  );
};

export default Leftmessage;
