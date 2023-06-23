import React from 'react'

const ThemeContext = React.createContext({
  darkMode: false,
  changeTheme: () => {},
})

export default ThemeContext
