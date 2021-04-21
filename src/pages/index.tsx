import Head from 'next/head'

import { Container, ContentSection } from '@styles/pages/Home'

import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import CompletedChallengers from 'components/CompletedChallengers'
import Countdown from 'components/Countdown'
import ChallengeBox from 'components/ChallengeBox'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />

      <ContentSection>
        <div>
          <Profile />
          <CompletedChallengers />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </ContentSection>
    </Container>
  )
}

export default Home
