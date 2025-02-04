import NavigationLink from '@/components/navigation/NavigationLink'
import { useTranslations } from 'next-intl'
import React from 'react'

function Header(): React.ReactElement {
  const t = useTranslations()
  return (
    <header className="flex w-full items-center justify-between p-4 shadow-xl">
      <h1>{t('Settings.appTitle')}</h1>
      <nav className="flex gap-8">
        <ul className="flex gap-4">
          <li>
            <NavigationLink className="btn rounded-md bg-slate-200" href="/">
              {t('Menu.home')}
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              className="btn rounded-md bg-slate-200"
              href="/about"
            >
              {t('Menu.about')}
            </NavigationLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
