import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeComponentRichImage'
 * @name TypeComponentRichImageFields
 * @type {TypeComponentRichImageFields}
 * @memberof TypeComponentRichImage
 */
export interface TypeComponentRichImageFields {
    /**
     * Field type definition for field 'internalName' (Internal name)
     * @name Internal name
     * @localized false
     * @summary This field is only for internal use, and lets us easily recognise an entry
     */
    internalName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'caption' (Caption)
     * @name Caption
     * @localized true
     * @summary Caption shown beneath the image
     */
    caption?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'fullWidth' (Full width)
     * @name Full width
     * @localized false
     * @summary This checkbox determines if the image should be the full width of the page, as opposed to fitting in the rich text block it was used in.
     */
    fullWidth?: EntryFieldTypes.Boolean;
}

/**
 * Entry skeleton type definition for content type 'componentRichImage' (💎 component - Rich image)
 * @name TypeComponentRichImageSkeleton
 * @type {TypeComponentRichImageSkeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T05:53:36.143Z
 * @version 1
 */
export type TypeComponentRichImageSkeleton = EntrySkeletonType<TypeComponentRichImageFields, "componentRichImage">;
/**
 * Entry type definition for content type 'componentRichImage' (💎 component - Rich image)
 * @name TypeComponentRichImage
 * @type {TypeComponentRichImage}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T05:53:36.143Z
 * @version 1
 */
export type TypeComponentRichImage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentRichImageSkeleton, Modifiers, Locales>;

export function isTypeComponentRichImage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeComponentRichImage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'componentRichImage'
}

export type TypeComponentRichImageWithoutLinkResolutionResponse = TypeComponentRichImage<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentRichImageWithoutUnresolvableLinksResponse = TypeComponentRichImage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentRichImageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentRichImage<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentRichImageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentRichImage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentRichImageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentRichImage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
