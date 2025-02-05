import { FaMoon, FaSun } from 'react-icons/fa'

/**
 * ThemeController component with DaisyUI styling
 *
 * @description A component that allows the user to toggle the theme of the application
 * @returns A component that allows the user to toggle the theme of the application
 */
function ThemeController() {
  return (
    <label className="swap swap-rotate">
      <input type="checkbox" value="dark" className="theme-controller" />
      <FaSun className="swap-on h-5 w-5 text-yellow-500" />
      <FaMoon className="swap-off h-5 w-5 text-slate-500" />
    </label>
  )
}

export default ThemeController
