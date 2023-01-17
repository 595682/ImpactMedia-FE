import Responsiveplayer from '@/common/components/Responsiveplayer/controllableResponsivePlayer';
import StrapiImage from '@/common/components/StrapiImage';
import Wrapper from '@/modules/Layout/components/Wrapper';
import type { UploadFileEntityResponse } from '@/types';

interface IMidHero {
  mainVideo: string | undefined | null;
  mainImage: UploadFileEntityResponse | undefined | null;
}
const MidHero = ({ mainVideo, mainImage }: IMidHero) => {
  if (mainVideo) {
    return (
      <div className="relative w-full text-white bg-theme-primary">
        <div className="absolute bottom-0 w-full bg-white h-1/2"></div>
        <Wrapper width="narrower">
          <Responsiveplayer url={mainVideo} />
        </Wrapper>
      </div>
    );
  }
  if (mainImage) {
    return (
      <div className="relative w-full text-white bg-theme-primary">
        <div className="absolute bottom-0 w-full bg-white h-1/2"></div>
        <Wrapper width="narrower">
          <StrapiImage
            src={
              mainImage.data?.attributes?.formats?.large?.url ||
              mainImage.data?.attributes?.url
            }
            width={mainImage.data?.attributes?.width}
            height={mainImage.data?.attributes?.height}
            blurUrl={
              mainImage.data?.attributes?.formats?.thumbnail?.url ||
              mainImage.data?.attributes?.formats?.small?.url
            }
            blur
          />
        </Wrapper>
      </div>
    );
  }

  return null;
};
export default MidHero;
