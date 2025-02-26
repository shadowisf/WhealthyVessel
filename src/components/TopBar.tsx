import { useEffect, useState } from "react";
import { textColor, primaryColor, secondaryColor } from "../utils/readColors";
import CustomAnchor from "./CustomAnchor";
import CustomAnchorWithImage from "./CustomAnchorWithImage";
import CustomButtonWithImage from "./CustomButtonWithImage";
import { useLocation } from "react-router-dom";

export default function TopBar() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsHamburgerMenuOpen(false);
  }, [location]);

  return (
    <>
      <section className="topbar-container">
        <div className="banner-container">
          <div className="left">
            <CustomAnchor href={"#"} color={textColor} target="">
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
            target=""
          >
            <img src="/icons/logo.svg" alt="logo" />
            <div>
              <span style={{ color: primaryColor }}>WHEALTHY </span>
              <span style={{ color: secondaryColor }}>VESSEL</span>
            </div>
          </CustomAnchor>

          <div className="options-container">
            <CustomAnchor color={primaryColor} href={"/"} target="">
              HOME
            </CustomAnchor>
            <CustomAnchor color={primaryColor} href={"/history"} target="">
              HISTORY
            </CustomAnchor>
            <CustomAnchor color={primaryColor} href={"/recipes"} target="">
              RECIPES
            </CustomAnchor>
            <CustomAnchor color={primaryColor} href={"/products"} target="">
              PRODUCTS
            </CustomAnchor>
          </div>

          <div className="language-container">
            <select>
              <option value="en">ENGLISH</option>
              <option value="ar">ARABIC</option>
            </select>
          </div>

          <div className="hamburger-container">
            <CustomButtonWithImage
              onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
              color={""}
              image="/icons/hamburger.svg"
              width="24px"
            />
          </div>
        </nav>
      </section>

      <section
        className={`hamburger-menu ${isHamburgerMenuOpen ? "open" : ""}`}
      >
        <div className="hamburger-options-container">
          <CustomButtonWithImage
            onClick={() => setIsHamburgerMenuOpen(false)}
            color={""}
            image={"/icons/close.svg"}
            width={"48px"}
          />

          <CustomAnchor color={"white"} href={"/"} target="">
            HOME
          </CustomAnchor>
          <CustomAnchor color={"white"} href={"/history"} target="">
            HISTORY
          </CustomAnchor>
          <CustomAnchor color={"white"} href={"/recipes"} target="">
            RECIPES
          </CustomAnchor>
          <CustomAnchor color={"white"} href={"/products"} target="">
            PRODUCTS
          </CustomAnchor>
        </div>
      </section>
    </>
  );
}
