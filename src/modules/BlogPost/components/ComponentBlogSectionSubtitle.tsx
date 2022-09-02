interface IComponentBlogSectionSubtitle {
  subtitle: string | undefined | null;
}
const ComponentBlogSectionSubtitle = ({
  subtitle,
}: IComponentBlogSectionSubtitle) => {
  return <h3 className="text-xl font-bold text-theme-primary">{subtitle}</h3>;
};
export default ComponentBlogSectionSubtitle;
