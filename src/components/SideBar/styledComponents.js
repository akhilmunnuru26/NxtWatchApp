import styled from 'styled-components'

export const TabsContainer = styled.ul`
  padding-left: 0px;
`

export const SideBarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90vh;
  }
`
