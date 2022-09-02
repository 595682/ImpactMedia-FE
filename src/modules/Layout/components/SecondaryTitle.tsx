interface ISecondaryTitle {
  children: React.ReactNode;
}
const SecondaryTitle = ({ children }: ISecondaryTitle) => {
  return (
    <span className="block text-3xl font-bold leading-tight tracking-wide">
      {children}
    </span>
  );
};
export default SecondaryTitle;
