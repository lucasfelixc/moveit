import { Container, ChallengeNotActive, ChallengeActive } from '@styles/components/ChallengeBox'

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true;

  return (
    <Container>
      {hasActiveChallenge ? (
        <ChallengeActive>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button
              type="button"
              className="challengeFailedButton"
            >
              Falhei
            </button>

            <button
              type="button"
              className="challengeSucceededButton"
            >
              Completei
            </button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level-up.svg" alt="Level up"/>
            Avance de level completando os desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  )
}

export default ChallengeBox
