import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: ${props => (props.mode === 'dark' ? '#000000' : '#ffffff')};
`
export const NavLogo = styled.img`
  height: 25px;
`
export const IconButtons = styled.button`
  background: transparent;
  border: none;
  margin-right: 5px;
  margin-left: 5px;
`
export const MenuButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`
