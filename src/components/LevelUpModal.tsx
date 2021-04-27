import { Container, Overlay } from '@styles/components/LevelUpModal'
import { ChallengesContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </Container>
    </Overlay>
  )
}

export default LevelUpModal
