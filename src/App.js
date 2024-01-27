import styled from 'styled-components';

import { Header, TransitLines, Yellow } from './components'
import { Box, FlexBox, Text } from './library/components';


const Layout = styled(FlexBox)`
  height: 100%;
  width: 100%;
`

const IntroSection = styled(FlexBox)`
  width: 100%;
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url('/intro-cover.jpg');
  opacity: 90%;
  background-size: cover;
  background-position: center;
`

const Info = styled(FlexBox)`
  color: white;
  padding-bottom: 80px;
`

const ContactBox = styled(FlexBox)`
  img {
    width: 35px;
    height: 35px;
    filter: invert(100%);
  }
`

const SelfIntro = styled(FlexBox)`
  img {
    width: 35px;
    height: 35px;
    filter: invert(100%);
  }
`

function App() {
  return (
    <Layout justifyContent="center">
      <IntroSection flexDirection="column" justifyContent="space-between" alignItems="center">
        <Header />
        <Info flexDirection="column" alignItems="center" gap="140px">
          <SelfIntro flexDirection="column" alignItems="center" gap="10px">
            <Text fontSize="36px">alex hsieh</Text>
            <img src="/iconmonstr-keyboard-10-240.png" alt="keyboard-icon" />
            <Text fontSize="16px">software developer</Text>
          </SelfIntro>
          <FlexBox flexDirection="column" gap="30px">
          <FlexBox flexDirection="column" alignItems="center">
            <Text weight="700">deep cove, jan 2024</Text>
            <Text>photo by alex hsieh</Text>
          </FlexBox>
          <FlexBox flexDirection="column" alignItems="center" gap="20px">
            <Text weight="700">- let's talk -</Text>
            <ContactBox gap="15px">
              <img src="/iconmonstr-email-10.png" alt="contact-email" />
              <img src="/iconmonstr-github-4.png" alt="contact-email" />
              <img src="/iconmonstr-linkedin-4.png" alt="contact-email" />
            </ContactBox>
          </FlexBox>
          </FlexBox>
        </Info>
      </IntroSection>
    </Layout>
  );
}

export default App;
