type ContactUsInfoProps = {
  image: string;
  children: React.ReactNode;
};

export default function ContactUsInfo({ image, children }: ContactUsInfoProps) {
  return (
    <div className="info-container">
      <img src={image} />
      {children}
    </div>
  );
}
