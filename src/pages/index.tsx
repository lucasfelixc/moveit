import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { Container, ContentSection } from '@styles/pages/Home'

import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import CompletedChallengers from 'components/CompletedChallengers'
import Countdown from 'components/Countdown'
import ChallengeBox from 'components/ChallengeBox'

import { CountdownProvider } from 'contexts/CountdownContext'
import { ChallengesProvider } from 'contexts/ChallengesContext'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  console.log(props)

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Container>

        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
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
        </CountdownProvider>

      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
