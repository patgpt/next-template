import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentAuthorSkeleton } from "./TypeComponentAuthor";
import type { TypeComponentSeoSkeleton } from "./TypeComponentSeo";

/**
 * Fields type definition for content type 'TypePageBlogPost'
 * @name TypePageBlogPostFields
 * @type {TypePageBlogPostFields}
 * @memberof TypePageBlogPost
 */
export interface TypePageBlogPostFields {
    /**
     * Field type definition for field 'internalName' (Internal name)
     * @name Internal name
     * @localized false
     * @summary This field is only for internal use, and lets us easily recognise an entry
     */
    internalName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'seoFields' (SEO fields)
     * @name SEO fields
     * @localized false
     * @summary These are the SEO fields used for this specific page
     */
    seoFields?: EntryFieldTypes.EntryLink<TypeComponentSeoSkeleton>;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized false
     * @summary The slug is the part of the URL on which page will be available on https://yourwebsite.com/your-slug-goes-here
     */
    slug: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'author' (Author)
     * @name Author
     * @localized false
     * @summary The author of the blog article
     */
    author?: EntryFieldTypes.EntryLink<TypeComponentAuthorSkeleton>;
    /**
     * Field type definition for field 'publishedDate' (Published date)
     * @name Published date
     * @localized false
     * @summary Date when the blog post was published
     */
    publishedDate: EntryFieldTypes.Date;
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     * @summary The title of the blog post
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'shortDescription' (Subtitle)
     * @name Subtitle
     * @localized true
     * @summary The subtitle of the blog post
     */
    shortDescription?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'featuredImage' (Featured image)
     * @name Featured image
     * @localized false
     * @summary This image appears at the top of the blog post page and is also included in tiles that link to the blog post
     */
    featuredImage: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'content' (Content)
     * @name Content
     * @localized true
     * @summary This rich text field makes up text of the blog post
     */
    content: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'relatedBlogPosts' (Related blog posts)
     * @name Related blog posts
     * @localized false
     */
    relatedBlogPosts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageBlogPostSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'pageBlogPost' (📄 page - Blog post)
 * @name TypePageBlogPostSkeleton
 * @type {TypePageBlogPostSkeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T05:53:36.177Z
 * @version 1
 */
export type TypePageBlogPostSkeleton = EntrySkeletonType<TypePageBlogPostFields, "pageBlogPost">;
/**
 * Entry type definition for content type 'pageBlogPost' (📄 page - Blog post)
 * @name TypePageBlogPost
 * @type {TypePageBlogPost}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T05:53:36.177Z
 * @version 1
 */
export type TypePageBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageBlogPostSkeleton, Modifiers, Locales>;

export function isTypePageBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePageBlogPost<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pageBlogPost'
}

export type TypePageBlogPostWithoutLinkResolutionResponse = TypePageBlogPost<"WITHOUT_LINK_RESOLUTION">;
export type TypePageBlogPostWithoutUnresolvableLinksResponse = TypePageBlogPost<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePageBlogPostWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePageBlogPost<"WITH_ALL_LOCALES", Locales>;
export type TypePageBlogPostWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePageBlogPost<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePageBlogPostWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePageBlogPost<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
