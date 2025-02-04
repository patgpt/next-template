import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavigationLinkSkeleton } from "./TypeNavigationLink";

/**
 * Fields type definition for content type 'TypeSettings'
 * @name TypeSettingsFields
 * @type {TypeSettingsFields}
 * @memberof TypeSettings
 */
export interface TypeSettingsFields {
    /**
     * Field type definition for field 'internalName' (Internal Name)
     * @name Internal Name
     * @localized false
     */
    internalName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'siteTitle' (Site Title)
     * @name Site Title
     * @localized false
     */
    siteTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'siteDescription' (Site Description)
     * @name Site Description
     * @localized true
     */
    siteDescription: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'logo' (Logo)
     * @name Logo
     * @localized false
     */
    logo?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'headerNavigation' (Header Navigation)
     * @name Header Navigation
     * @localized false
     */
    headerNavigation: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    /**
     * Field type definition for field 'footerServicesNavigation' (Footer Services Navigation)
     * @name Footer Services Navigation
     * @localized false
     */
    footerServicesNavigation: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    /**
     * Field type definition for field 'footerLegalNavigation' (Footer Legal Navigation)
     * @name Footer Legal Navigation
     * @localized false
     */
    footerLegalNavigation: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
    /**
     * Field type definition for field 'footerCopyrightText' (Footer Copyright Text)
     * @name Footer Copyright Text
     * @localized true
     */
    footerCopyrightText: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'footerSiteNavigation' (Footer Site Navigation)
     * @name Footer Site Navigation
     * @localized false
     */
    footerSiteNavigation?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationLinkSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'settings' (⚙️ Settings)
 * @name TypeSettingsSkeleton
 * @type {TypeSettingsSkeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-23T05:34:49.396Z
 * @version 3
 */
export type TypeSettingsSkeleton = EntrySkeletonType<TypeSettingsFields, "settings">;
/**
 * Entry type definition for content type 'settings' (⚙️ Settings)
 * @name TypeSettings
 * @type {TypeSettings}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-23T05:34:49.396Z
 * @version 3
 */
export type TypeSettings<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSettingsSkeleton, Modifiers, Locales>;

export function isTypeSettings<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSettings<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'settings'
}

export type TypeSettingsWithoutLinkResolutionResponse = TypeSettings<"WITHOUT_LINK_RESOLUTION">;
export type TypeSettingsWithoutUnresolvableLinksResponse = TypeSettings<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSettingsWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSettings<"WITH_ALL_LOCALES", Locales>;
export type TypeSettingsWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSettings<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSettingsWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSettings<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
