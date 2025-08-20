import { useEffect, useState } from "react";
import { textColor, primaryColor, secondaryColor } from "../utils/readColors";
import CustomAnchor from "./CustomAnchor";
import CustomAnchorWithImage from "./CustomAnchorWithImage";
import CustomButtonWithImage from "./CustomButtonWithImage";
import { useLocation } from "react-router-dom";

export default function TopBar() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const location = useLocation();

  const languages = [
    { value: "en", label: "ENGLISH", icon: "/icons/us.png" },
    { value: "ar", label: "ARABIC", icon: "/icons/sa.png" },
  ];

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    setIsHamburgerMenuOpen(false);
  }, [location]);

  return (
    <>
      <section className="topbar-container">
        <div className="first-container">
          <div className="left">
            <CustomAnchor href={"/login"} color={primaryColor} target="">
              WV LOGIN
            </CustomAnchor>
          </div>

          <div className="right">
            <CustomAnchorWithImage
              className="animation"
              href="https://www.tiktok.com/@whealthy.cooking"
              color={textColor}
              image="/icons/tiktok.svg"
              width="24px"
            />

            <CustomAnchorWithImage
              className="animation"
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

            <span>
              WHEALTHY <span style={{ color: secondaryColor }}>VESSEL</span>
            </span>
          </CustomAnchor>

          <div className="options-container">
            <CustomAnchor
              className={location.pathname === "/history" ? "active" : ""}
              color={primaryColor}
              href={"/history"}
              target=""
            >
              HISTORY
            </CustomAnchor>

            <CustomAnchor
              className={location.pathname === "/recipes" ? "active" : ""}
              color={primaryColor}
              href={"/recipes"}
              target=""
            >
              RECIPES
            </CustomAnchor>

            <CustomAnchor
              className={location.pathname === "/products" ? "active" : ""}
              color={primaryColor}
              href={"/products"}
              target=""
            >
              PRODUCTS
            </CustomAnchor>
          </div>

          <div className="language-container">
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img
                  src={
                    languages.find((lang) => lang.value === selectedLanguage)
                      ?.icon
                  }
                />
                {
                  languages.find((lang) => lang.value === selectedLanguage)
                    ?.label
                }
              </button>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {languages.map((lang) => (
                    <div
                      key={lang.value}
                      className="dropdown-item"
                      onClick={() => handleLanguageChange(lang.value)}
                    >
                      <img src={lang.icon} />
                      {lang.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
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
