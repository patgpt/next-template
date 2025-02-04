import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentCtaSkeleton } from "./TypeComponentCta";

/**
 * Fields type definition for content type 'TypeComponentHero'
 * @name TypeComponentHeroFields
 * @type {TypeComponentHeroFields}
 * @memberof TypeComponentHero
 */
export interface TypeComponentHeroFields {
    /**
     * Field type definition for field 'internalName' (Internal Name)
     * @name Internal Name
     * @localized false
     */
    internalName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'heroImage' (heroImage)
     * @name heroImage
     * @localized false
     */
    heroImage: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'heading' (Heading)
     * @name Heading
     * @localized true
     */
    heading: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'subHeading' (SubHeading)
     * @name SubHeading
     * @localized true
     */
    subHeading: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'ctaFields' (CTA Fields)
     * @name CTA Fields
     * @localized false
     */
    ctaFields: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeComponentCtaSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'componentHero' (🦸 Component: Hero)
 * @name TypeComponentHeroSkeleton
 * @type {TypeComponentHeroSkeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T08:18:47.993Z
 * @version 5
 */
export type TypeComponentHeroSkeleton = EntrySkeletonType<TypeComponentHeroFields, "componentHero">;
/**
 * Entry type definition for content type 'componentHero' (🦸 Component: Hero)
 * @name TypeComponentHero
 * @type {TypeComponentHero}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T08:18:47.993Z
 * @version 5
 */
export type TypeComponentHero<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentHeroSkeleton, Modifiers, Locales>;

export function isTypeComponentHero<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeComponentHero<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'componentHero'
}

export type TypeComponentHeroWithoutLinkResolutionResponse = TypeComponentHero<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentHeroWithoutUnresolvableLinksResponse = TypeComponentHero<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentHeroWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentHero<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentHeroWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentHero<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentHeroWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentHero<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
