type CustomAnchorWithImageProps = {
  color: string;
  children?: React.ReactNode;
  className?: string;
  image: string;
  width: string;
  onClick?: () => void;
};

export default function CustomAnchorWithImage({
  children,
  color,
  className,
  image,
  width,
  onClick,
}: CustomAnchorWithImageProps) {
  return (
    <button
      className={className}
      style={{
        color: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "7px",
      }}
      onClick={onClick}
    >
      <img style={{ width: width }} src={image} />
      {children ? <span>{children}</span> : null}
    </button>
  );
}
