import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  min-height: 100vh;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  border: 1px solid #7e858e;
  width: 280px;
  background-color: transparent;
`

export const InputElement = styled.input`
  height: 30px;
  width: 90%;
  border: none;
  outline: none;
  padding-left: 15px;
  font-size: 15px;
  background-color: transparent;
  color: ${props => (props.darkMode ? '#7e858e' : '#000000')};
`
export const SearchIconContainer = styled.button`
  border: none;
  border-left: 1px solid #7e858e;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  height: 30px;
  width: 60px;
  background-color: ${props => (props.darkMode ? '#313031' : 'transparent')};
`

export const VideosSection = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const VideosList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0px;
  align-self: center;
`

export const VideosSectionContainer = styled.div``

export const NoSearchViewImage = styled.img`
  height: 200px;
  margin-top: 30px;
`
