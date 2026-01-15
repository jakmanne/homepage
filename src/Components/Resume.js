import React, { useState } from 'react';

function Resume({ data }) {
  const [viewMode, setViewMode] = useState('list');

  if (!data) return null;

  const { education, work } = data;

  const educationItems = education.map((edu) => (
    <div key={edu.school}>
      <h3>{edu.school}</h3>
      <p className="info">
        {edu.degree} <span>&bull;</span>
        <em className="date">{edu.graduated}</em>
      </p>
      <p>{edu.description}</p>
    </div>
  ));

  const workItemsList = work.map((job) => (
    <div key={job.company}>
      <h3>{job.company}</h3>
      <p className="info">
        {job.title}
        <span>&bull;</span> <em className="date">{job.years}</em>
      </p>
      <p>{job.description}</p>
    </div>
  ));

  const workItemsTimeline = work.map((job, index) => (
    <div key={job.company} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
      <div className="timeline-content">
        <span className="timeline-date">{job.years}</span>
        <h3>{job.company}</h3>
        <h4>{job.title}</h4>
        <p>{job.description}</p>
      </div>
    </div>
  ));

  return (
    <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
          <div className="view-toggle">
            <button
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <i className="fa fa-list"></i>
            </button>
            <button
              className={`toggle-btn ${viewMode === 'timeline' ? 'active' : ''}`}
              onClick={() => setViewMode('timeline')}
              title="Timeline View"
            >
              <i className="fa fa-clock-o"></i>
            </button>
          </div>
        </div>

        <div className="nine columns main-col">
          {viewMode === 'list' ? (
            workItemsList
          ) : (
            <div className="timeline">
              <div className="timeline-line"></div>
              {workItemsTimeline}
            </div>
          )}
        </div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{educationItems}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
