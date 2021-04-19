import { Container } from '@styles/components/Profile'

const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/lucasfelixc.png" alt="Lucas Felix"/>

      <div className="contentInfo">
        <strong>Lucas Felix</strong>
        <p>
          <img src="icons/arrow.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </Container>
  )
}

export default Profile
