import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  .contentInfo {
    margin-left: 1.5rem;
  }

  .contentInfo strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.colors.title};
  }

  .contentInfo p {
    font-size: 1rem;
    margin-top: 0.5rem;

    display: flex;
    align-items: center;
  }

  .contentInfo p img {
    margin-right: 0.5rem;
    width: 1rem;
    height: 1.5rem;
  }
`
