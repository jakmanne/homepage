import React from 'react';

function Resume({ data }) {
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

  const workItems = work.map((job) => (
    <div key={job.company}>
      <h3>{job.company}</h3>
      <p className="info">
        {job.title}
        <span>&bull;</span> <em className="date">{job.years}</em>
      </p>
      <p>{job.description}</p>
    </div>
  ));

  return (
    <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{workItems}</div>
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
