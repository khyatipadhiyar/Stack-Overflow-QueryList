import React from 'react'
import './modal.style.css';

const modal = ({showModal,modelContent, onCloseClick}) => {

  let ModalClass = 'modal' 
  if(showModal===false){
    ModalClass = ModalClass +' modalNoDisplay'
  }
  return (
    <div className= {ModalClass}>
      <p>{modelContent.title}</p>
      <a target='_blank' href={modelContent.link}>{modelContent.link}</a>
      <i className="fas fa-window-close closeRightTop" onClick={onCloseClick}></i>
    </div>
  )
}

export default modal
