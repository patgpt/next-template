import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentSeoSkeleton } from "./TypeComponentSeo";

/**
 * Fields type definition for content type 'TypePageService'
 * @name TypePageServiceFields
 * @type {TypePageServiceFields}
 * @memberof TypePageService
 */
export interface TypePageServiceFields {
    /**
     * Field type definition for field 'internalName' (Internal Name)
     * @name Internal Name
     * @localized false
     */
    internalName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized true
     */
    slug: EntryFieldTypes.Symbol;
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
}

/**
 * Entry skeleton type definition for content type 'pageService' ( 📄 page - Service)
 * @name TypePageServiceSkeleton
 * @type {TypePageServiceSkeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-23T09:19:41.671Z
 * @version 3
 */
export type TypePageServiceSkeleton = EntrySkeletonType<TypePageServiceFields, "pageService">;
/**
 * Entry type definition for content type 'pageService' ( 📄 page - Service)
 * @name TypePageService
 * @type {TypePageService}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-23T09:19:41.671Z
 * @version 3
 */
export type TypePageService<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageServiceSkeleton, Modifiers, Locales>;

export function isTypePageService<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePageService<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pageService'
}

export type TypePageServiceWithoutLinkResolutionResponse = TypePageService<"WITHOUT_LINK_RESOLUTION">;
export type TypePageServiceWithoutUnresolvableLinksResponse = TypePageService<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePageServiceWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePageService<"WITH_ALL_LOCALES", Locales>;
export type TypePageServiceWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePageService<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePageServiceWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePageService<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
