import { Container } from '../styles/components/ExperienceBar'

const ExperienceBar: React.FC = () => {
  return(
    <Container>
      <span>0 xp</span>
      <div className="content">
        <div style={{ width: '50%' }} />

        <span className="current-experience" style={{ left: '50%' }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </Container>
  )
}

export default ExperienceBar
