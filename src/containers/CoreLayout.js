import React from 'react';
import styled from 'styled-components';

import Modal from 'components/Modal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CoreLayout = ({ showModal, className, children }) => (
  <div className="app core-layout">
    <Modal />
    <Container>
      { children }
    </Container>
  </div>
);

export default CoreLayout;
