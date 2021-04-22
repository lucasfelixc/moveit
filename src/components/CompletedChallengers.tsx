import { Container } from '@styles/components/CompletedChallengers'
import { ChallengesContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'

const CompletedChallengers: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}

export default CompletedChallengers
