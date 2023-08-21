// import {FaMoon} from 'react-icons/fa'

import {GrLinkedinOption} from 'react-icons/gr'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import NavbarItems from '../NavbarItems'

import {TabsContainer, SideBarContainer} from './styledComponents'

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

const SideBar = () => (
  <SideBarContainer>
    <TabsContainer>
      {HeaderContent.map(eachItem => (
        <NavbarItems
          // toggleActiveTab={toggleActiveTab}
          key={eachItem.id}
          tabs={eachItem}
        />
      ))}
    </TabsContainer>
    <div>
      <p>CONTACT US</p>
      <div>
        <div>
          <GrLinkedinOption />
        </div>
      </div>
    </div>
  </SideBarContainer>
)

export default SideBar
