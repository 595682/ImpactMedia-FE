import StrapiImage from '@/common/components/StrapiImage';

interface IComponentBlogImage {
  imageUrl: string | undefined | null;
  alt: string | undefined | null;
  height: number | undefined | null;
  width: number | undefined | null;
}
const ComponentBlogImage = ({
  imageUrl,
  alt,
  height,
  width,
}: IComponentBlogImage) => {
  if (
    typeof imageUrl !== 'string' ||
    typeof height !== 'number' ||
    typeof width !== 'number'
  ) {
    return null;
  }

  return (
    <div className="flex overflow-hidden rounded-xl">
      <StrapiImage src={imageUrl} alt={alt} height={height} width={width} />
    </div>
  );
};
export default ComponentBlogImage;
