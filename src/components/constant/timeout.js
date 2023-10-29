import { useEffect, useState } from "react";

export const SetisTrueTimeout = () => {
  const [time, setTrueTime] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTrueTime(true);
    }, 5000);
    return () => clearTimeout(timeOut);
  }, []);

  return time;
};

export const SetisFalseTimeout = () => {
  const [time, setFalseTime] = useState(true);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFalseTime(false);
    }, 5000);
    return () => clearTimeout(timeOut);
  }, []);
  return time;
};

export const SetisTrueAndFalse = () => {
  const [notify, setNotify] = useState(false);

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

  return notify;
};
