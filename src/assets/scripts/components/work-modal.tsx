import * as React from 'react';
import parse from 'html-react-parser';

import WorkDataProps from '../interfaces/work-data-props'

interface WorkModalProps {
  handleModal: Function;
  show: Boolean;
  data: WorkDataProps;
}

const WorkModal: React.FC<WorkModalProps> = ({ handleModal, show, data }) => {
  const showModalClass = show ? 'show' : '';

  const handleInner = (event: any) => {
    // Prevent modal from closing when interacting with content
    event.stopPropagation();
  }

  return (
    <div className={`work-modal ${showModalClass}`}>
      <div className="modal-wrapper" onClick={() => handleModal()}>
        <div className="modal-outer" onClick={handleInner}>
          <div className="modal-inner">

            { data.images &&
              <div className="images-wrapper">
                { data.images.base &&
                  <div className="base-image-wrapper">
                    <img src={data.images.base} className="base-image" alt="" />
                  </div>
                }

                { data.images.mock &&
                  <div className="mock-image-wrapper">
                    <img src={data.images.mock} className="mock-image" alt="mock" />
                  </div>
                }
              </div>
            }

            <div className="p-4">
              <h3>{data.name}</h3>

              { data.description && <div className="description my-4">{parse(data.description)}</div> }

              { data.contribution &&
                <div className="contribution mb-4">
                  <div className="label">Contribution:</div>
                  <div>{parse(data.contribution)}</div>
                </div>
              }

              <div className="technologies">
                { data.technology.map((tech: string, index) => {
                  return <div key={index} className="tech">{tech}</div>
                })}
              </div>

              { data.url &&
                <div className="my-8 text-center">
                  <a href={data.url} target="_blank" className="btn">See Project</a>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

WorkModal.defaultProps = {
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

export default WorkModal
