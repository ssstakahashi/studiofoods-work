import React from 'react';
import './Grit.module.css';

export default function Answer() {
  return (
    <>
      <div className='modal'>
        <div className='modal-inner'>
          <div className='modal-header'></div>
          <div className='modal-introduction'>
            <h2>あたたのグリット・スコアは、{chose/10}点である</h2>
          </div>
            <button className='modal-close-btn' onClick={handleClickClose}>とじる</button>
        </div>
      </div>
    </>
  )
}