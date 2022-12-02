interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color: 'primary' | 'secondary';
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  bold?: boolean;
  disabled?: boolean;
}

const colorVariant = {
  primary: 'bg-theme-primary hover:bg-theme-primary-light text-white',
  secondary: 'bg-theme-secondary hover:bg-theme-secondary-light text-black',
};

const sizes = {
  sm: 'px-10 py-2 ',
  md: 'px-10 py-2 ',
  lg: 'px-10 py-4 ',
};

const Button: React.FC<ButtonProps> = ({
  title,
  color = 'primary',
  size = 'md',
  icon,
  bold = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`inline-flex ${
        bold && 'font-bold'
      } items-center rounded-full ${
        sizes[size]
      } transition-colors duration-500 ${colorVariant[color]} 
      ${
        disabled
          ? 'bg-gray-400 text-gray-600 hover:bg-gray-400'
          : 'cursor-pointer'
      }
      `}
      {...props}
    >
      {icon && <div className={`-ml-1 mr-3 h-5 w-5`}>{icon}</div>}
      {title}
    </button>
  );
};
export default Button;
