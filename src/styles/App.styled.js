import styled from 'styled-components';
import clouds from '../assets/clouds.png';
export const AppWrapper = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #15243b;
  align-items: center;
  @media (min-width: 768px) {
    margin-bottom: 70px;
    padding-top: 30px;
  }
  @media (min-width: 1500px) {
    margin-bottom: 90px;
  }
`;

export const HeaderImg = styled.img`
  width: 300px;
  margin: 0 80px;
`;

export const HeaderNftImages = styled.img`
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
`;

export const Footer = styled.footer`
  position: relative;
  width: 100%;
  @media (min-height: 800px) {
    display: block;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 768px) {
    position: relative;
  }
`;

export const FooterImage = styled.div`
  background-image: url(${clouds});
  background-size: cover;
  height: 120px;
  margin-left: -32px;
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;
