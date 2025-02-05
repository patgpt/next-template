'use client'

import { Link } from '@/i18n/routing'
import { cn } from '@/utils/cn'
import { useSelectedLayoutSegment } from 'next/navigation'
import { ComponentProps } from 'react'

/**
 * NavigationLink variant type
 *
 * @description Defines the variant type for the NavigationLink component
 */
export type NavigationLinkVariant = 'header' | 'footer'

/**
 * NavigationLinkProps interface
 *
 * @description Defines the props for the NavigationLink component
 */
interface NavigationLinkProps extends ComponentProps<typeof Link> {
  variant?: NavigationLinkVariant
}

/**
 * NavigationLink component
 *
 * @description A component that displays a navigation link with different variants and active states
 * @param props - Component props including variant and standard Link props
 * @returns A styled navigation link component
 */
export default function NavigationLink({
  href,
  variant = 'header',
  className,
  ...rest
}: NavigationLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === href

  const variants = {
    header: 'px-4 py-2 hover:text-gray-600 transition-colors',
    footer: 'text-sm text-gray-500 hover:text-gray-700 transition-colors'
  }

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      href={href}
      className={cn(variants[variant], isActive && 'font-bold', className)}
      {...rest}
    />
  )
}
