import React from 'react'

const ThemeContext = React.createContext({
  darkMode: false,
  changeTheme: () => {},
  activeTab: 'Home',
  toggleActiveTab: () => {},
})

export default ThemeContext
