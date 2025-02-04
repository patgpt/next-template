import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeComponentCta'
 * @name TypeComponentCtaFields
 * @type {TypeComponentCtaFields}
 * @memberof TypeComponentCta
 */
export interface TypeComponentCtaFields {
    /**
     * Field type definition for field 'internalName' (Internal Name)
     * @name Internal Name
     * @localized false
     */
    internalName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'icon' (Icon)
     * @name Icon
     * @localized false
     */
    icon?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'ctaText' (CTA Text)
     * @name CTA Text
     * @localized true
     */
    ctaText?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'ctaLink' (CTA Link)
     * @name CTA Link
     * @localized false
     */
    ctaLink: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'componentCta' (📢 Component: CTA)
 * @name TypeComponentCtaSkeleton
 * @type {TypeComponentCtaSkeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T08:23:18.600Z
 * @version 1
 */
export type TypeComponentCtaSkeleton = EntrySkeletonType<TypeComponentCtaFields, "componentCta">;
/**
 * Entry type definition for content type 'componentCta' (📢 Component: CTA)
 * @name TypeComponentCta
 * @type {TypeComponentCta}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T08:23:18.600Z
 * @version 1
 */
export type TypeComponentCta<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentCtaSkeleton, Modifiers, Locales>;

export function isTypeComponentCta<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeComponentCta<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'componentCta'
}

export type TypeComponentCtaWithoutLinkResolutionResponse = TypeComponentCta<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentCtaWithoutUnresolvableLinksResponse = TypeComponentCta<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentCtaWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentCta<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentCtaWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentCta<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentCtaWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentCta<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
