interface IComponentBlogSectionTitle {
  title: string | undefined | null;
}
const ComponentBlogSectionTitle = ({ title }: IComponentBlogSectionTitle) => {
  return <h2 className="text-3xl font-bold text-theme-primary">{title}</h2>;
};
export default ComponentBlogSectionTitle;
