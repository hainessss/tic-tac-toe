import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import Input from '../components/Input';
import Text from '../components/Text';
import Button from '../components/Button';
import Header from '../components/Header';
import { Row, Col } from 'react-flexbox-grid';

import CoreLayout from 'containers/CoreLayout';
import { editPlayerName } from 'redux/actions';

const Container = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Welcome = ({ dispatch, players, history }) => {
  const handleSubmit = () => {
    console.log('players', players);
    debugger;

    if (players[0] && players[1]) {
      history.push('/play');
    }
  };

  const handleChange = ({playerNumber, value}) => {
    dispatch(editPlayerName(playerNumber, value));
  }

  return (
    <div>
      <Header>
        <Text color='white' align='center' size={50} >
          TIC-TAC-TOE
        </Text>
      </Header>
      <CoreLayout>
        <Container>
          <Row center='xs' bottom="xs" between="xs">
            <Col md={4}>
              <Text color='white' align='center' weight={600} style={{padding: '16px'}}>
                Player 1 Name
              </Text>
              <Input
                type="text"
                value={players[0]}
                onChange={({ target }) => { handleChange({playerNumber: 0, value: target.value}) }}
              />
            </Col>
            <Col md={2}>
              {/* need to handle padding better */}
              <Text color='white' align='center' style={{padding: '8px 8px 24px 8px'}}>
                VS
              </Text>
            </Col>
            <Col md={4} >
              <Text color='white' align='center' weight={600} style={{padding: '16px'}}>
                Player 2 Name
              </Text>
              <Input
                type="text"
                value={players[1]}
                onChange={({ target }) => { handleChange({playerNumber: 1, value: target.value}) }}
              />
            </Col>
          </Row>
          <Row center='xs'>
            <Button color='navy' background='white' onClick={ () => handleSubmit() }>
              play
            </Button>
          </Row>
        </Container>
      </CoreLayout>
    </div>
  );
}

const mapStateToProps = state => ({
  players: state.game.players
});

export default withRouter(connect(mapStateToProps)(Welcome));
