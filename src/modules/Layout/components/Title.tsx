interface ITitle {
  children: React.ReactNode;
  size?: 'xl4' | 'xl3' | 'xl2' | 'xl' | 'lg';
}

const textSize = {
  xl4: 'text-4xl sm:text-6xl xl:text-6xl',
  xl3: 'text-3xl sm:text-5xl xl:text-5xl',
  xl2: 'text-2xl sm:text-4xl xl:text-4xl',
  xl: 'text-xl sm:text-2xl xl:text-3xl',
  lg: 'text-lg sm:text-xl xl:text-2xl',
};

const Title = ({ children, size = 'xl4' }: ITitle) => {
  return (
    <span className={`block ${textSize[size]} leading-tight tracking-tight`}>
      {children}
    </span>
  );
};
export default Title;
