import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentHeroSkeleton } from "./TypeComponentHero";
import type { TypeComponentSeoSkeleton } from "./TypeComponentSeo";
import type { TypePageBlogPostSkeleton } from "./TypePageBlogPost";

/**
 * Fields type definition for content type 'TypePageLanding'
 * @name TypePageLandingFields
 * @type {TypePageLandingFields}
 * @memberof TypePageLanding
 */
export interface TypePageLandingFields {
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
     * Field type definition for field 'hero' (Hero)
     * @name Hero
     * @localized false
     */
    hero: EntryFieldTypes.EntryLink<TypeComponentHeroSkeleton>;
    /**
     * Field type definition for field 'featuredBlogPost' (Featured blog post)
     * @name Featured blog post
     * @localized false
     * @summary This blog post is featured at the top of the landing page, displayed as a card
     */
    featuredBlogPost?: EntryFieldTypes.EntryLink<TypePageBlogPostSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'pageLanding' (📄 page - Landing)
 * @name TypePageLandingSkeleton
 * @type {TypePageLandingSkeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T05:53:36.534Z
 * @version 3
 */
export type TypePageLandingSkeleton = EntrySkeletonType<TypePageLandingFields, "pageLanding">;
/**
 * Entry type definition for content type 'pageLanding' (📄 page - Landing)
 * @name TypePageLanding
 * @type {TypePageLanding}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T05:53:36.534Z
 * @version 3
 */
export type TypePageLanding<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageLandingSkeleton, Modifiers, Locales>;

export function isTypePageLanding<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePageLanding<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pageLanding'
}

export type TypePageLandingWithoutLinkResolutionResponse = TypePageLanding<"WITHOUT_LINK_RESOLUTION">;
export type TypePageLandingWithoutUnresolvableLinksResponse = TypePageLanding<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePageLandingWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePageLanding<"WITH_ALL_LOCALES", Locales>;
export type TypePageLandingWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePageLanding<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePageLandingWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePageLanding<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
