import { ThemeProvider } from 'next-themes'

interface ThemesProviderProps {
  children: React.ReactNode
}

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
