import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import VideoItem from '../VideoItem'
import BannerSection from '../BannerSection'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeMainContainer,
  SearchContainer,
  InputElement,
  VideosSection,
  SearchIconContainer,
  VideosSectionContainer,
  VideosList,
  NoSearchViewImage,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videoList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  renderNoSearchResultsView = () => (
    <div>
      <NoSearchViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
    </div>
  )

  renderApiFailureView = () => <h1>Failure view</h1>

  renderApiLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderApiSuccessView = () => {
    const {videoList} = this.state
    return (
      <VideosSectionContainer>
        <VideosList>
          {videoList.map(eachVideo => (
            <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </VideosList>
      </VideosSectionContainer>
    )
  }

  renderApiViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderApiSuccessView()
      case apiStatusConstants.progress:
        return this.renderApiLoadingView()
      case apiStatusConstants.failure:
        return this.renderApiFailureView()
      default:
        return null
    }
  }

  onClickSearchButton = () => {
    const {videoList, searchInput} = this.state

    const filteredList = videoList.filter(eachVideo =>
      eachVideo.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    this.setState({videoList: filteredList, searchInput: ''})
  }

  searchVideos = event => {
    this.setState({searchInput: event.target.value})
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const {videos} = fetchedData
      // console.log(videos)
      const updatedData = videos.map(eachItem => ({
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      // console.log(updatedData)

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    const {searchInput, videoList} = this.state
    // console.log(videoList)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value

          const renderSearchFilter = () => (
            <SearchContainer darkMode={darkMode}>
              <InputElement
                darkMode={darkMode}
                placeholder="Search"
                value={searchInput}
                type="search"
                onChange={this.searchVideos}
              />
              <SearchIconContainer darkMode={darkMode}>
                {darkMode && (
                  <BsSearch
                    onClick={this.onClickSearchButton}
                    color="#7e858e"
                  />
                )}
                {!darkMode && <BsSearch onClick={this.onClickSearchButton} />}
              </SearchIconContainer>
            </SearchContainer>
          )

          return (
            <HomeMainContainer darkMode={darkMode}>
              <Header />
              <BannerSection />
              <VideosSection>
                {renderSearchFilter()}
                {videoList.length === 0
                  ? this.renderNoSearchResultsView()
                  : this.renderApiViews()}
              </VideosSection>
            </HomeMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
