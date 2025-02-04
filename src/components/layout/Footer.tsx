import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import React from 'react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

function Header(): React.ReactElement {
  const t = useTranslations()
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <Link className="text-xl" href={'/'}>
          Next.js Template
        </Link>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/patgpt"
        >
          <FaLinkedin className="text-base-content h-5 w-5" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.x.com/AGIManifesto"
        >
          <FaXTwitter className="text-base-content h-5 w-5" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/patgpt"
        >
          <FaGithub className="text-base-content h-5 w-5" />
        </Link>
      </nav>
    </footer>
  )
}

export default Header
