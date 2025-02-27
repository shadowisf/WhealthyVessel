import { textColor } from "../utils/readColors";
import ContactUsInfo from "./ContactUsInfo";
import CustomAnchor from "./CustomAnchor";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="left">
          <h4>CONTACT US</h4>

          <ContactUsInfo image="/icons/email.svg">
            <CustomAnchor
              href={"mailto:hello@whealthyvessel.com"}
              color={textColor}
              target="_blank"
            >
              hello@whealthyvessel.com
            </CustomAnchor>
          </ContactUsInfo>

          <ContactUsInfo image="/icons/phone.svg">
            <CustomAnchor
              href="tel:966566057406"
              color={textColor}
              target="_blank"
            >
              +966 56 605 7406
            </CustomAnchor>
          </ContactUsInfo>

          <ContactUsInfo image="/icons/map.svg">
            <CustomAnchor
              href={"https://maps.app.goo.gl/NNKYmsoY4y6mcK7J6"}
              color={textColor}
              target="_blank"
            >
              Al-Madinah Al-Munawarah Rd, Ar Rawdah, Tahlia, Jeddah 23432, Saudi
              Arabia
            </CustomAnchor>
          </ContactUsInfo>

          <ContactUsInfo image="/icons/tiktok.svg">
            <CustomAnchor
              href="https://www.tiktok.com/@whealthy.cooking"
              color={textColor}
              target="_blank"
            >
              @whealthy.cooking
            </CustomAnchor>
          </ContactUsInfo>

          <ContactUsInfo image="/icons/facebook.svg">
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

          <div className="partner-container">
            <img src="/images/partners-1.png" />
            <img src="/images/partners-2.png" />
          </div>
        </div>
      </div>

      <div className="rights-reserved-container">
        <p>2025 WHEALTHY VESSEL, INC. ALL RIGHTS RESERVED.</p>

        <br />

        <p>
          WEBSITE DEVELOPER:{" "}
          <CustomAnchor
            href={"https://www.linkedin.com/in/ranalan/"}
            color={"black"}
            target="_blank"
          >
            LES PAUL RANALAN{" "}
          </CustomAnchor>
        </p>
      </div>
    </>
  );
}
