import { primaryColor } from "../utils/readColors";
import CustomButton from "./CustomButton";
import React from "react";

type TextImageCardProps = {
  header: React.ReactNode;
  content: React.ReactNode;
  button_text: string;
  onClick: () => void;
  image: string;
  reverse: boolean;
};

export default function TextImageCard({
  header,
  content,
  button_text,
  onClick,
  image,
  reverse,
}: TextImageCardProps) {
  return reverse ? (
    <div className="text-image-card-container">
      <div className="side">
        <h1>{header}</h1>

        <p>{content}</p>

        <CustomButton onClick={onClick} color={primaryColor}>
          {button_text}
        </CustomButton>
      </div>

      <img src={image} />
    </div>
  ) : (
    <div className="text-image-card-container">
      <img src={image} />

      <div className="side">
        <h1>{header}</h1>

        <p>{content}</p>

        <CustomButton onClick={onClick} color={primaryColor}>
          {button_text}
        </CustomButton>
      </div>
    </div>
  );
}
