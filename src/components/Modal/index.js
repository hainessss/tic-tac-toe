import React from 'react';
import { connect } from 'react-redux';

import { setModal } from 'redux/actions';
import cn from 'utils/cn';
import { closestParentWithClass } from 'utils/dom';

import './Modal.scss';

export const Modal = ({ content, buttons, className, dispatch }) => {
  const closeModal = () => { dispatch(setModal({})); }
  const open = !!content;

  return (
    <div
      onClick={ ({ target }) => {
        const hasParentWithClass = !!closestParentWithClass(target, 'modal__body');
        if (!hasParentWithClass) { closeModal(); }
      } }
      className={ cn('modal', open && 'modal--open', className) }
    >
      <div className="modal__wrapper">
        { open &&
          <div className="modal__body">
            <div className="modal__content">{ content }</div>
            <div className="modal__buttons">
              {
                (buttons || []).map((button, index) => (
                  <button
                    key={ button.text }
                    onClick={ button.action || closeModal }
                    className={ cn('btn', 'modal__button', button.className) }
                  >
                    { button.text }
                  </button>
                ))
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state.modal
});

export default connect(mapStateToProps)(Modal);
