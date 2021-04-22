import { ChallengesContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'
import { Container } from '../styles/components/ExperienceBar'

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  return(
    <Container>
      <span>0 xp</span>
      <div className="content">
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span className="current-experience" style={{ left: `${percentToNextLevel}%` }}>
          { currentExperience } xp
        </span>
      </div>
      <span>{ experienceToNextLevel } xp</span>
    </Container>
  )
}

export default ExperienceBar
