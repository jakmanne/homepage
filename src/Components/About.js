import React from 'react';

function About({ data }) {
  if (!data) return null;

  const { image, bio, email } = data;
  const profilepic = `images/${image}`;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilepic} alt="Jakob Manne Profile Pic" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <span>{email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
