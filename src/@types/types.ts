import type { Locale } from 'next-intl'

/**
 * Type representing the parameters passed to Next.js page components.
 *
 * @remarks
 * This type is defined as a Promise because Next.js requires params to be async
 * to support its concurrent rendering model. Page components receive their parameters
 * asynchronously to allow for parallel data fetching and rendering optimizations.
 * @example
 * ```tsx
 * import {PageParams} from '@/types/types';
 * export default function Page({locale,slug}:PageParams) {
 *  return <h1>{slug}</h1>;
 * }
 */
export type PageParams = { params: Promise<{ locale: Locale; slug: string }> }
