import styled from 'styled-components';

import { Header, TransitLines, Yellow } from './components'
import { Box, FlexBox, Text } from './library/components';


const Layout = styled(FlexBox)`
  height: 100%;
  width: 100%;
`

const IntroSection = styled(FlexBox)`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .2)), url('/intro-cover.jpg');
  opacity: 90%;
  background-size: cover;
  background-position: center;
`


const BottomBox = styled(FlexBox)`
  color: white;
  margin-bottom: 50px;

`

const NameText = styled(Text)`
  letter-spacing: 0.2em;
`

const LinkBox = styled(FlexBox)`
  img {
    width: 35px;
    height: 35px;
    filter: invert(100%);
  }
`

const SelfIntro = styled(FlexBox)`
  color: white;
  img {
    width: 35px;
    height: 35px;
    filter: invert(100%);
  }
`



function App() {
  return (
    <Layout justifyContent="center">
      <IntroSection justifyContent="space-between" alignItems="center">
        <Header />
        <SelfIntro alignItems="center" gap="30px">
          <FlexBox alignItems="center" gap="10px">
            <NameText fontSize="46px">alex hsieh</NameText>
            <img src="/iconmonstr-keyboard-10-240.png" alt="keyboard-icon" />
            <Text fontSize="24px">謝立晟</Text>
          </FlexBox>
          <FlexBox alignItems="center">
            <Text>i am a programmer with a focus on full stack development</Text>
            <Text>based in vancouver, canada</Text>
          </FlexBox>
        </SelfIntro>
        <BottomBox gap="30px">
          <FlexBox alignItems="center">
            <Text weight="700">deep cove, jan 2024</Text>
            <Text>photo by alex hsieh</Text>
          </FlexBox>
          <FlexBox alignItems="center" gap="20px">
            <Text weight="700">- let's talk -</Text>
            <LinkBox direction="row" gap="15px">
              <a href="mailito: alexhsieh98@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="/iconmonstr-email-10.png" alt="contact-email" />
              </a>
              <a href="https://github.com/tappybara" target="_blank" rel="noopener noreferrer">
                <img src="/iconmonstr-github-4.png" alt="contact-github" />
              </a>
              <a href="https://www.linkedin.com/in/hsieh-alex" target="_blank" rel="noopener noreferrer">
                <img src="/iconmonstr-linkedin-4.png" alt="contact-linkedin" />
              </a>
            </LinkBox>
          </FlexBox>
        </BottomBox>
      </IntroSection>
    </Layout>
  );
}

export default App;
