import { Container } from '@styles/components/Profile'
import { ChallengesContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <Container>
      <img src="https://github.com/lucasfelixc.png" alt="Lucas Felix"/>

      <div className="contentInfo">
        <strong>Lucas Felix</strong>
        <p>
          <img src="icons/arrow.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </Container>
  )
}

export default Profile
