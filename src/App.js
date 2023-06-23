import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import LoginRoute from './components/LoginRoute'
import ThemeContext from './context/ThemeContext'

// Replace your code here
class App extends Component {
  state = {darkMode: false}

  toggleTheme = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  render() {
    const {darkMode} = this.state
    console.log(darkMode)
    return (
      <ThemeContext.Provider value={{darkMode, changeTheme: this.toggleTheme}}>
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <Route
            exact
            path="/"
            component={Home}
            toggleTheme={this.toggleTheme}
          />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
