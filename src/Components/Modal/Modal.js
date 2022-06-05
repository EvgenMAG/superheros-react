import React from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

const modalRoot = document.getElementById('root-modal');

export default function Modal(props) {

  function handleBackDropClick(e) {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  function handleCloseBtnClick() {
    props.onClose();
  };


  return createPortal(
    <div className={s.Overlay} onClick={handleBackDropClick}>
      <div className={s.Modal}>
        {props.children}
        <button className={s.closeModalBtn} onClick={handleCloseBtnClick}>X</button>
      </div>
    </div>,
    modalRoot,
  );

}


