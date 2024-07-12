import React, { useCallback, useEffect, useRef, useState } from "react";
import history from "../data/history.json";
import { getImageUrl } from "../../utils";
import "./Experience.css";

export const Experience = () => {
  const [toggleState, setToggleState] = useState(0);
  const refs = useRef({});

  const toggleTab = (index) => {
    setToggleState(index)
  }

  const handleClickOutside = useCallback((event) => {
    if (toggleState !== 0) {
      const currentRef = refs.current[toggleState];
      if (currentRef && !currentRef.contains(event.target)) {
        setToggleState(0);
      }
    }
  }, [toggleState]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <section className="experience container" id="experience">
      <h3 className="experience__title">Experience</h3>
      {/* <p className='experience__subtitle'>My journey</p> */}
      <div className="experience__content">
        <ul className="experience__history">
          {history.map((historyItem, id) => {
              return (
                <li key={id} className="experience__history-item">
                  <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organization} Logo`} className="history__item-img"/>
                  <div className="history__item-details">
                    <h3 className="history__item-detail">{`${historyItem.role}, ${historyItem.organization}`}</h3>
                    <p className="history__item-date">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <span className="history__tab-button" onClick={() => toggleTab(historyItem.index)}>
                      See more
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="history__item-arrow">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>

                    </span>
                  </div>
                  <div className={toggleState === historyItem.index ? "history__item-expanded-container history__item-expanded-active" : "history__item-expanded-container"} >
                    <div ref={(el) => (refs.current[historyItem.index] = el)} className="history__item-expanded-details-box"> 
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="history__item-close-mod" onClick={() => toggleTab(0)}>
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                      <h3 className="experience__item-expanded-title">Responsibilities</h3>
                      <ul>
                        {historyItem.experiences.map((experience, id) => {
                          return  <li key={id} className="history__item-add-description">{experience}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    </section>
  );
};
