import React from 'react'

const WorkModal = ({ handleModal, show }) => {
  const showModalClass = show ? 'show' : '';

  return (
    <div className={`work-modal ${showModalClass}`}>
      <div className="modal-wrapper" onClick={handleModal}>
        <div className="modal-inner">
          <h2>TESTTINGG</h2>
        </div>
      </div>
    </div>
  )
}

export default WorkModal
