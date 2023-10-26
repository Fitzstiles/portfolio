import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import "./messages.css";

import Rightmessages from "./Rightmessages";
import Leftmessage from "../Leftmessage";
import { Link } from "react-router-dom";
const Messages = () => {
  return (
    <div className="messages__container">
      <div className="messages__header">
        <ArrowBackIosIcon />
        <div className="user__details">
          <div className="user__avatar">
            <img
              src="https://www.thesun.co.uk/wp-content/uploads/2018/12/AS_HAILEE_STEINFELD_OP.jpg?strip=all&quality=100&w=1080&h=1080&crop=1"
              alt=""
            />
          </div>
          <p>Austin</p>
        </div>
        <VideocamOutlinedIcon />
      </div>
      <div className="messages">
        <p>Hello, Welcome to my website</p>
        <p>This will help you navigate through the different pages easily</p>
        <Leftmessage
          text="Click on the Icon to go to the about page"
          img="https://upload.wikimedia.org/wikipedia/commons/d/d5/Contacts_%28iOS%29.png"
          link="/about"
        />

        <Rightmessages
          text="Click on the Icon to see the projects"
          img="https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png"
        />

        {/* <Leftmessage
          text="Click on the Icon to be redirected to github"
          img="https://upcdn.io/FW25bBB/image/content/app_logos/e71493b6-3fb2-4532-b850-bc45b937142c.webp?f=webp&w=1920&q=85&fit=shrink-cover"
          link="https://github.com/Fitzstiles"
        /> */}

        <p className="inline">
          Click on the Icon to be redirected to github
          <a
            href="https://github.com/Fitzstiles"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="message__image">
              <img
                src="https://upcdn.io/FW25bBB/image/content/app_logos/e71493b6-3fb2-4532-b850-bc45b937142c.webp?f=webp&w=1920&q=85&fit=shrink-cover"
                alt=""
              />
            </div>
          </a>
        </p>

        <Leftmessage
          text="Click on the Icon to send an Email"
          img="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
          link="mailto:austinpaul606@gmail.com?subject=Hello from my portfolio"
        />

        <div className="right__messages">
          <p className="inline">
            <p>
              The bottom navigations on the home page will also help you
              navigate easily
            </p>
          </p>
        </div>
      </div>

      <Link to="/">
        <div className="button">
          <span>Go to Homepage</span>
        </div>
      </Link>
    </div>
  );
};

export default Messages;
