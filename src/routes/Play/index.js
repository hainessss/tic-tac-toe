import React from 'react';
import { connect } from 'react-redux';

import { move } from 'redux/actions';
import CoreLayout from 'containers/CoreLayout';
import Text from '../../components/Text';
import TicTacToe from '../../components/TicTacToe';
import { getWinner, checkForStalemate } from '../../redux/reducers';

export const Play = ({ dispatch, game, winner, isStalemate }) => {
  const { board } = game;

  if (winner) {
    alert(`${winner} is the winner!`);
  }

  if (isStalemate) {
    alert(`Meow, Cat's game :(`);
  }

  const submitMove = ({xy}) => {
    const [col, row] = xy;
    dispatch(move(row, col));
  };

  return (
    <CoreLayout>
      <TicTacToe>
        {
          board.map((row, y) => {
            return (
              <TicTacToe.row key={y} center='xs'>
                {
                  row.map((col, x) => {
                    return (
                      <TicTacToe.col key={x} xs={4} onClick={() => { submitMove({xy: [x, y]}) }}>
                        <Text size={50} color='white'>
                          {col}
                        </Text>
                      </TicTacToe.col>
                    )
                  })
                }
              </TicTacToe.row>
            );
          })
        }
      </TicTacToe>
    </CoreLayout>
  );
};

const mapStateToProps = state => ({
  game: state.game,
  winner: getWinner(state),
  isStalemate: checkForStalemate(state),
});

export default connect(mapStateToProps)(Play);
