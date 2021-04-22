import { Container, ChallengeNotActive, ChallengeActive } from '@styles/components/ChallengeBox'
import { ChallengesContext } from 'contexts/ChallengesContext';
import { useContext } from 'react';

const ChallengeBox: React.FC = () => {
  const { activeChallenge } = useContext(ChallengesContext)

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={activeChallenge.type === 'body' ? "icons/body.svg" : "icons/eye.svg"} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
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
