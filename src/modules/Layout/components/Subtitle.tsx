interface ISubtitle {
  children: React.ReactNode;
}
const Subtitle = ({ children }: ISubtitle) => {
  return (
    <span className="block text-lg leading-tight tracking-wide sm:text-xl md:text-2xl">
      {children}
    </span>
  );
};
export default Subtitle;
