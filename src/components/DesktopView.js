import "./desktopview.css";
const DesktopView = () => {
  return (
    <div className="desktopview__container">
      <div className="buttons__container">
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* first part */}

      <div className="desktop__content">
        <div>
          <p>header</p>
          <p>header</p>
          <p>header</p>
          <p>header</p>
        </div>

        {/* second part */}

        <div className="right__desktop__content">
          <p>Hello world</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
