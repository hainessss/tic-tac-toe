import React, { useState } from 'react';
import { connect } from 'react-redux';

import { move, setModal } from 'redux/actions';
import CoreLayout from 'containers/CoreLayout';

import './Play.scss';

export const Play = ({ dispatch, game }) => {
  const { board, players, currentPlayerIndex } = game;

  // We're using React Hooks here. For more info:
  // https://reactjs.org/docs/hooks-intro.html
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);

  const submitMove = () => {
    if (row && column) {
      dispatch(move(row, column));
    } else {
      dispatch(setModal({
        content: 'You need to pick a row and column before you can move!',
        buttons: [{ text: 'OK' }]
      }));
    }
  };

  // HACKY BOARD DRAWING
  const boardCellNumber = 3;
  const cellIndices = [...Array(boardCellNumber).keys()];

  const drawRow = (row) => {
    const center = cellIndices.map(ind => row[ind] || ' ')
      .join(' | ');
    return `| ${ center } |`;
  };

  const verticalBorder = cellIndices.reduce((string) => string.concat('----'), '-')
  const rowHTML = [verticalBorder, ...board.map(drawRow), verticalBorder]
    .map((row, ind) => <p key={ ind }>{ row }</p>);

  return (
    <CoreLayout className="game__container">
      <div>
        <h2>{ players[0] } vs. { players[1] }</h2>
        <p>{ `${ players[currentPlayerIndex] }'s turn` }</p>
        <div>
          { rowHTML }
        </div>

        <div>
          Select a row:
          <select
            value={ row }
            onChange={ ({ target }) => { setRow(Number(target.value)); } }
          >
            {
              cellIndices.map(ind => (
                <option value={ ind } key={ ind } >{ ind }</option>
              ))
            }
          </select>
        </div>

        <div>
          Select a column:
          <select
            value={ column }
            onChange={ ({ target }) => { setColumn(Number(target.value)); } }
          >
            {
              cellIndices.map(ind => (
                <option value={ ind } key={ ind } >{ ind }</option>
              ))
            }
          </select>
        </div>

        <input
          className="submit"
          type="submit"
          onClick={ () => { submitMove(); } }
        />
      </div>
    </CoreLayout>
  );
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps)(Play);
