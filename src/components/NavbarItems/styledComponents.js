import styled from 'styled-components'

export const PopListItem = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
`
export const PopupTags = styled.p`
  margin-left: 10px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
