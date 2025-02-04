import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeComponentSeo'
 * @name TypeComponentSeoFields
 * @type {TypeComponentSeoFields}
 * @memberof TypeComponentSeo
 */
export interface TypeComponentSeoFields {
    /**
     * Field type definition for field 'internalName' (Internal name)
     * @name Internal name
     * @localized false
     * @summary This field is only for internal use, and lets us easily recognise an entry
     */
    internalName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'pageTitle' (Page title)
     * @name Page title
     * @localized true
     * @summary Sets the meta title of the page.
     */
    pageTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'pageDescription' (Page description)
     * @name Page description
     * @localized true
     * @summary Sets the page meta description.
     */
    pageDescription?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'canonicalUrl' (Canonical URL)
     * @name Canonical URL
     * @localized false
     * @summary Consolidates duplicate URLs.
     */
    canonicalUrl?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'nofollow' (nofollow)
     * @name nofollow
     * @localized false
     * @summary When set to "true", disallows search engines from crawling the links on this page.
     */
    nofollow: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'noindex' (noindex)
     * @name noindex
     * @localized false
     * @summary When set to "true", disallows search engines from indexing this page.
     */
    noindex: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'shareImages' (Share images)
     * @name Share images
     * @localized false
     * @summary Images that will be used in share previews on social media and in search results.
     */
    shareImages?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

/**
 * Entry skeleton type definition for content type 'componentSeo' (💎 component - SEO)
 * @name TypeComponentSeoSkeleton
 * @type {TypeComponentSeoSkeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T05:53:36.141Z
 * @version 1
 */
export type TypeComponentSeoSkeleton = EntrySkeletonType<TypeComponentSeoFields, "componentSeo">;
/**
 * Entry type definition for content type 'componentSeo' (💎 component - SEO)
 * @name TypeComponentSeo
 * @type {TypeComponentSeo}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T05:53:36.141Z
 * @version 1
 */
export type TypeComponentSeo<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentSeoSkeleton, Modifiers, Locales>;

export function isTypeComponentSeo<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeComponentSeo<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'componentSeo'
}

export type TypeComponentSeoWithoutLinkResolutionResponse = TypeComponentSeo<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentSeoWithoutUnresolvableLinksResponse = TypeComponentSeo<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentSeoWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentSeo<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentSeoWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentSeo<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentSeoWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentSeo<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
