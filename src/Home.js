import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Description from './Description';
import Mint from './Mint';
import { HomeContainer, HomeWrapper, WrapperMint } from './styles/Home.styled';

// const CONTAINER_BG = '#15162d';

// export const Root = styled.div`
//   background-color: #05061d;
// `;

// export const StyledSection = styled.section`
//   min-height: 50vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 900px) {
//     section h1 {
//       font-size: 2rem;
//       text-align: center;
//     }
//     section .text-container {
//       flex-direction: column;
//     }
//   }
// `;

// export const HeaderSection = styled(StyledSection)`
//   background-image: url(/config/images/background.jpg);
//   background-repeat: repeat;
//   min-height: 80vh;
//   align-items: flex-start;
//   display: flex;

//   @media (max-width: 800px) {
//     flex-direction: column;
//   }
// `;

// export const StyledContainer = styled.div`
//   background-color: ${(props) => props.background};
//   padding: 40px;
//   width: 70%;

//   @media (max-width: 800px) {
//     padding: 10px;
//     width: 90%;
//   }
// `;

// export const ImagesContainer = styled(StyledContainer)`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;

//   img {
//     margin: 10px;
//     width: 350px;
//     width: calc(100% / 2.5);
//   }

//   @media (max-width: 480px) {
//     img {
//       width: 200px;
//     }
//   }
// `;

// export const ShidenPassContainer = styled(StyledContainer)`
//   text-align: left;
// `;

// export const LogoConainer = styled(StyledContainer)`
//   text-align: right;
//   display: flex;
//   height: 100%;
//   padding-top: 100px;
//   img.back {
//     width: 80%;
//     min-width: 200px;
//     max-width: 500px;
//   }

//   .passLogo {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding-left: 30px;
//   }

//   @media (max-width: 800px) {
//     text-align: center;
//     margin-top: 50px;
//   }
// `;

// export const Navigation = styled.div`
//   position: absolute;
//   top: 0;
//   padding: 1rem;
//   width: 100%;
//   background-color: rgba(1, 1, 1, 0.2);
//   color: var(--accent-text);
//   text-align: right;
// `;

// export const SocialLink = styled.a`
//   margin-left: 16px;
//   color: var(--accent-text);
// `;

// export const CoreTeamContainer = styled.div`
//   margin-top: 20px;
//   display: flex;
//   flex-wrap: wrap;
// `;

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  let image = '/config/images/shiden-pass-gray.png';

  console.log(blockchain.account);
  console.log(data);

  if (blockchain.account) {
    if (data.isRegistered) {
      image = '/config/images/shiden-pass-registered.png';
    }

    if (data.stakerStatus > 0 && data.isRegistered) {
      image = '/config/images/shiden-pass-staker.png';
    }
  }

  // return (
  //   <Root>
  //     <HeaderSection>
  //       <Navigation>
  //         <SocialLink href="https://twitter.com/AstarNetwork" target="_blank">
  //           <FontAwesomeIcon icon={faTwitter} size="lg" />
  //         </SocialLink>
  //         <SocialLink href="https://discord.gg/Z3nC9U4" target="_blank">
  //           <FontAwesomeIcon icon={faDiscord} size="lg" />
  //         </SocialLink>
  //         <SocialLink href="https://www.youtube.com/channel/UC36JgEF6gqatVSK9xlzzrvQ" target="_blank">
  //           <FontAwesomeIcon icon={faYoutube} size="lg" />
  //         </SocialLink>
  //       </Navigation>
  //       <LogoConainer>
  //         <img className="back" src="/config/images/mintingimage.png" />
  //         <div className="passLogo">
  //           <img width="100" src={image} />
  //         </div>
  //       </LogoConainer>
  //       <StyledContainer>
  //         <Mint />
  //       </StyledContainer>
  //     </HeaderSection>
  //   </Root>
  // )
  return (
    <HomeWrapper>
      <HomeContainer>
        <Description />
        {/* Todo: Add the pass logo  */}
        <div></div>
        <WrapperMint>
          <Mint />
        </WrapperMint>
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
