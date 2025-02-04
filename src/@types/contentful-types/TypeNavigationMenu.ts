import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

/**
 * Fields type definition for content type 'TypeNavigationMenu'
 * @name TypeNavigationMenuFields
 * @type {TypeNavigationMenuFields}
 * @memberof TypeNavigationMenu
 */
export interface TypeNavigationMenuFields {
    /**
     * Field type definition for field 'internalName' (Internal Name)
     * @name Internal Name
     * @localized false
     */
    internalName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'navigationMenu' (Navigation Menu)
     * @name Navigation Menu
     * @localized false
     */
    navigationMenu: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    /**
     * Field type definition for field 'position' (Position)
     * @name Position
     * @localized false
     */
    position?: EntryFieldTypes.Symbol<"Footer" | "Header">;
}

/**
 * Entry skeleton type definition for content type 'navigationMenu' (🧭 Navigation Menu)
 * @name TypeNavigationMenuSkeleton
 * @type {TypeNavigationMenuSkeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T15:16:10.547Z
 * @version 3
 */
export type TypeNavigationMenuSkeleton = EntrySkeletonType<TypeNavigationMenuFields, "navigationMenu">;
/**
 * Entry type definition for content type 'navigationMenu' (🧭 Navigation Menu)
 * @name TypeNavigationMenu
 * @type {TypeNavigationMenu}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T15:16:10.547Z
 * @version 3
 */
export type TypeNavigationMenu<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavigationMenuSkeleton, Modifiers, Locales>;

export function isTypeNavigationMenu<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeNavigationMenu<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'navigationMenu'
}

export type TypeNavigationMenuWithoutLinkResolutionResponse = TypeNavigationMenu<"WITHOUT_LINK_RESOLUTION">;
export type TypeNavigationMenuWithoutUnresolvableLinksResponse = TypeNavigationMenu<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeNavigationMenuWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeNavigationMenu<"WITH_ALL_LOCALES", Locales>;
export type TypeNavigationMenuWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeNavigationMenu<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeNavigationMenuWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeNavigationMenu<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
