import { Container, Overlay } from '@styles/components/LevelUpModal'

const LevelUpModal: React.FC = () => {
  return (
    <Overlay>
      <Container>
        <header>2</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button">
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </Container>
    </Overlay>
  )
}

export default LevelUpModal
