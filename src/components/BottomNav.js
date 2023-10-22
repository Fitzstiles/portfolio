import "./bottomnav.css";
import { width } from "../App";
import DesktopNav from "./navigation/DesktopNav";
import MobileNav from "./navigation/MobileNav";

const BottomNav = () => {
  return width > 820 ? (
    <div>
      <DesktopNav />
    </div>
  ) : (
    <div>
      <MobileNav />
    </div>
  );
};

export default BottomNav;
