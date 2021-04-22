import { Container, ButtonCountdown, ButtonCountdownActive } from '@styles/components/Countdown'
import { ChallengesContext } from 'contexts/ChallengesContext'
import { useContext, useEffect, useState } from 'react'

let countDownTimeout: NodeJS.Timeout

const Countdown: React.FC = () => {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountDown() {
    setIsActive(true)
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

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
