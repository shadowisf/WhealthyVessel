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
        <h1>{header}</h1>

        <p>
          <img className="quote" src="/icons/quote-left.svg" />
          {children}
          <img className="quote" src="/icons/quote-right.svg" />
        </p>
      </div>

      <img src={image} />
    </div>
  ) : (
    <div className="individual-quote-card-container">
      <img src={image} />

      <div className="side">
        <h1>{header}</h1>

        <p>
          <img className="quote" src="/icons/quote-left.svg" />
          {children}
          <img className="quote" src="/icons/quote-right.svg" />
        </p>
      </div>
    </div>
  );
}
