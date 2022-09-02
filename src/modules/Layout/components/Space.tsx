interface ISpace {
  amount?: 'sm' | 'md' | 'lg' | 'xl';
  custom?: string;
}

const spaces = {
  sm: 'h-6',
  md: 'h-12',
  lg: 'h-16',
  xl: 'h-24',
};

const Space = ({ amount = 'md', custom }: ISpace) => {
  return <div className={`w-full ${custom || spaces[amount]}`}></div>;
};
export default Space;
