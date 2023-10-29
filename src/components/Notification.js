import "./notification.css";
import { BrowserWidth } from "./constant/Width";
import { SetisTrueAndFalse } from "./constant/timeout";
const Notification = () => {
  const width = BrowserWidth();

  const show = SetisTrueAndFalse();

  return (
    <div>
      {show && width < 820 && (
        <div className="notification__container">
          <div className="notification__left__section">
            <div className="notification__image">
              <img src="../images/la.jpg" alt="" />
            </div>
            <div>
              <p id="bold">Austin</p>
              <p>Click on the message Icon below for help</p>
            </div>
          </div>
          <p>now</p>
        </div>
      )}
    </div>
  );
};

export default Notification;
