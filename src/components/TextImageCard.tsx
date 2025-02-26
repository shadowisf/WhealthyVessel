import { primaryColor } from "../utils/readColors";
import CustomButton from "./CustomButton";
import React from "react";

type TextImageCardProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  button_text: string;
  image: string;
  reverse: boolean;
  href: string;
};

export default function TextImageCard({
  header,
  children,
  button_text,
  href,
  image,
  reverse,
}: TextImageCardProps) {
  return reverse ? (
    <div className="individual-text-image-card-container">
      <div className="side">
        <h1>{header}</h1>

        <img className="mobile-image" src={image} />

        <p>{children}</p>

        <CustomButton
          href={href}
          backgroundColor={primaryColor}
          color={"black"}
        >
          {button_text}
        </CustomButton>
      </div>

      <img className="wide-image" src={image} />
    </div>
  ) : (
    <div className="individual-text-image-card-container">
      <img className="wide-image" src={image} />

      <div className="side">
        <h1>{header}</h1>

        <img className="mobile-image" src={image} />

        <p>{children}</p>

        <CustomButton
          href={href}
          backgroundColor={primaryColor}
          color={"black"}
        >
          {button_text}
        </CustomButton>
      </div>
    </div>
  );
}
