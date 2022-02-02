import * as React from 'react';

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
                { data.images.desktop &&
                  <div className="desktop-image-wrapper">
                    <img src={data.images.desktop} alt="" />
                  </div>
                }

                { data.images.mobile &&
                  <div className="mobile-image-wrapper">
                    <img src={data.images.mobile} alt="" />
                  </div>
                }
              </div>
            }

            <h3>{data.name}</h3>

            { data.description && <div className="description">{data.description}</div> }

            { data.contribution && <div className="contribution">{data.contribution}</div> }

            <div className="technologies">
              { data.technology.map((tech: string, index) => {
                return <div key={index} className="tech">{tech}</div>
              })}
            </div>

            <div className="my-8 text-center">
              <a href="https://twitter.com/home" target="_blank" className="btn">Visit Site</a>
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
      desktop: '',
      mobile: '',
    },
    technology: ['test']
  }
}

export default WorkModal
