import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import { Container, ContentSection } from '@styles/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />

      <ContentSection>

        <div>
          <Profile />
        </div>
        <div>

        </div>

      </ContentSection>
    </Container>
  )
}

export default Home
