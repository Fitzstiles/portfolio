import React, { useEffect, useState } from "react";
import "./notification.css";
import { BrowserWidth } from "./constant/Width";
const Notification = () => {
  const [notify, setNotify] = useState(false);
  const width = BrowserWidth();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotify(true);
    }, 5000);
    const secondTimeout = setTimeout(() => {
      setNotify(false);
    }, 10000);
    return () => {
      clearTimeout(timeout);
      clearTimeout(secondTimeout);
    };
  }, []);

  return (
    <div>
      {notify && width < 1000 ? (
        <div className={`notification__container ${notify ? "show" : "hide"}`}>
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
      ) : (
        ""
      )}
    </div>
  );
};

export default Notification;
