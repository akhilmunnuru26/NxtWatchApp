import {Component} from 'react'
// import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'

import {
  FormContainer,
  MainContainer,
  WebsiteLogoContainer,
  WebsiteLogo,
  InputElementContainer,
  LabelElement,
  CheckBoxContainer,
  CheckBox,
  InputElement,
  CheckBoxLabel,
  SuccessLoginButton,
  ButtonEl,
  ErrorMsg,
} from './styledComponents'

const ThemeList = {
  lightTheme: {
    appLogoImageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
    backgroundColor: '#ffffff',
    labelColor: '#8C868E',
  },
  darkTheme: {
    appLogoImageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
    backgroundColor: '#000000',
    labelColor: '#ffffff',
  },
}

class LoginRoute extends Component {
  state = {username: '', password: '', errorMsg: '', displayErrorMsg: false}

  getLoginButton = () => {
    const {displayErrorMsg} = this.state
    const LoginButton =
      displayErrorMsg === false ? SuccessLoginButton : ButtonEl
    return LoginButton
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, displayErrorMsg: true})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 1, path: '/'})
    history.replace('/')
  }

  onClickLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = () => {
    const passwordEl = document.getElementById('password')

    if (passwordEl.type === 'password') {
      passwordEl.type = 'text'
    } else {
      passwordEl.type = 'password'
    }
  }

  render() {
    const {username, password, errorMsg, displayErrorMsg} = this.state
    const LoginButton = this.getLoginButton()

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value
          console.log(darkMode)
          const {lightTheme, darkTheme} = ThemeList

          const logoUrl =
            darkMode === true
              ? darkTheme.appLogoImageUrl
              : lightTheme.appLogoImageUrl

          return (
            <MainContainer darkMode={darkMode}>
              <FormContainer onSubmit={this.onClickLogin}>
                <WebsiteLogoContainer>
                  <WebsiteLogo src={logoUrl} alt="website logo" />
                </WebsiteLogoContainer>
                <InputElementContainer>
                  <LabelElement htmlFor="username">USERNAME</LabelElement>
                  <InputElement
                    onChange={this.getUsername}
                    placeholder="Username"
                    id="username"
                    value={username}
                  />
                </InputElementContainer>
                <InputElementContainer>
                  <LabelElement htmlFor="password">PASSWORD</LabelElement>
                  <InputElement
                    value={password}
                    onChange={this.getPassword}
                    placeholder="Password"
                    id="password"
                    type="password"
                  />
                </InputElementContainer>
                <CheckBoxContainer>
                  <CheckBox onClick={this.showPassword} type="checkbox" />
                  <CheckBoxLabel htmlFor="checkbox">
                    SHOW PASSWORD
                  </CheckBoxLabel>
                </CheckBoxContainer>
                <LoginButton displayErrorMsg type="submit">
                  Login
                </LoginButton>
                {displayErrorMsg === true && (
                  <ErrorMsg>{`*${errorMsg}`}</ErrorMsg>
                )}
              </FormContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
