export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlogArticleContentDynamicZoneInput: any;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type BlogArticle = {
  __typename?: 'BlogArticle';
  content?: Maybe<Array<Maybe<BlogArticleContentDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  keywords?: Maybe<Scalars['String']>;
  pinned?: Maybe<Scalars['Boolean']>;
  priority?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  shortDescription: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  themeImage: UploadFileEntityResponse;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlogArticleContentDynamicZone =
  | ComponentBlogComplexCallToAction
  | ComponentBlogGallery
  | ComponentBlogImage
  | ComponentBlogSectionSubtitle
  | ComponentBlogSectionTitle
  | ComponentBlogSimpleCallToAction
  | ComponentBlogTextModule
  | ComponentBlogVideo
  | Error;

export type BlogArticleEntity = {
  __typename?: 'BlogArticleEntity';
  attributes?: Maybe<BlogArticle>;
  id?: Maybe<Scalars['ID']>;
};

export type BlogArticleEntityResponse = {
  __typename?: 'BlogArticleEntityResponse';
  data?: Maybe<BlogArticleEntity>;
};

export type BlogArticleEntityResponseCollection = {
  __typename?: 'BlogArticleEntityResponseCollection';
  data: Array<BlogArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogArticleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BlogArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogArticleFiltersInput>>>;
  pinned?: InputMaybe<BooleanFilterInput>;
  priority?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogArticleInput = {
  content?: InputMaybe<Array<Scalars['BlogArticleContentDynamicZoneInput']>>;
  keywords?: InputMaybe<Scalars['String']>;
  pinned?: InputMaybe<Scalars['Boolean']>;
  priority?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  themeImage?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ClientFeedback = {
  __typename?: 'ClientFeedback';
  company?: Maybe<CompanyEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  feedback?: Maybe<Scalars['String']>;
  feedbackFrom?: Maybe<ComponentFeedbackFeedback>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClientFeedbackEntity = {
  __typename?: 'ClientFeedbackEntity';
  attributes?: Maybe<ClientFeedback>;
  id?: Maybe<Scalars['ID']>;
};

export type ClientFeedbackEntityResponse = {
  __typename?: 'ClientFeedbackEntityResponse';
  data?: Maybe<ClientFeedbackEntity>;
};

export type ClientFeedbackEntityResponseCollection = {
  __typename?: 'ClientFeedbackEntityResponseCollection';
  data: Array<ClientFeedbackEntity>;
  meta: ResponseCollectionMeta;
};

export type ClientFeedbackFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ClientFeedbackFiltersInput>>>;
  company?: InputMaybe<CompanyFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  feedback?: InputMaybe<StringFilterInput>;
  feedbackFrom?: InputMaybe<ComponentFeedbackFeedbackFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ClientFeedbackFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ClientFeedbackFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ClientFeedbackInput = {
  company?: InputMaybe<Scalars['ID']>;
  feedback?: InputMaybe<Scalars['String']>;
  feedbackFrom?: InputMaybe<ComponentFeedbackFeedbackInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Company = {
  __typename?: 'Company';
  createdAt?: Maybe<Scalars['DateTime']>;
  logo?: Maybe<UploadFileEntityResponse>;
  logoBW?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  showAsTrusted?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyEntity = {
  __typename?: 'CompanyEntity';
  attributes?: Maybe<Company>;
  id?: Maybe<Scalars['ID']>;
};

export type CompanyEntityResponse = {
  __typename?: 'CompanyEntityResponse';
  data?: Maybe<CompanyEntity>;
};

export type CompanyEntityResponseCollection = {
  __typename?: 'CompanyEntityResponseCollection';
  data: Array<CompanyEntity>;
  meta: ResponseCollectionMeta;
};

export type CompanyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CompanyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CompanyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CompanyFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  showAsTrusted?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CompanyInput = {
  logo?: InputMaybe<Scalars['ID']>;
  logoBW?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  showAsTrusted?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentBlogComplexCallToAction = {
  __typename?: 'ComponentBlogComplexCallToAction';
  buttonLabel?: Maybe<Scalars['String']>;
  explainer?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  redirectUrl?: Maybe<Scalars['String']>;
};

export type ComponentBlogGallery = {
  __typename?: 'ComponentBlogGallery';
  id: Scalars['ID'];
  images?: Maybe<UploadFileRelationResponseCollection>;
};

export type ComponentBlogGalleryImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBlogImage = {
  __typename?: 'ComponentBlogImage';
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentBlogSectionSubtitle = {
  __typename?: 'ComponentBlogSectionSubtitle';
  id: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
};

export type ComponentBlogSectionTitle = {
  __typename?: 'ComponentBlogSectionTitle';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlogSimpleCallToAction = {
  __typename?: 'ComponentBlogSimpleCallToAction';
  id: Scalars['ID'];
  redirectUrl?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentBlogTextModule = {
  __typename?: 'ComponentBlogTextModule';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlogVideo = {
  __typename?: 'ComponentBlogVideo';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type ComponentFeedbackFeedback = {
  __typename?: 'ComponentFeedbackFeedback';
  avatar?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
};

export type ComponentFeedbackFeedbackFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFeedbackFeedbackFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentFeedbackFeedbackFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFeedbackFeedbackFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
};

export type ComponentFeedbackFeedbackInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
};

export type ComponentPortfolioBrief = {
  __typename?: 'ComponentPortfolioBrief';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentPortfolioBriefFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPortfolioBriefFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPortfolioBriefFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPortfolioBriefFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentPortfolioBriefInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentPortfolioOutcomes = {
  __typename?: 'ComponentPortfolioOutcomes';
  description?: Maybe<Scalars['String']>;
  highlight?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentPortfolioOutcomesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPortfolioOutcomesFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  highlight?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPortfolioOutcomesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPortfolioOutcomesFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentPortfolioOutcomesInput = {
  description?: InputMaybe<Scalars['String']>;
  highlight?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription: Scalars['String'];
  metaImage: UploadFileEntityResponse;
  metaRobots?: Maybe<Scalars['String']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String'];
  metaViewport?: Maybe<Scalars['String']>;
  structuredData?: Maybe<Scalars['JSON']>;
};

export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaImage?: InputMaybe<Scalars['ID']>;
  metaRobots?: InputMaybe<Scalars['String']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaViewport?: InputMaybe<Scalars['String']>;
  structuredData?: InputMaybe<Scalars['JSON']>;
};

export type Connection = {
  __typename?: 'Connection';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  isQuot?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ConnectionEntity = {
  __typename?: 'ConnectionEntity';
  attributes?: Maybe<Connection>;
  id?: Maybe<Scalars['ID']>;
};

export type ConnectionEntityResponse = {
  __typename?: 'ConnectionEntityResponse';
  data?: Maybe<ConnectionEntity>;
};

export type ConnectionEntityResponseCollection = {
  __typename?: 'ConnectionEntityResponseCollection';
  data: Array<ConnectionEntity>;
  meta: ResponseCollectionMeta;
};

export type ConnectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ConnectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isQuot?: InputMaybe<BooleanFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ConnectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ConnectionFiltersInput>>>;
  service?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ConnectionInput = {
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  isQuot?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter',
}

export enum Enum_Portfolioelement_Elementtype {
  AnimatedVideo = 'animated_video',
  Event = 'event',
  LiveStream = 'live_stream',
  Video = 'video',
  Branding = 'branding',
  Campaign = 'campaign',
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph =
  | BlogArticle
  | ClientFeedback
  | Company
  | ComponentBlogComplexCallToAction
  | ComponentBlogGallery
  | ComponentBlogImage
  | ComponentBlogSectionSubtitle
  | ComponentBlogSectionTitle
  | ComponentBlogSimpleCallToAction
  | ComponentBlogTextModule
  | ComponentBlogVideo
  | ComponentFeedbackFeedback
  | ComponentPortfolioBrief
  | ComponentPortfolioOutcomes
  | ComponentSharedMetaSocial
  | ComponentSharedSeo
  | Connection
  | I18NLocale
  | PortfolioElement
  | TeamMember
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlogArticle?: Maybe<BlogArticleEntityResponse>;
  createClientFeedback?: Maybe<ClientFeedbackEntityResponse>;
  createCompany?: Maybe<CompanyEntityResponse>;
  createConnection?: Maybe<ConnectionEntityResponse>;
  createPortfolioElement?: Maybe<PortfolioElementEntityResponse>;
  createTeamMember?: Maybe<TeamMemberEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBlogArticle?: Maybe<BlogArticleEntityResponse>;
  deleteClientFeedback?: Maybe<ClientFeedbackEntityResponse>;
  deleteCompany?: Maybe<CompanyEntityResponse>;
  deleteConnection?: Maybe<ConnectionEntityResponse>;
  deletePortfolioElement?: Maybe<PortfolioElementEntityResponse>;
  deleteTeamMember?: Maybe<TeamMemberEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBlogArticle?: Maybe<BlogArticleEntityResponse>;
  updateClientFeedback?: Maybe<ClientFeedbackEntityResponse>;
  updateCompany?: Maybe<CompanyEntityResponse>;
  updateConnection?: Maybe<ConnectionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updatePortfolioElement?: Maybe<PortfolioElementEntityResponse>;
  updateTeamMember?: Maybe<TeamMemberEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};

export type MutationCreateBlogArticleArgs = {
  data: BlogArticleInput;
};

export type MutationCreateClientFeedbackArgs = {
  data: ClientFeedbackInput;
};

export type MutationCreateCompanyArgs = {
  data: CompanyInput;
};

export type MutationCreateConnectionArgs = {
  data: ConnectionInput;
};

export type MutationCreatePortfolioElementArgs = {
  data: PortfolioElementInput;
};

export type MutationCreateTeamMemberArgs = {
  data: TeamMemberInput;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeleteBlogArticleArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteClientFeedbackArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCompanyArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteConnectionArgs = {
  id: Scalars['ID'];
};

export type MutationDeletePortfolioElementArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTeamMemberArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationUpdateBlogArticleArgs = {
  data: BlogArticleInput;
  id: Scalars['ID'];
};

export type MutationUpdateClientFeedbackArgs = {
  data: ClientFeedbackInput;
  id: Scalars['ID'];
};

export type MutationUpdateCompanyArgs = {
  data: CompanyInput;
  id: Scalars['ID'];
};

export type MutationUpdateConnectionArgs = {
  data: ConnectionInput;
  id: Scalars['ID'];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdatePortfolioElementArgs = {
  data: PortfolioElementInput;
  id: Scalars['ID'];
};

export type MutationUpdateTeamMemberArgs = {
  data: TeamMemberInput;
  id: Scalars['ID'];
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type PortfolioElement = {
  __typename?: 'PortfolioElement';
  brief?: Maybe<ComponentPortfolioBrief>;
  createdAt?: Maybe<Scalars['DateTime']>;
  displayAsFeatured?: Maybe<Scalars['Boolean']>;
  displayAsShowcase: Scalars['Boolean'];
  elementType: Enum_Portfolioelement_Elementtype;
  gallery?: Maybe<UploadFileRelationResponseCollection>;
  heroImage?: Maybe<UploadFileEntityResponse>;
  mainImage?: Maybe<UploadFileEntityResponse>;
  mainVideoUrl?: Maybe<Scalars['String']>;
  outcomes?: Maybe<Array<Maybe<ComponentPortfolioOutcomes>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  shortDescription: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  thumbnailImage: UploadFileEntityResponse;
  thumbnailVideoUrl?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  whatWeDid?: Maybe<ComponentPortfolioBrief>;
};

export type PortfolioElementGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PortfolioElementOutcomesArgs = {
  filters?: InputMaybe<ComponentPortfolioOutcomesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PortfolioElementEntity = {
  __typename?: 'PortfolioElementEntity';
  attributes?: Maybe<PortfolioElement>;
  id?: Maybe<Scalars['ID']>;
};

export type PortfolioElementEntityResponse = {
  __typename?: 'PortfolioElementEntityResponse';
  data?: Maybe<PortfolioElementEntity>;
};

export type PortfolioElementEntityResponseCollection = {
  __typename?: 'PortfolioElementEntityResponseCollection';
  data: Array<PortfolioElementEntity>;
  meta: ResponseCollectionMeta;
};

export type PortfolioElementFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PortfolioElementFiltersInput>>>;
  brief?: InputMaybe<ComponentPortfolioBriefFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  displayAsFeatured?: InputMaybe<BooleanFilterInput>;
  displayAsShowcase?: InputMaybe<BooleanFilterInput>;
  elementType?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mainVideoUrl?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PortfolioElementFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PortfolioElementFiltersInput>>>;
  outcomes?: InputMaybe<ComponentPortfolioOutcomesFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  thumbnailVideoUrl?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  whatWeDid?: InputMaybe<ComponentPortfolioBriefFiltersInput>;
};

export type PortfolioElementInput = {
  brief?: InputMaybe<ComponentPortfolioBriefInput>;
  displayAsFeatured?: InputMaybe<Scalars['Boolean']>;
  displayAsShowcase?: InputMaybe<Scalars['Boolean']>;
  elementType?: InputMaybe<Enum_Portfolioelement_Elementtype>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  heroImage?: InputMaybe<Scalars['ID']>;
  mainImage?: InputMaybe<Scalars['ID']>;
  mainVideoUrl?: InputMaybe<Scalars['String']>;
  outcomes?: InputMaybe<Array<InputMaybe<ComponentPortfolioOutcomesInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  thumbnailImage?: InputMaybe<Scalars['ID']>;
  thumbnailVideoUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  whatWeDid?: InputMaybe<ComponentPortfolioBriefInput>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query';
  blogArticle?: Maybe<BlogArticleEntityResponse>;
  blogArticles?: Maybe<BlogArticleEntityResponseCollection>;
  clientFeedback?: Maybe<ClientFeedbackEntityResponse>;
  clientFeedbacks?: Maybe<ClientFeedbackEntityResponseCollection>;
  companies?: Maybe<CompanyEntityResponseCollection>;
  company?: Maybe<CompanyEntityResponse>;
  connection?: Maybe<ConnectionEntityResponse>;
  connections?: Maybe<ConnectionEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  portfolioElement?: Maybe<PortfolioElementEntityResponse>;
  portfolioElements?: Maybe<PortfolioElementEntityResponseCollection>;
  teamMember?: Maybe<TeamMemberEntityResponse>;
  teamMembers?: Maybe<TeamMemberEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryBlogArticleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryBlogArticlesArgs = {
  filters?: InputMaybe<BlogArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryClientFeedbackArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryClientFeedbacksArgs = {
  filters?: InputMaybe<ClientFeedbackFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCompaniesArgs = {
  filters?: InputMaybe<CompanyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryConnectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryConnectionsArgs = {
  filters?: InputMaybe<ConnectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryPortfolioElementArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryPortfolioElementsArgs = {
  filters?: InputMaybe<PortfolioElementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryTeamMemberArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryTeamMembersArgs = {
  filters?: InputMaybe<TeamMemberFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  avatar?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamMemberEntity = {
  __typename?: 'TeamMemberEntity';
  attributes?: Maybe<TeamMember>;
  id?: Maybe<Scalars['ID']>;
};

export type TeamMemberEntityResponse = {
  __typename?: 'TeamMemberEntityResponse';
  data?: Maybe<TeamMemberEntity>;
};

export type TeamMemberEntityResponseCollection = {
  __typename?: 'TeamMemberEntityResponseCollection';
  data: Array<TeamMemberEntity>;
  meta: ResponseCollectionMeta;
};

export type TeamMemberFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TeamMemberFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TeamMemberFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TeamMemberFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TeamMemberInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};
