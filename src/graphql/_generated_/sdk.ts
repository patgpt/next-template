import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient, RequestOptions } from 'graphql-request';
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
};


export type AssetLinkingCollectionsComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** SEO Component that is required on all Pages [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/componentSeo) */
export type ComponentSeo = Entry & _Node & {
  __typename?: 'ComponentSeo';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  index?: Maybe<Scalars['Boolean']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentSeoLinkingCollections>;
  robots?: Maybe<Scalars['Boolean']['output']>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoImage?: Maybe<Asset>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** SEO Component that is required on all Pages [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/componentSeo) */
export type ComponentSeoIndexArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO Component that is required on all Pages [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/componentSeo) */
export type ComponentSeoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO Component that is required on all Pages [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/componentSeo) */
export type ComponentSeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** SEO Component that is required on all Pages [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/componentSeo) */
export type ComponentSeoRobotsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO Component that is required on all Pages [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/componentSeo) */
export type ComponentSeoSeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO Component that is required on all Pages [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/componentSeo) */
export type ComponentSeoSeoImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** SEO Component that is required on all Pages [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/componentSeo) */
export type ComponentSeoSeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSeoCollection = {
  __typename?: 'ComponentSeoCollection';
  items: Array<Maybe<ComponentSeo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentSeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  index?: InputMaybe<Scalars['Boolean']['input']>;
  index_exists?: InputMaybe<Scalars['Boolean']['input']>;
  index_not?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  robots?: InputMaybe<Scalars['Boolean']['input']>;
  robots_exists?: InputMaybe<Scalars['Boolean']['input']>;
  robots_not?: InputMaybe<Scalars['Boolean']['input']>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoDescription_contains?: InputMaybe<Scalars['String']['input']>;
  seoDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoDescription_not?: InputMaybe<Scalars['String']['input']>;
  seoDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  seoDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
  seoTitle_contains?: InputMaybe<Scalars['String']['input']>;
  seoTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoTitle_not?: InputMaybe<Scalars['String']['input']>;
  seoTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  seoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSeoLinkingCollections = {
  __typename?: 'ComponentSeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PostTitleAsc = 'postTitle_ASC',
  PostTitleDesc = 'postTitle_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoOrder {
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  RobotsAsc = 'robots_ASC',
  RobotsDesc = 'robots_DESC',
  SeoDescriptionAsc = 'seoDescription_ASC',
  SeoDescriptionDesc = 'seoDescription_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** Standard Blog Post Page [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/pageBlogPost) */
export type PageBlogPost = Entry & _Node & {
  __typename?: 'PageBlogPost';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  featuredImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageBlogPostLinkingCollections>;
  postContent?: Maybe<PageBlogPostPostContent>;
  postTitle?: Maybe<Scalars['String']['output']>;
  publishedDate?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Standard Blog Post Page [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/pageBlogPost) */
export type PageBlogPostFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Standard Blog Post Page [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/pageBlogPost) */
export type PageBlogPostInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Standard Blog Post Page [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/pageBlogPost) */
export type PageBlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Standard Blog Post Page [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/pageBlogPost) */
export type PageBlogPostPostContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Standard Blog Post Page [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/pageBlogPost) */
export type PageBlogPostPostTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Standard Blog Post Page [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/pageBlogPost) */
export type PageBlogPostPublishedDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Standard Blog Post Page [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/pageBlogPost) */
export type PageBlogPostSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** Standard Blog Post Page [See type definition](https://app.contentful.com/spaces/r4709jmexbbv/content_types/pageBlogPost) */
export type PageBlogPostSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageBlogPostCollection = {
  __typename?: 'PageBlogPostCollection';
  items: Array<Maybe<PageBlogPost>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageBlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postContent_contains?: InputMaybe<Scalars['String']['input']>;
  postContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  postContent_not_contains?: InputMaybe<Scalars['String']['input']>;
  postTitle?: InputMaybe<Scalars['String']['input']>;
  postTitle_contains?: InputMaybe<Scalars['String']['input']>;
  postTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  postTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postTitle_not?: InputMaybe<Scalars['String']['input']>;
  postTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  postTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageBlogPostLinkingCollections = {
  __typename?: 'PageBlogPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageBlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageBlogPostOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PostTitleAsc = 'postTitle_ASC',
  PostTitleDesc = 'postTitle_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageBlogPostPostContent = {
  __typename?: 'PageBlogPostPostContent';
  json: Scalars['JSON']['output'];
  links: PageBlogPostPostContentLinks;
};

export type PageBlogPostPostContentAssets = {
  __typename?: 'PageBlogPostPostContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageBlogPostPostContentEntries = {
  __typename?: 'PageBlogPostPostContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageBlogPostPostContentLinks = {
  __typename?: 'PageBlogPostPostContentLinks';
  assets: PageBlogPostPostContentAssets;
  entries: PageBlogPostPostContentEntries;
  resources: PageBlogPostPostContentResources;
};

export type PageBlogPostPostContentResources = {
  __typename?: 'PageBlogPostPostContentResources';
  block: Array<PageBlogPostPostContentResourcesBlock>;
  hyperlink: Array<PageBlogPostPostContentResourcesHyperlink>;
  inline: Array<PageBlogPostPostContentResourcesInline>;
};

export type PageBlogPostPostContentResourcesBlock = ResourceLink & {
  __typename?: 'PageBlogPostPostContentResourcesBlock';
  sys: ResourceSys;
};

export type PageBlogPostPostContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PageBlogPostPostContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PageBlogPostPostContentResourcesInline = ResourceLink & {
  __typename?: 'PageBlogPostPostContentResourcesInline';
  sys: ResourceSys;
};

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentSeo?: Maybe<ComponentSeo>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPost?: Maybe<PageBlogPost>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentSeoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryPageBlogPostArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageBlogPostFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfComponentSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  index?: InputMaybe<Scalars['Boolean']['input']>;
  index_exists?: InputMaybe<Scalars['Boolean']['input']>;
  index_not?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  robots?: InputMaybe<Scalars['Boolean']['input']>;
  robots_exists?: InputMaybe<Scalars['Boolean']['input']>;
  robots_not?: InputMaybe<Scalars['Boolean']['input']>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoDescription_contains?: InputMaybe<Scalars['String']['input']>;
  seoDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoDescription_not?: InputMaybe<Scalars['String']['input']>;
  seoDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  seoDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
  seoTitle_contains?: InputMaybe<Scalars['String']['input']>;
  seoTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoTitle_not?: InputMaybe<Scalars['String']['input']>;
  seoTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  seoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ImaageFragmentFragment = { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null };

export type SeoFragmentFragment = { __typename?: 'ComponentSeo', seoTitle?: string | null, seoDescription?: string | null, sys: { __typename?: 'Sys', id: string }, seoImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null } | null };

export type GetPageBlogPostQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPageBlogPostQuery = { __typename?: 'Query', pageBlogPostCollection?: { __typename?: 'PageBlogPostCollection', items: Array<{ __typename?: 'PageBlogPost', internalName?: string | null, slug?: string | null, postTitle?: string | null, publishedDate?: any | null, sys: { __typename?: 'Sys', id: string }, postContent?: { __typename?: 'PageBlogPostPostContent', json: any } | null, featuredImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null } | null, seo?: { __typename?: 'ComponentSeo', seoTitle?: string | null, seoDescription?: string | null, sys: { __typename?: 'Sys', id: string }, seoImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null } | null } | null } | null> } | null };

export const ImaageFragmentFragmentDoc = gql`
    fragment ImaageFragment on Asset {
  url
  title
  description
}
    `;
export const SeoFragmentFragmentDoc = gql`
    fragment SeoFragment on ComponentSeo {
  sys {
    id
  }
  seoTitle
  seoDescription
  seoImage {
    ...ImaageFragment
  }
}
    `;
export const GetPageBlogPostDocument = gql`
    query getPageBlogPost($locale: String, $preview: Boolean, $slug: String) {
  pageBlogPostCollection(locale: $locale, preview: $preview, where: {slug: $slug}) {
    items {
      sys {
        id
      }
      internalName
      slug
      postTitle
      postContent {
        json
      }
      featuredImage {
        ...ImaageFragment
      }
      publishedDate
      seo {
        ...SeoFragment
      }
    }
  }
}
    ${ImaageFragmentFragmentDoc}
${SeoFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const GetPageBlogPostDocumentString = print(GetPageBlogPostDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getPageBlogPost(variables?: GetPageBlogPostQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetPageBlogPostQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetPageBlogPostQuery>(GetPageBlogPostDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPageBlogPost', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Entry: ( Omit<ComponentSeo, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentSeoLinkingCollections']> } ) | ( Omit<PageBlogPost, 'linkedFrom' | 'postContent' | 'seo'> & { linkedFrom?: Maybe<_RefType['PageBlogPostLinkingCollections']>, postContent?: Maybe<_RefType['PageBlogPostPostContent']>, seo?: Maybe<_RefType['ComponentSeo']> } );
  ResourceLink: ( PageBlogPostPostContentResourcesBlock ) | ( PageBlogPostPostContentResourcesHyperlink ) | ( PageBlogPostPostContentResourcesInline );
  _Node: ( Omit<ComponentSeo, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentSeoLinkingCollections']> } ) | ( Omit<PageBlogPost, 'linkedFrom' | 'postContent' | 'seo'> & { linkedFrom?: Maybe<_RefType['PageBlogPostLinkingCollections']>, postContent?: Maybe<_RefType['PageBlogPostPostContent']>, seo?: Maybe<_RefType['ComponentSeo']> } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Asset: ResolverTypeWrapper<Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['AssetLinkingCollections']> }>;
  AssetCollection: ResolverTypeWrapper<AssetCollection>;
  AssetFilter: AssetFilter;
  AssetLinkingCollections: ResolverTypeWrapper<Omit<AssetLinkingCollections, 'componentSeoCollection' | 'entryCollection' | 'pageBlogPostCollection'> & { componentSeoCollection?: Maybe<ResolversTypes['ComponentSeoCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversTypes['PageBlogPostCollection']> }>;
  AssetOrder: AssetOrder;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ComponentSeo: ResolverTypeWrapper<Omit<ComponentSeo, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['ComponentSeoLinkingCollections']> }>;
  ComponentSeoCollection: ResolverTypeWrapper<Omit<ComponentSeoCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentSeo']>> }>;
  ComponentSeoFilter: ComponentSeoFilter;
  ComponentSeoLinkingCollections: ResolverTypeWrapper<Omit<ComponentSeoLinkingCollections, 'entryCollection' | 'pageBlogPostCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversTypes['PageBlogPostCollection']> }>;
  ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder: ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder;
  ComponentSeoOrder: ComponentSeoOrder;
  ContentfulMetadata: ResolverTypeWrapper<ContentfulMetadata>;
  ContentfulMetadataConceptsDescendantsFilter: ContentfulMetadataConceptsDescendantsFilter;
  ContentfulMetadataConceptsFilter: ContentfulMetadataConceptsFilter;
  ContentfulMetadataFilter: ContentfulMetadataFilter;
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
  ContentfulTag: ResolverTypeWrapper<ContentfulTag>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Dimension: ResolverTypeWrapper<Scalars['Dimension']['output']>;
  Entry: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Entry']>;
  EntryCollection: ResolverTypeWrapper<Omit<EntryCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Entry']>> }>;
  EntryFilter: EntryFilter;
  EntryOrder: EntryOrder;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  HexColor: ResolverTypeWrapper<Scalars['HexColor']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImageFormat: ImageFormat;
  ImageResizeFocus: ImageResizeFocus;
  ImageResizeStrategy: ImageResizeStrategy;
  ImageTransformOptions: ImageTransformOptions;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  PageBlogPost: ResolverTypeWrapper<Omit<PageBlogPost, 'linkedFrom' | 'postContent' | 'seo'> & { linkedFrom?: Maybe<ResolversTypes['PageBlogPostLinkingCollections']>, postContent?: Maybe<ResolversTypes['PageBlogPostPostContent']>, seo?: Maybe<ResolversTypes['ComponentSeo']> }>;
  PageBlogPostCollection: ResolverTypeWrapper<Omit<PageBlogPostCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageBlogPost']>> }>;
  PageBlogPostFilter: PageBlogPostFilter;
  PageBlogPostLinkingCollections: ResolverTypeWrapper<Omit<PageBlogPostLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  PageBlogPostOrder: PageBlogPostOrder;
  PageBlogPostPostContent: ResolverTypeWrapper<Omit<PageBlogPostPostContent, 'links'> & { links: ResolversTypes['PageBlogPostPostContentLinks'] }>;
  PageBlogPostPostContentAssets: ResolverTypeWrapper<PageBlogPostPostContentAssets>;
  PageBlogPostPostContentEntries: ResolverTypeWrapper<Omit<PageBlogPostPostContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversTypes['Entry']>>, hyperlink: Array<Maybe<ResolversTypes['Entry']>>, inline: Array<Maybe<ResolversTypes['Entry']>> }>;
  PageBlogPostPostContentLinks: ResolverTypeWrapper<Omit<PageBlogPostPostContentLinks, 'assets' | 'entries'> & { assets: ResolversTypes['PageBlogPostPostContentAssets'], entries: ResolversTypes['PageBlogPostPostContentEntries'] }>;
  PageBlogPostPostContentResources: ResolverTypeWrapper<PageBlogPostPostContentResources>;
  PageBlogPostPostContentResourcesBlock: ResolverTypeWrapper<PageBlogPostPostContentResourcesBlock>;
  PageBlogPostPostContentResourcesHyperlink: ResolverTypeWrapper<PageBlogPostPostContentResourcesHyperlink>;
  PageBlogPostPostContentResourcesInline: ResolverTypeWrapper<PageBlogPostPostContentResourcesInline>;
  Quality: ResolverTypeWrapper<Scalars['Quality']['output']>;
  Query: ResolverTypeWrapper<{}>;
  ResourceLink: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ResourceLink']>;
  ResourceSys: ResolverTypeWrapper<ResourceSys>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Sys: ResolverTypeWrapper<Sys>;
  SysFilter: SysFilter;
  TaxonomyConcept: ResolverTypeWrapper<TaxonomyConcept>;
  _Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['_Node']>;
  cfComponentSeoNestedFilter: CfComponentSeoNestedFilter;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Asset: Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['AssetLinkingCollections']> };
  AssetCollection: AssetCollection;
  AssetFilter: AssetFilter;
  AssetLinkingCollections: Omit<AssetLinkingCollections, 'componentSeoCollection' | 'entryCollection' | 'pageBlogPostCollection'> & { componentSeoCollection?: Maybe<ResolversParentTypes['ComponentSeoCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversParentTypes['PageBlogPostCollection']> };
  Boolean: Scalars['Boolean']['output'];
  ComponentSeo: Omit<ComponentSeo, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['ComponentSeoLinkingCollections']> };
  ComponentSeoCollection: Omit<ComponentSeoCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentSeo']>> };
  ComponentSeoFilter: ComponentSeoFilter;
  ComponentSeoLinkingCollections: Omit<ComponentSeoLinkingCollections, 'entryCollection' | 'pageBlogPostCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversParentTypes['PageBlogPostCollection']> };
  ContentfulMetadata: ContentfulMetadata;
  ContentfulMetadataConceptsDescendantsFilter: ContentfulMetadataConceptsDescendantsFilter;
  ContentfulMetadataConceptsFilter: ContentfulMetadataConceptsFilter;
  ContentfulMetadataFilter: ContentfulMetadataFilter;
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
  ContentfulTag: ContentfulTag;
  DateTime: Scalars['DateTime']['output'];
  Dimension: Scalars['Dimension']['output'];
  Entry: ResolversInterfaceTypes<ResolversParentTypes>['Entry'];
  EntryCollection: Omit<EntryCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Entry']>> };
  EntryFilter: EntryFilter;
  Float: Scalars['Float']['output'];
  HexColor: Scalars['HexColor']['output'];
  ID: Scalars['ID']['output'];
  ImageTransformOptions: ImageTransformOptions;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  PageBlogPost: Omit<PageBlogPost, 'linkedFrom' | 'postContent' | 'seo'> & { linkedFrom?: Maybe<ResolversParentTypes['PageBlogPostLinkingCollections']>, postContent?: Maybe<ResolversParentTypes['PageBlogPostPostContent']>, seo?: Maybe<ResolversParentTypes['ComponentSeo']> };
  PageBlogPostCollection: Omit<PageBlogPostCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageBlogPost']>> };
  PageBlogPostFilter: PageBlogPostFilter;
  PageBlogPostLinkingCollections: Omit<PageBlogPostLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  PageBlogPostPostContent: Omit<PageBlogPostPostContent, 'links'> & { links: ResolversParentTypes['PageBlogPostPostContentLinks'] };
  PageBlogPostPostContentAssets: PageBlogPostPostContentAssets;
  PageBlogPostPostContentEntries: Omit<PageBlogPostPostContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversParentTypes['Entry']>>, hyperlink: Array<Maybe<ResolversParentTypes['Entry']>>, inline: Array<Maybe<ResolversParentTypes['Entry']>> };
  PageBlogPostPostContentLinks: Omit<PageBlogPostPostContentLinks, 'assets' | 'entries'> & { assets: ResolversParentTypes['PageBlogPostPostContentAssets'], entries: ResolversParentTypes['PageBlogPostPostContentEntries'] };
  PageBlogPostPostContentResources: PageBlogPostPostContentResources;
  PageBlogPostPostContentResourcesBlock: PageBlogPostPostContentResourcesBlock;
  PageBlogPostPostContentResourcesHyperlink: PageBlogPostPostContentResourcesHyperlink;
  PageBlogPostPostContentResourcesInline: PageBlogPostPostContentResourcesInline;
  Quality: Scalars['Quality']['output'];
  Query: {};
  ResourceLink: ResolversInterfaceTypes<ResolversParentTypes>['ResourceLink'];
  ResourceSys: ResourceSys;
  String: Scalars['String']['output'];
  Sys: Sys;
  SysFilter: SysFilter;
  TaxonomyConcept: TaxonomyConcept;
  _Node: ResolversInterfaceTypes<ResolversParentTypes>['_Node'];
  cfComponentSeoNestedFilter: CfComponentSeoNestedFilter;
};

export type ContentSourceMapsDirectiveArgs = { };

export type ContentSourceMapsDirectiveResolver<Result, Parent, ContextType = any, Args = ContentSourceMapsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetContentTypeArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetDescriptionArgs>>;
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetFileNameArgs>>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetHeightArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['AssetLinkingCollections']>, ParentType, ContextType, Partial<AssetLinkedFromArgs>>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetSizeArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetTitleArgs>>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetUrlArgs>>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetWidthArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetCollection'] = ResolversParentTypes['AssetCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetLinkingCollections'] = ResolversParentTypes['AssetLinkingCollections']> = {
  componentSeoCollection?: Resolver<Maybe<ResolversTypes['ComponentSeoCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentSeoCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSeoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSeo'] = ResolversParentTypes['ComponentSeo']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<ComponentSeoIndexArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentSeoLinkingCollections']>, ParentType, ContextType, Partial<ComponentSeoLinkedFromArgs>>;
  robots?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<ComponentSeoRobotsArgs>>;
  seoDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoSeoDescriptionArgs>>;
  seoImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentSeoSeoImageArgs>>;
  seoTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoSeoTitleArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSeoCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSeoCollection'] = ResolversParentTypes['ComponentSeoCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentSeo']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSeoLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSeoLinkingCollections'] = ResolversParentTypes['ComponentSeoLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulMetadata'] = ResolversParentTypes['ContentfulMetadata']> = {
  concepts?: Resolver<Array<Maybe<ResolversTypes['TaxonomyConcept']>>, ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['ContentfulTag']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulTag'] = ResolversParentTypes['ContentfulTag']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DimensionScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Dimension'], any> {
  name: 'Dimension';
}

export type EntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry']> = {
  __resolveType: TypeResolveFn<'ComponentSeo' | 'PageBlogPost', ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
};

export type EntryCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryCollection'] = ResolversParentTypes['EntryCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HexColorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColor'], any> {
  name: 'HexColor';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type PageBlogPostResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPost'] = ResolversParentTypes['PageBlogPost']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  featuredImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<PageBlogPostFeaturedImageArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBlogPostInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['PageBlogPostLinkingCollections']>, ParentType, ContextType, Partial<PageBlogPostLinkedFromArgs>>;
  postContent?: Resolver<Maybe<ResolversTypes['PageBlogPostPostContent']>, ParentType, ContextType, Partial<PageBlogPostPostContentArgs>>;
  postTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBlogPostPostTitleArgs>>;
  publishedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, Partial<PageBlogPostPublishedDateArgs>>;
  seo?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, Partial<PageBlogPostSeoArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBlogPostSlugArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostCollection'] = ResolversParentTypes['PageBlogPostCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PageBlogPost']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostLinkingCollections'] = ResolversParentTypes['PageBlogPostLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<PageBlogPostLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostPostContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostPostContent'] = ResolversParentTypes['PageBlogPostPostContent']> = {
  json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['PageBlogPostPostContentLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostPostContentAssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostPostContentAssets'] = ResolversParentTypes['PageBlogPostPostContentAssets']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostPostContentEntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostPostContentEntries'] = ResolversParentTypes['PageBlogPostPostContentEntries']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  inline?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostPostContentLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostPostContentLinks'] = ResolversParentTypes['PageBlogPostPostContentLinks']> = {
  assets?: Resolver<ResolversTypes['PageBlogPostPostContentAssets'], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['PageBlogPostPostContentEntries'], ParentType, ContextType>;
  resources?: Resolver<ResolversTypes['PageBlogPostPostContentResources'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostPostContentResourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostPostContentResources'] = ResolversParentTypes['PageBlogPostPostContentResources']> = {
  block?: Resolver<Array<ResolversTypes['PageBlogPostPostContentResourcesBlock']>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<ResolversTypes['PageBlogPostPostContentResourcesHyperlink']>, ParentType, ContextType>;
  inline?: Resolver<Array<ResolversTypes['PageBlogPostPostContentResourcesInline']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostPostContentResourcesBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostPostContentResourcesBlock'] = ResolversParentTypes['PageBlogPostPostContentResourcesBlock']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostPostContentResourcesHyperlinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostPostContentResourcesHyperlink'] = ResolversParentTypes['PageBlogPostPostContentResourcesHyperlink']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostPostContentResourcesInlineResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostPostContentResourcesInline'] = ResolversParentTypes['PageBlogPostPostContentResourcesInline']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface QualityScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Quality'], any> {
  name: 'Quality';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _node?: Resolver<Maybe<ResolversTypes['_Node']>, ParentType, ContextType, RequireFields<Query_NodeArgs, 'id'>>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
  assetCollection?: Resolver<Maybe<ResolversTypes['AssetCollection']>, ParentType, ContextType, RequireFields<QueryAssetCollectionArgs, 'limit' | 'skip'>>;
  componentSeo?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, RequireFields<QueryComponentSeoArgs, 'id'>>;
  componentSeoCollection?: Resolver<Maybe<ResolversTypes['ComponentSeoCollection']>, ParentType, ContextType, RequireFields<QueryComponentSeoCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<QueryEntryCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPost?: Resolver<Maybe<ResolversTypes['PageBlogPost']>, ParentType, ContextType, RequireFields<QueryPageBlogPostArgs, 'id'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<QueryPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
};

export type ResourceLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceLink'] = ResolversParentTypes['ResourceLink']> = {
  __resolveType: TypeResolveFn<'PageBlogPostPostContentResourcesBlock' | 'PageBlogPostPostContentResourcesHyperlink' | 'PageBlogPostPostContentResourcesInline', ParentType, ContextType>;
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
};

export type ResourceSysResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceSys'] = ResolversParentTypes['ResourceSys']> = {
  linkType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  urn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SysResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sys'] = ResolversParentTypes['Sys']> = {
  environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstPublishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedVersion?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spaceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxonomyConceptResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxonomyConcept'] = ResolversParentTypes['TaxonomyConcept']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Node'] = ResolversParentTypes['_Node']> = {
  __resolveType: TypeResolveFn<'ComponentSeo' | 'PageBlogPost', ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Asset?: AssetResolvers<ContextType>;
  AssetCollection?: AssetCollectionResolvers<ContextType>;
  AssetLinkingCollections?: AssetLinkingCollectionsResolvers<ContextType>;
  ComponentSeo?: ComponentSeoResolvers<ContextType>;
  ComponentSeoCollection?: ComponentSeoCollectionResolvers<ContextType>;
  ComponentSeoLinkingCollections?: ComponentSeoLinkingCollectionsResolvers<ContextType>;
  ContentfulMetadata?: ContentfulMetadataResolvers<ContextType>;
  ContentfulTag?: ContentfulTagResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Dimension?: GraphQLScalarType;
  Entry?: EntryResolvers<ContextType>;
  EntryCollection?: EntryCollectionResolvers<ContextType>;
  HexColor?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  PageBlogPost?: PageBlogPostResolvers<ContextType>;
  PageBlogPostCollection?: PageBlogPostCollectionResolvers<ContextType>;
  PageBlogPostLinkingCollections?: PageBlogPostLinkingCollectionsResolvers<ContextType>;
  PageBlogPostPostContent?: PageBlogPostPostContentResolvers<ContextType>;
  PageBlogPostPostContentAssets?: PageBlogPostPostContentAssetsResolvers<ContextType>;
  PageBlogPostPostContentEntries?: PageBlogPostPostContentEntriesResolvers<ContextType>;
  PageBlogPostPostContentLinks?: PageBlogPostPostContentLinksResolvers<ContextType>;
  PageBlogPostPostContentResources?: PageBlogPostPostContentResourcesResolvers<ContextType>;
  PageBlogPostPostContentResourcesBlock?: PageBlogPostPostContentResourcesBlockResolvers<ContextType>;
  PageBlogPostPostContentResourcesHyperlink?: PageBlogPostPostContentResourcesHyperlinkResolvers<ContextType>;
  PageBlogPostPostContentResourcesInline?: PageBlogPostPostContentResourcesInlineResolvers<ContextType>;
  Quality?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  ResourceLink?: ResourceLinkResolvers<ContextType>;
  ResourceSys?: ResourceSysResolvers<ContextType>;
  Sys?: SysResolvers<ContextType>;
  TaxonomyConcept?: TaxonomyConceptResolvers<ContextType>;
  _Node?: _NodeResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  contentSourceMaps?: ContentSourceMapsDirectiveResolver<any, any, ContextType>;
};
