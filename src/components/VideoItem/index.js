import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

import {
  ListItem,
  ThumbnailImage,
  TitleElement,
  Tags,
  ChannelLogo,
  ContentContainer,
  TitleContainer,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props

  const {
    id,
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails
  const {name, profileImageUrl} = channel
  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <Link className="link-element" to={`/videos/:${id}`}>
            <ListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <ContentContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <TitleContainer>
                  <TitleElement darkMode={darkMode}>{title}</TitleElement>
                  <Tags darkMode={darkMode}>
                    {name} &ensp;*&ensp; {viewCount} &ensp;*&ensp; {publishedAt}
                  </Tags>
                </TitleContainer>
              </ContentContainer>
            </ListItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
