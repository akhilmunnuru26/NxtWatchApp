import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
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
export const PopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
  min-height: 60vh;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  width: 100%;
  border: none;
  outline: none;
`
