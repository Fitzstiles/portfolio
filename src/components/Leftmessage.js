import { Link } from "react-router-dom";

const Leftmessage = ({ text, img, link }) => {
  return (
    <>
      <p className="inline">
        {text}
        <Link to={`${link}`}>
          <div className="message__image">
            <img src={img} alt="" />
          </div>
        </Link>
      </p>
    </>
  );
};

export default Leftmessage;
