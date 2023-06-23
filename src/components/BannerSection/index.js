import {AiOutlineClose} from 'react-icons/ai'
import {
  BannerSectionMainContainer,
  BannerSectionContentContainer,
  BannerSectionLogo,
  BannerSectionDescription,
  GetItNowButton,
} from './styledComponents'

const BannerSection = () => (
  <BannerSectionMainContainer>
    <BannerSectionContentContainer>
      <BannerSectionLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
      <BannerSectionDescription>
        Buy Nxt Watch Premium prepaid plans with UPI
      </BannerSectionDescription>
      <GetItNowButton type="button">GET IT NOW</GetItNowButton>
    </BannerSectionContentContainer>
    <AiOutlineClose />
  </BannerSectionMainContainer>
)

export default BannerSection
