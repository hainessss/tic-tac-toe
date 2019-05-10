import styled from 'styled-components';

const TicTacToe = styled.div`
  height: 450px;
  width: 450px;
  display: flex;
  flex-direction: column;
`;

TicTacToe.row = styled.div`
  display: flex;
  flex-direction: row;

  & + & {
    border-top: 1px solid ${props => props.theme.white};
  }
`

TicTacToe.col = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  & + & {
    border-left: 1px solid ${props => props.theme.white};
  }
`;

export default TicTacToe;