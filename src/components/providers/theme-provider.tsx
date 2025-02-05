import { ThemeProvider } from 'next-themes'

/**
 * ThemesProviderProps interface
 *
 * @description Defines the props for the ThemesProvider component
 */
interface ThemesProviderProps {
  children: React.ReactNode
}

/**
 * NextThemeProvider component
 *
 * @description A component that provides a theme provider for the application
 * @returns A theme provider for the application
 */
function NextThemeProvider({
  children
}: ThemesProviderProps): React.ReactElement {
  return (
    <ThemeProvider enableSystem storageKey="theme-mode" attribute={'class'}>
      {children}
    </ThemeProvider>
  )
}

export default NextThemeProvider
