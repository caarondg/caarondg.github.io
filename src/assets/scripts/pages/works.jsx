import React, { useState } from 'react'

import WorkModal from '../components/work-modal'
import WorkItem from '../components/work-item'
import { WorkData } from '../data/work-data'

const Works = () => {
  const [workModalOpen, setWorkModalOpen] = useState(false);
  const handleWorkModal = () => {
    setWorkModalOpen(!workModalOpen);
  }

  const renderWorkItems = (workItems) => {
    return workItems.map((item) => {
      return (
        <WorkItem key={item.id} handleModal={handleWorkModal} />
      )
    })
  }

  return (
    <section className="sec-works">
      <div className="container">
        <h2 className="mb-8 lg:mb-12">Stuff I've worked on</h2>

        <div className="works-container">
          {renderWorkItems(WorkData)}
        </div>
      </div>

      <WorkModal show={workModalOpen} handleModal={handleWorkModal} />
    </section>
  )
}

export default Works
