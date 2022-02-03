import * as React from 'react';
import { useState } from 'react'

import WorkDataProps from '../interfaces/work-data-props'

import WorkModal from '../components/work-modal'
import WorkItem from '../components/work-item'
import { WorkData } from '../data/work-data'

const Works = () => {
  const [workModalOpen, setWorkModalOpen] = useState(false);
  const [workModalData, setWorkModalData] = useState<WorkDataProps>();

  const handleWorkModal = (data: WorkDataProps) => {
    if (data !== undefined) {
      setWorkModalData(data);
    }

    setWorkModalOpen(!workModalOpen);
  }

  const renderWorkItems = (workItems: WorkDataProps[]) => {
    return workItems.map((item) => {
      return (
        <WorkItem key={item.id}
          data={item}
          handleModal={handleWorkModal}
        />
      )
    })
  }

  return (
    <section className="sec-works">
      <div className="container">
        <h2 className="mb-8 lg:mb-12 sr-item">Some stuff I've worked on</h2>

        <div className="works-container sr-group">
          {renderWorkItems(WorkData)}
        </div>
      </div>

      <WorkModal show={workModalOpen} data={workModalData} handleModal={handleWorkModal} />
    </section>
  )
}

export default Works
