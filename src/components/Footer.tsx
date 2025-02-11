import { textColor } from "../utils/readColors";
import ContactUsInfo from "./ContactUsInfo";
import CustomAnchor from "./CustomAnchor";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="left">
          <h4>CONTACT US</h4>

          <ContactUsInfo image="public/icons/email.svg">
            <CustomAnchor
              href={"mailto:hello@whealthyvessel.com"}
              color={textColor}
            >
              hello@whealthyvessel.com
            </CustomAnchor>
          </ContactUsInfo>

          <ContactUsInfo image="public/icons/phone.svg">
            <CustomAnchor href="tel:966566057406" color={textColor}>
              +966 56 605 7406
            </CustomAnchor>
          </ContactUsInfo>

          <ContactUsInfo image="public/icons/map.svg">
            <CustomAnchor
              href={"https://maps.app.goo.gl/NNKYmsoY4y6mcK7J6"}
              color={textColor}
              target="_blank"
            >
              Al-Madinah Al-Munawarah Rd, Ar Rawdah, Tahlia, Jeddah 23432, Saudi
              Arabia
            </CustomAnchor>
          </ContactUsInfo>

          <ContactUsInfo image="public/icons/tiktok.svg">
            <CustomAnchor
              href="https://www.tiktok.com/@whealthy.cooking"
              color={textColor}
              target="_blank"
            >
              @whealthy.cooking
            </CustomAnchor>
          </ContactUsInfo>

          <ContactUsInfo image="public/icons/facebook.svg">
            <CustomAnchor
              href="https://www.facebook.com/share/12EwN2tWXUJ/?mibextid=wwXIfr"
              color={textColor}
              target="_blank"
            >
              Whealthy Vessel
            </CustomAnchor>
          </ContactUsInfo>
        </div>

        <div className="right">
          <h4>PARTNERS</h4>

          <img src="public/images/partners.png" />
        </div>
      </div>

      <div className="rights-reserved-container">
        2025 WHEALTHY VESSEL, INC. ALL RIGHTS RESERVED.
      </div>
    </>
  );
}
