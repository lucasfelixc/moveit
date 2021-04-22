import { Container, ButtonCountdown, ButtonCountdownActive } from '@styles/components/Countdown'
import { CountdownContext } from 'contexts/CountdownContext'
import { useContext } from 'react'

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      { hasFinished ? (
        <ButtonCountdown disabled>
          Ciclo encerrado <img src="icons/concluded.svg" alt="Concluded"/>
        </ButtonCountdown>
      ) : (
        <>
          { isActive ? (
            <ButtonCountdownActive onClick={resetCountDown}>
              Abandonar o ciclo
            </ButtonCountdownActive>
          ) : (
            <ButtonCountdown onClick={startCountDown}>
              Iniciar o ciclo
            </ButtonCountdown>
          ) }
        </>
      )}
    </div>

  )
}

export default Countdown
