import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import {GlobalStyle} from './styledComponents'
// import './App.css'
import Home from './components/Home'
import LoginRoute from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'

// Replace your code here
class App extends Component {
  state = {darkMode: false, activeTab: 'Home'}

  toggleTheme = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  updateActiveTab = value => {
    this.setState({activeTab: value})
  }

  render() {
    const {darkMode, activeTab} = this.state
    // console.log(activeTab)
    return (
      <ThemeContext.Provider
        value={{
          darkMode,
          changeTheme: this.toggleTheme,
          activeTab,
          toggleActiveTab: this.updateActiveTab,
        }}
      >
        <GlobalStyle darkMode={darkMode} />
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
