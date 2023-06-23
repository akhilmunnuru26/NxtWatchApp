import Popup from 'reactjs-popup'
import './index.css'
import {FaMoon} from 'react-icons/fa'
// import {BsSun} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
// import {MdOutlineWbSunny} from 'react-icons/md'
import {
  NavContainer,
  NavLogo,
  IconButtons,
  MenuButtonsContainer,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

import 'reactjs-popup/dist/index.css'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkMode, changeTheme} = value

      const logUrl = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const mode = darkMode ? 'dark' : 'light'
      // const Icons = darkMode ? MdOutlineWbSunny : FaMoon

      return (
        <NavContainer mode={mode}>
          <NavLogo src={logUrl} alt="nxt watch logo" />
          <MenuButtonsContainer>
            <IconButtons onClick={changeTheme} value="dark" type="button">
              {darkMode && <FiSun color="#ffffff" fontSize={22} />}
              {!darkMode && <FaMoon fontSize={22} />}
            </IconButtons>
            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <IconButtons type="button">
                    {darkMode && (
                      <GiHamburgerMenu color="#ffffff" fontSize={22} />
                    )}
                    {!darkMode && <GiHamburgerMenu fontSize={22} />}
                  </IconButtons>
                }
              >
                <div>
                  <li>
                    <AiFillHome />
                    <p>Home</p>
                  </li>
                  <li>
                    <AiFillFire />
                    <p>Trending</p>
                  </li>
                  <li>
                    <SiYoutubegaming />
                    <p>Gaming</p>
                  </li>
                  <li>
                    <SiYoutubegaming />
                    <p>Gaming</p>
                  </li>
                  <li>
                    <RiMenuAddFill />
                    <p>Saved Videos</p>
                  </li>
                </div>
              </Popup>
            </div>
            <IconButtons type="button">
              {!darkMode && <FiLogOut fontSize={22} />}
              {darkMode && <FiLogOut color="#ffffff" fontSize={22} />}
            </IconButtons>
          </MenuButtonsContainer>
        </NavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
