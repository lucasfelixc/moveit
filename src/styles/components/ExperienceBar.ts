import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  .content {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;
  }

  .content > div {
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.colors.green};
  }

  .content span {
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
  }
`
