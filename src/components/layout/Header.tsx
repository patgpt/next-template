import NavigationLink from '@/components/navigation/NavigationLink'
import ThemController from '@/components/theme-controller'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import React from 'react'

function Header(): React.ReactElement {
  const t = useTranslations()
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <h2>
              <NavigationLink className="" href="/">
                {t('Menu.home')}
              </NavigationLink>
            </h2>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link className="text-xl" href={'/'}>
          Next.js Template
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="flex gap-4">
          <ThemController />
          <Link
            className="btn btn-soft px-4 py-2 hover:shadow-2xl"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header

const Navigation = (): React.ReactElement => {
  const t = useTranslations()
  return (
    <nav className="flex gap-8">
      <ul className="flex gap-4">
        <li>
          <NavigationLink className="" href="/">
            {t('Menu.home')}
          </NavigationLink>
        </li>
        <li>
          <NavigationLink className="" href="/about">
            {t('Menu.about')}
          </NavigationLink>
        </li>
      </ul>
    </nav>
  )
}
