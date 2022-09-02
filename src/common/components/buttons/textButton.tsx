interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color: 'primary' | 'secondary' | 'white';
  icon?: React.ReactNode;
  bold?: boolean;
  disabled?: boolean;
}

const colorVariant = {
  primary: 'text-theme-primary ',
  secondary: 'text-theme-secondary ',
  white: 'text-white',
};

const TextButton: React.FC<TextButtonProps> = ({
  title,
  color = 'primary',
  icon,
  bold = true,
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`inline-flex underline-offset-4 hover:underline ${
        bold && 'font-bold'
      } items-center rounded-full ${colorVariant[color]}`}
      {...props}
    >
      {icon && <div className="-ml-1 mr-3 h-5 w-5">{icon}</div>}
      {title} &#8594;
    </button>
  );
};
export default TextButton;
