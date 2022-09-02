/* eslint-disable no-underscore-dangle */
import type { BlogArticleContentDynamicZone } from '@/types';

import ComponentBlogComplexCallToAction from './ComponentBlogComplexCallToAction';
import ComponentBlogGallery from './ComponentBlogGallery';
import ComponentBlogImage from './ComponentBlogImage';
import ComponentBlogSectionSubtitle from './ComponentBlogSectionSubtitle';
import ComponentBlogSectionTitle from './ComponentBlogSectionTitle';
import ComponentBlogSimpleCallToAction from './ComponentBlogSimpleCallToAction';
import ComponentBlogTextModule from './ComponentBlogTextModule';
import ComponentBlogVideo from './ComponentBlogVideo';

interface IContentRenderer {
  content: BlogArticleContentDynamicZone | null;
}
const ContentRenderer = ({ content }: IContentRenderer) => {
  switch (content?.__typename) {
    case 'ComponentBlogTextModule':
      return (
        <div className="mb-20">
          <ComponentBlogTextModule
            content={content.content}
            title={content.title}
          />
        </div>
      );
    case 'ComponentBlogSectionTitle':
      return (
        <div className="mb-4">
          <ComponentBlogSectionTitle title={content.title} />
        </div>
      );
    case 'ComponentBlogSectionSubtitle':
      return (
        <div className="mb-4">
          <ComponentBlogSectionSubtitle subtitle={content.subtitle} />
        </div>
      );
    case 'ComponentBlogSimpleCallToAction':
      return (
        <div className="my-20">
          <ComponentBlogSimpleCallToAction
            text={content.text}
            url={content.redirectUrl}
          />
        </div>
      );
    case 'ComponentBlogComplexCallToAction':
      return (
        <div className="my-28">
          <ComponentBlogComplexCallToAction
            label={content.label}
            buttonLabel={content.buttonLabel}
            url={content.redirectUrl}
            explainer={content.explainer}
          />
        </div>
      );
    case 'ComponentBlogImage':
      return (
        <div className="my-20">
          <ComponentBlogImage
            imageUrl={content.image?.data?.attributes?.url}
            height={content.image?.data?.attributes?.height}
            width={content.image?.data?.attributes?.width}
            alt={content.image?.data?.attributes?.alternativeText}
          />
        </div>
      );
    case 'ComponentBlogGallery':
      return (
        <div className="my-20">
          <ComponentBlogGallery images={content.images?.data} />
        </div>
      );
    case 'ComponentBlogVideo':
      return (
        <div className="my-20">
          <ComponentBlogVideo
            videoUrl={content.videoUrl}
            title={content.title}
          />
        </div>
      );
    default:
      return null;
  }
};
export default ContentRenderer;
