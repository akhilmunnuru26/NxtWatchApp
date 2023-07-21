import Popup from 'reactjs-popup'
import './index.css'

import {FaMoon} from 'react-icons/fa'

import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import NavbarItems from '../NavbarItems'

import {
  NavContainer,
  NavLogo,
  IconButtons,
  MenuButtonsContainer,
  PopContainer,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

import 'reactjs-popup/dist/index.css'

const HeaderContent = [
  {
    id: 'HOME',
    icon: <AiFillHome />,
    title: 'Home',
  },
  {
    id: 'TRENDING',
    icon: <AiFillFire />,
    title: 'Trending',
  },
  {
    id: 'GAMING',
    icon: <SiYoutubegaming />,
    title: 'Gaming',
  },
  {
    id: 'SAVED VIDEOS',
    icon: <RiMenuAddFill />,
    title: 'Saved Videos',
  },
]

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkMode, changeTheme, toggleActiveTab} = value

      const logUrl = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      // const mode = darkMode ? 'dark' : 'light'
      // const Icons = darkMode ? MdOutlineWbSunny : FaMoon

      return (
        <NavContainer>
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
                <PopContainer darkMode={darkMode}>
                  {HeaderContent.map(eachItem => (
                    <NavbarItems
                      toggleActiveTab={toggleActiveTab}
                      key={eachItem.id}
                      tabs={eachItem}
                    />
                  ))}
                </PopContainer>
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
