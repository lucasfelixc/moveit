import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${props => props.theme.colors.title};

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${props => props.theme.colors.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  > div span {
    flex: 1;
  }

  > div span:first-child {
    border-right: 1px solid #f0f1f3;
  }

  > div span:last-child {
    border-left: 1px solid #f0f1f3;
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.25rem;
  }
`

export const ButtonCountdown = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  :not(:disabled):hover {
    background: ${props => props.theme.colors.blueDark};
  }

  :disabled {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.text};
    cursor: not-allowed;

    border-bottom: 4px solid ${props => props.theme.colors.green};
  }

  > img {
    margin-left: 1rem;
  }
`

export const ButtonCountdownActive = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.title};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  :not(:disabled):hover {
    background: #ED1A1A;
    color: ${props => props.theme.colors.white};
  }
`
