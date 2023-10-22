import React, { useEffect, useState } from "react";

const Notification = () => {
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNotify(true);
    }, 5000);
  }, []);

  return (
    <div style={{ backgroundColor: "red" }}>
      {notify && <p>You have one new messge</p>}
    </div>
  );
};

export default Notification;
