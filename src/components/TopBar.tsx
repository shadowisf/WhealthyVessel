import { textColor, primaryColor, secondaryColor } from "../utils/readColors";
import CustomAnchor from "./CustomAnchor";
import CustomAnchorWithImage from "./CustomAnchorWithImage";

export default function TopBar() {
  return (
    <div className="topbar-container">
      <div className="banner-container">
        <div className="left">
          <CustomAnchor href={"#"} color={textColor}>
            WV Login
          </CustomAnchor>
        </div>

        <div className="right">
          <CustomAnchorWithImage
            href="https://www.tiktok.com/@whealthy.cooking"
            color={textColor}
            image="/icons/tiktok.svg"
            width="24px"
          />

          <CustomAnchorWithImage
            href="https://www.facebook.com/share/12EwN2tWXUJ/?mibextid=wwXIfr"
            color={textColor}
            image="/icons/facebook.svg"
            width="24px"
          />
        </div>
      </div>

      <nav>
        <CustomAnchor
          className="logo-container"
          color={"transparent"}
          href={"/"}
        >
          <img src="/icons/logo.svg" alt="logo" />
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
          <CustomAnchor color={primaryColor} href={"/recipes"}>
            RECIPES
          </CustomAnchor>
          <CustomAnchor color={primaryColor} href={"/products"}>
            PRODUCTS
          </CustomAnchor>
        </div>

        <div className="language-container">
          <select>
            <option value="en">🇺🇸 ENGLISH</option>
            <option value="ar">🇸🇦 ARABIC</option>
          </select>
        </div>

        <div className="hamburger-container">
          <CustomAnchorWithImage
            href="javascript:void(0);"
            color={textColor}
            onClick={() => console.log("clicked")}
            image="/icons/hamburger.svg"
            width="24px"
          />
        </div>
      </nav>
    </div>
  );
}
