import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentSeoSkeleton } from "./TypeComponentSeo";

/**
 * Fields type definition for content type 'TypePageDefault'
 * @name TypePageDefaultFields
 * @type {TypePageDefaultFields}
 * @memberof TypePageDefault
 */
export interface TypePageDefaultFields {
    /**
     * Field type definition for field 'internalName' (Internal Name)
     * @name Internal Name
     * @localized false
     */
    internalName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'pageSeo' (Page SEO)
     * @name Page SEO
     * @localized false
     */
    pageSeo: EntryFieldTypes.EntryLink<TypeComponentSeoSkeleton>;
    /**
     * Field type definition for field 'pageTitle' (Page Title)
     * @name Page Title
     * @localized true
     */
    pageTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'pageContent' (Page Content)
     * @name Page Content
     * @localized true
     */
    pageContent: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized true
     */
    slug: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'pageDefault' (📄 page - Default)
 * @name TypePageDefaultSkeleton
 * @type {TypePageDefaultSkeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-23T05:48:51.748Z
 * @version 3
 */
export type TypePageDefaultSkeleton = EntrySkeletonType<TypePageDefaultFields, "pageDefault">;
/**
 * Entry type definition for content type 'pageDefault' (📄 page - Default)
 * @name TypePageDefault
 * @type {TypePageDefault}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-23T05:48:51.748Z
 * @version 3
 */
export type TypePageDefault<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageDefaultSkeleton, Modifiers, Locales>;

export function isTypePageDefault<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePageDefault<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pageDefault'
}

export type TypePageDefaultWithoutLinkResolutionResponse = TypePageDefault<"WITHOUT_LINK_RESOLUTION">;
export type TypePageDefaultWithoutUnresolvableLinksResponse = TypePageDefault<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePageDefaultWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePageDefault<"WITH_ALL_LOCALES", Locales>;
export type TypePageDefaultWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePageDefault<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePageDefaultWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePageDefault<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
