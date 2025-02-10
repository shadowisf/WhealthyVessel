type CustomButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  color: string;
};

export default function CustomButton({
  children,
  onClick,
  color,
}: CustomButtonProps) {
  return (
    <button style={{ backgroundColor: `${color}` }} onClick={() => onClick}>
      {children}
    </button>
  );
}
