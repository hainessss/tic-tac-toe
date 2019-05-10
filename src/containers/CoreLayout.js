import React from 'react';

import Header from 'components/Header';
import Modal from 'components/Modal';
import cn from 'utils/cn';

const CoreLayout = ({ showModal, className, children }) => (
  <div className="app core-layout">
    <Header />
    <Modal />
    <div className={ cn('row', className) }>
      { children }
    </div>
  </div>
);

export default CoreLayout;
