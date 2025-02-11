import { primaryColor } from "../utils/readColors";
import CustomButton from "./CustomButton";
import React from "react";

type TextImageCardProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  button_text: string;
  onClick: () => void;
  image: string;
  reverse: boolean;
};

export default function TextImageCard({
  header,
  children,
  button_text,
  onClick,
  image,
  reverse,
}: TextImageCardProps) {
  return reverse ? (
    <div className="individual-text-image-card-container">
      <div className="side">
        <h1>{header}</h1>

        <p>{children}</p>

        <CustomButton onClick={onClick} color={primaryColor}>
          {button_text}
        </CustomButton>
      </div>

      <img src={image} />
    </div>
  ) : (
    <div className="individual-text-image-card-container">
      <img src={image} />

      <div className="side">
        <h1>{header}</h1>

        <p>{children}</p>

        <CustomButton onClick={onClick} color={primaryColor}>
          {button_text}
        </CustomButton>
      </div>
    </div>
  );
}
