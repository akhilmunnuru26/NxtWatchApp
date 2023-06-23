import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  margin-top: 20px;
  //text-decoration: none;
`

export const ThumbnailImage = styled.img`
  height: 180px;
`

export const TitleElement = styled.p`
  font-size: 12px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  text-decoration: none;
`
export const Tags = styled.p`
  font-size: 10px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  text-decoration: none;
`

export const ChannelLogo = styled.img`
  height: 30px;
  margin-bottom: 20px;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`
export const TitleContainer = styled.div`
  flex-wrap: wrap;
  margin-left: 15px;
`
