import React from 'react'

const WorkItem = ({ handleModal }) => {
  return (
    <div className="work-item">
      <div className="card" href="#" onClick={handleModal}>
        <div className="dimmer"></div>
        <div className="card-dimmer"></div>
        <div className="card-border"></div>
        <h3 className="card-name">Rydges Network</h3>
      </div>
    </div>
  )
}

export default WorkItem
