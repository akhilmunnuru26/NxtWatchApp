import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const ErrorMsg = styled.p`
  color: #eb2b26;
  font-size: 14px;
`

export const FormContainer = styled.form`
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 25px;
  border-radius: 8px;
`

export const WebsiteLogoContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const WebsiteLogo = styled.img`
  width: 50%;
`

export const InputElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const LabelElement = styled.label`
  color: #8c868e;
  font-size: 15px;
  font-weight: 500;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`
export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 10px;
  outline: none;
  border: 1px solid #d7dfe9;
`
export const InputElement = styled.input`
  width: 100%;
  height: 38px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #d7dfe9;
  margin-top: 10px;
  padding-left: 15px;
  font-size: 16px;
`
export const CheckBoxLabel = styled.label`
  color: #231f20;
  font-size: 12px;
  font-weight: 500;
`
/* export const LoginButton = styled.button`
  background: #3b82f6;
  position: relative;
  border: none;
  outline: none;
  width: 100%;
  height: 38px;
  color: #ffffff;
  font-size: 16px;
  border-radius: 5px;
  -webkit-transition-duration: 0.4s; /* Safari */
/*  transition-duration: 0.4s;
  text-decoration: none;
  font-weight: bold;
  overflow: hidden;
  cursor: pointer;
  &:hover {
      animation: 
    background-color: #eb2b26;
    color: #ffffff;
    opacity: 1;
  }
` */

export const SuccessLoginButton = styled.button`
  position: relative;
  background: #3b82f6;
  border: none;
  outline: none;
  width: 100%;
  height: 38px;
  color: #ffffff;
  font-size: 16px;
  border-radius: 5px;
  font-weight: bold;
  padding: 10px 0;
  z-index: 1;
  &:before {
    border-radius: 5px;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #00ff00;
    position: absolute;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: 50%;
    transition: transform ease-in-out 0.4s;
  }
  &:hover {
    &:before {
      transform: scaleX(1);
    }
  }
`
export const ButtonEl = styled.button`
  position: relative;
  background: #3b82f6;
  border: none;
  outline: none;
  width: 100%;
  height: 38px;
  color: #ffffff;
  font-size: 16px;
  border-radius: 5px;
  font-weight: bold;
  padding: 10px 0;
  
}
`
