type ReviewCardProps = {
  profile_image: string;
  name: string;
  content: string;
  stars: number;
};

export default function ReviewCard({
  profile_image,
  name,
  content,
  stars,
}: ReviewCardProps) {
  return (
    <div className="individual-review-card-container">
      <img className="profile-image" src={profile_image} />

      <h3>{name}</h3>

      <div className="star-container">
        {Array(stars)
          .fill(0)
          .map((_, index) => (
            <img key={index} className="star" src="public/icons/star.svg" />
          ))}
      </div>

      <p>
        <img className="quote left" src="public/icons/quote-left.svg" />
        {content}
        <img className="quote" src="public/icons/quote-right.svg" />
      </p>
    </div>
  );
}
