import { textColor, primaryColor, secondaryColor } from "../utils/readColors";
import CustomAnchor from "./CustomAnchor";

export default function TopBar() {
  return (
    <div className="topbar-container">
      <div className="banner-container">
        <div className="left">
          <CustomAnchor href={"/"} color={textColor}>
            UA Login
          </CustomAnchor>
        </div>

        <div className="right">
          <CustomAnchor
            href="
https://www.facebook.com/share/12EwN2tWXUJ/?mibextid=wwXIfr"
            color={textColor}
          >
            Facebook
          </CustomAnchor>
        </div>
      </div>

      <div className="navbar-container">
        <CustomAnchor
          className="logo-container"
          color={"transparent"}
          href={"/"}
        >
          <img src="src/assets/logo.svg" alt="logo" />
          <div className="logo-text-container">
            <span style={{ color: primaryColor }}>WHEALTHY </span>
            <span style={{ color: secondaryColor }}>VESSEL</span>
          </div>
        </CustomAnchor>

        <div className="options-container">
          <CustomAnchor color={primaryColor} href={"/"}>
            Option One
          </CustomAnchor>
          <CustomAnchor color={primaryColor} href={"/"}>
            Option Two
          </CustomAnchor>
          <CustomAnchor color={primaryColor} href={"/"}>
            Option Three
          </CustomAnchor>
          <CustomAnchor color={primaryColor} href={"/"}>
            Option Four
          </CustomAnchor>
        </div>

        <div className="language-container">
          <select className="language-dropdown">
            <option value="en">🇺🇸 ENGLISH (UNITED STATES)</option>
            <option value="ar">🇸🇦 ARABIC (SAUDIA ARABIA)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
