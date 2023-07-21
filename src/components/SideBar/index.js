import {FaMoon} from 'react-icons/fa'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import NavbarItems from '../NavbarItems'

import {TabsContainer} from './styledComponents'

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
  <TabsContainer>
    {HeaderContent.map(eachItem => (
      <NavbarItems
        // toggleActiveTab={toggleActiveTab}
        key={eachItem.id}
        tabs={eachItem}
      />
    ))}
  </TabsContainer>
)

export default SideBar
