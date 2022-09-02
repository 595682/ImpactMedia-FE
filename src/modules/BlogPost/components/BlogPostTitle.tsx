interface IBlogPostTitle {
  children: React.ReactNode;
}
const BlogPostTitle = ({ children }: IBlogPostTitle) => {
  return <h1 className="text-4xl text-white">{children}</h1>;
};
export default BlogPostTitle;
