import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeVq5Hs6vZcdFFqcGewQDi5'
 * @name TypeVq5Hs6vZcdFFqcGewQDi5Fields
 * @type {TypeVq5Hs6vZcdFFqcGewQDi5Fields}
 * @memberof TypeVq5Hs6vZcdFFqcGewQDi5
 */
export interface TypeVq5Hs6vZcdFFqcGewQDi5Fields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized true
     */
    description: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'url' (URL)
     * @name URL
     * @localized false
     */
    url?: EntryFieldTypes.Text;
}

/**
 * Entry skeleton type definition for content type 'Vq5Hs6vZcdFFqcGewQDi5' (Portfolio Item)
 * @name TypeVq5Hs6vZcdFFqcGewQDi5Skeleton
 * @type {TypeVq5Hs6vZcdFFqcGewQDi5Skeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-25T05:52:34.261Z
 * @version 2
 */
export type TypeVq5Hs6vZcdFFqcGewQDi5Skeleton = EntrySkeletonType<TypeVq5Hs6vZcdFFqcGewQDi5Fields, "Vq5Hs6vZcdFFqcGewQDi5">;
/**
 * Entry type definition for content type 'Vq5Hs6vZcdFFqcGewQDi5' (Portfolio Item)
 * @name TypeVq5Hs6vZcdFFqcGewQDi5
 * @type {TypeVq5Hs6vZcdFFqcGewQDi5}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-25T05:52:34.261Z
 * @version 2
 */
export type TypeVq5Hs6vZcdFFqcGewQDi5<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeVq5Hs6vZcdFFqcGewQDi5Skeleton, Modifiers, Locales>;

export function isTypeVq5Hs6vZcdFFqcGewQDi5<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeVq5Hs6vZcdFFqcGewQDi5<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'Vq5Hs6vZcdFFqcGewQDi5'
}

export type TypeVq5Hs6vZcdFFqcGewQDi5WithoutLinkResolutionResponse = TypeVq5Hs6vZcdFFqcGewQDi5<"WITHOUT_LINK_RESOLUTION">;
export type TypeVq5Hs6vZcdFFqcGewQDi5WithoutUnresolvableLinksResponse = TypeVq5Hs6vZcdFFqcGewQDi5<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeVq5Hs6vZcdFFqcGewQDi5WithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeVq5Hs6vZcdFFqcGewQDi5<"WITH_ALL_LOCALES", Locales>;
export type TypeVq5Hs6vZcdFFqcGewQDi5WithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeVq5Hs6vZcdFFqcGewQDi5<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeVq5Hs6vZcdFFqcGewQDi5WithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeVq5Hs6vZcdFFqcGewQDi5<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
