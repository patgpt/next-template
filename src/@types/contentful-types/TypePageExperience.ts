import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypePageExperience'
 * @name TypePageExperienceFields
 * @type {TypePageExperienceFields}
 * @memberof TypePageExperience
 */
export interface TypePageExperienceFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized false
     */
    slug: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'companyName' (Company Name)
     * @name Company Name
     * @localized false
     */
    companyName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'companyLogo' (Company Logo)
     * @name Company Logo
     * @localized false
     */
    companyLogo: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'bannerImage' (Banner Image)
     * @name Banner Image
     * @localized false
     */
    bannerImage: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'startDate' (Start Date)
     * @name Start Date
     * @localized false
     */
    startDate: EntryFieldTypes.Date;
    /**
     * Field type definition for field 'endDate' (End Date)
     * @name End Date
     * @localized false
     */
    endDate: EntryFieldTypes.Date;
    /**
     * Field type definition for field 'positionTitle' (Position Title)
     * @name Position Title
     * @localized true
     */
    positionTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'website' (Website)
     * @name Website
     * @localized false
     * @summary Project URL
     */
    website: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'skillsUsed' (Skills Used)
     * @name Skills Used
     * @localized false
     * @summary Skills used while in this position
     */
    skillsUsed: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"AEM" | "Adobe Target" | "Agile" | "Amazon AWS" | "Android" | "CSS" | "Firebase" | "Flutter" | "Google Analytics" | "Google Cloud Platform" | "Google Tag Manager" | "HTML" | "Javascript" | "Jest" | "Next.js" | "Optimizely" | "Scrum" | "TDD" | "Tailwind.css" | "Typescript" | "Unity" | "Vercel" | "Vue.js" | "Web" | "WordPress" | "iOS">>;
    /**
     * Field type definition for field 'jobDescription' (Job Description)
     * @name Job Description
     * @localized true
     * @summary Description of the duties you performed
     */
    jobDescription: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'pageExperience' (📄 Page - Experience)
 * @name TypePageExperienceSkeleton
 * @type {TypePageExperienceSkeleton}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T20:39:50.959Z
 * @version 27
 */
export type TypePageExperienceSkeleton = EntrySkeletonType<TypePageExperienceFields, "pageExperience">;
/**
 * Entry type definition for content type 'pageExperience' (📄 Page - Experience)
 * @name TypePageExperience
 * @type {TypePageExperience}
 * @author 750EowFISsK2AWbWXHsD7n
 * @since 2025-01-08T20:39:50.959Z
 * @version 27
 */
export type TypePageExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageExperienceSkeleton, Modifiers, Locales>;

export function isTypePageExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePageExperience<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pageExperience'
}

export type TypePageExperienceWithoutLinkResolutionResponse = TypePageExperience<"WITHOUT_LINK_RESOLUTION">;
export type TypePageExperienceWithoutUnresolvableLinksResponse = TypePageExperience<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePageExperienceWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePageExperience<"WITH_ALL_LOCALES", Locales>;
export type TypePageExperienceWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePageExperience<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePageExperienceWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePageExperience<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
