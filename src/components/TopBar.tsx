import { textColor, primaryColor, secondaryColor } from "../utils/readColors";
import CustomAnchor from "./CustomAnchor";
import CustomAnchorWithImage from "./CustomAnchorWithImage";

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
          <CustomAnchorWithImage
            href="https://www.tiktok.com/@whealthy.cooking"
            color={textColor}
            image="public/tiktok.svg"
            width="24px"
          />

          <CustomAnchorWithImage
            href="https://www.facebook.com/share/12EwN2tWXUJ/?mibextid=wwXIfr"
            color={textColor}
            image="public/facebook.svg"
            width="24px"
          />
        </div>
      </div>

      <div className="navbar-container">
        <CustomAnchor
          className="logo-container"
          color={"transparent"}
          href={"/"}
        >
          <img src="public/logo.svg" alt="logo" />
          <div className="logo-text-container">
            <span style={{ color: primaryColor }}>WHEALTHY </span>
            <span style={{ color: secondaryColor }}>VESSEL</span>
          </div>
        </CustomAnchor>

        <div className="options-container">
          <CustomAnchor color={primaryColor} href={"/"}>
            HOME
          </CustomAnchor>
          <CustomAnchor color={primaryColor} href={"/history"}>
            HISTORY
          </CustomAnchor>
          <CustomAnchor color={primaryColor} href={"/"}>
            RECIPES
          </CustomAnchor>
          <CustomAnchor color={primaryColor} href={"/"}>
            PRODUCTS
          </CustomAnchor>
        </div>

        <div className="language-container">
          <select>
            <option value="en">🇺🇸 ENGLISH (UNITED STATES)</option>
            <option value="ar">🇸🇦 ARABIC (SAUDIA ARABIA)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
