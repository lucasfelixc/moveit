import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import { Container, ContentSection } from '@styles/pages/Home'
import CompletedChallengers from 'components/CompletedChallengers'
import Countdown from 'components/Countdown'

import Head from 'next/head'

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

        </div>

      </ContentSection>
    </Container>
  )
}

export default Home
