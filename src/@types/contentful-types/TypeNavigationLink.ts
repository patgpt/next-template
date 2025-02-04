import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeNavigationLink'
 * @name TypeNavigationLinkFields
 * @type {TypeNavigationLinkFields}
 * @memberof TypeNavigationLink
 */
export interface TypeNavigationLinkFields {
    /**
     * Field type definition for field 'internalName' (Internal Name)
     * @name Internal Name
     * @localized false
     */
    internalName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'href' (Href)
     * @name Href
     * @localized true
     */
    href: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'navigationLink' (🔗 Component: Navigation Link)
 * @name TypeNavigationLinkSkeleton
 * @type {TypeNavigationLinkSkeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T15:11:15.793Z
 * @version 3
 */
export type TypeNavigationLinkSkeleton = EntrySkeletonType<TypeNavigationLinkFields, "navigationLink">;
/**
 * Entry type definition for content type 'navigationLink' (🔗 Component: Navigation Link)
 * @name TypeNavigationLink
 * @type {TypeNavigationLink}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T15:11:15.793Z
 * @version 3
 */
export type TypeNavigationLink<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavigationLinkSkeleton, Modifiers, Locales>;

export function isTypeNavigationLink<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeNavigationLink<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'navigationLink'
}

export type TypeNavigationLinkWithoutLinkResolutionResponse = TypeNavigationLink<"WITHOUT_LINK_RESOLUTION">;
export type TypeNavigationLinkWithoutUnresolvableLinksResponse = TypeNavigationLink<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeNavigationLinkWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeNavigationLink<"WITH_ALL_LOCALES", Locales>;
export type TypeNavigationLinkWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeNavigationLink<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeNavigationLinkWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeNavigationLink<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
