import React from "react";

type QuoteCardProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  image: string;
  reverse: boolean;
};

export default function QuoteCard({
  header,
  children,
  image,
  reverse,
}: QuoteCardProps) {
  return reverse ? (
    <div className="individual-quote-card-container">
      <div className="side">
        {header}

        <img className="mobile-image" src={image} />

        <p>"{children}"</p>
      </div>

      <img className="wide-image" src={image} />
    </div>
  ) : (
    <div className="individual-quote-card-container">
      <img className="wide-image" src={image} />

      <div className="side">
        {header}

        <img className="mobile-image" src={image} />

        <p>"{children}"</p>
      </div>
    </div>
  );
}
