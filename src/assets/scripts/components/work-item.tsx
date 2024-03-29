import * as React from 'react';

import WorkDataProps from '../interfaces/work-data-props'

interface WorkItemProps {
  handleModal: Function;
  data: WorkDataProps;
}

const WorkItem: React.FC<WorkItemProps> = ({ handleModal, data }) => {
  return (
    <div className="work-item">
      <div className="card" onClick={() => handleModal(data)}>
        { data.images.preview &&
          <div className="preview-image-wrapper">
            <img src={data.images.preview} alt="preview" className="preview-image" />
          </div>
        }

        <div className="dimmer"></div>
        <div className="card-dimmer"></div>
        <div className="card-border"></div>
        <h3 className="card-name">{data.name}</h3>
      </div>
    </div>
  )
}

WorkItem.defaultProps = {
  data: {
    id: 0,
    name: 'test',
    images: {
      base: '',
      mock: '',
      preview: '',
    },
    technology: ['test'],
    url: '',
  }
}

export default WorkItem
