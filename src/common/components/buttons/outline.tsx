interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isMenuLight: boolean;
}

const OutlineButton: React.FC<ButtonProps> = ({
  title,
  isMenuLight = false,
  ...props
}) => {
  return (
    <button
      className={`rounded-full border ${
        isMenuLight ? 'border-theme-primary' : 'border-white'
      } px-6 transition-colors duration-1000 hover:bg-white/10`}
      {...props}
    >
      {title}
    </button>
  );
};
export default OutlineButton;
