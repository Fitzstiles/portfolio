const Time = () => {
  const t = new Date();
  const hours = t.getHours();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const minutes = t.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return (
    <div>
      <p>
        {formattedHours}:{formattedMinutes}
      </p>
    </div>
  );
};

export default Time;
