import {PopListItem, PopupTags} from './styledComponents'

const NavBarItems = props => {
  const {tabs, toggleActiveTab} = props
  const {id, icon, title} = tabs

  const onClickActiveTab = () => {
    toggleActiveTab(id)
  }

  return (
    <PopListItem onClick={onClickActiveTab} value={title}>
      {icon}
      <PopupTags>{title}</PopupTags>
    </PopListItem>
  )
}

export default NavBarItems
