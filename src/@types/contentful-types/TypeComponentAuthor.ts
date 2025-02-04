import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeComponentAuthor'
 * @name TypeComponentAuthorFields
 * @type {TypeComponentAuthorFields}
 * @memberof TypeComponentAuthor
 */
export interface TypeComponentAuthorFields {
    /**
     * Field type definition for field 'internalName' (Internal name)
     * @name Internal name
     * @localized false
     * @summary This field is only for internal use, and lets us easily recognise an entry
     */
    internalName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'name' (Name)
     * @name Name
     * @localized false
     * @summary The name of the author
     */
    name: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'avatar' (Avatar)
     * @name Avatar
     * @localized false
     * @summary An avatar used for the author
     */
    avatar?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'componentAuthor' (💎 component - Author)
 * @name TypeComponentAuthorSkeleton
 * @type {TypeComponentAuthorSkeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T05:53:36.149Z
 * @version 1
 */
export type TypeComponentAuthorSkeleton = EntrySkeletonType<TypeComponentAuthorFields, "componentAuthor">;
/**
 * Entry type definition for content type 'componentAuthor' (💎 component - Author)
 * @name TypeComponentAuthor
 * @type {TypeComponentAuthor}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T05:53:36.149Z
 * @version 1
 */
export type TypeComponentAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentAuthorSkeleton, Modifiers, Locales>;

export function isTypeComponentAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeComponentAuthor<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'componentAuthor'
}

export type TypeComponentAuthorWithoutLinkResolutionResponse = TypeComponentAuthor<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentAuthorWithoutUnresolvableLinksResponse = TypeComponentAuthor<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentAuthorWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentAuthor<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentAuthorWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentAuthor<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentAuthorWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentAuthor<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
