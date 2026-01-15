import React, { useState } from 'react';

function Contact({ data }) {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    // Note: This endpoint needs to be implemented or replaced
    // with a service like Formspree, EmailJS, or a serverless function
    try {
      // Simulating form submission - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus({ loading: false, success: true, error: null });
      setFormData({
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactMessage: '',
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to send message. Please try again.',
      });
    }
  };

  if (!data) return null;

  const { name } = data;

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{data.contactmessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={formData.contactName}
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  value={formData.contactSubject}
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                  value={formData.contactMessage}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <button type="submit" className="submit" disabled={status.loading}>
                  {status.loading ? 'Sending...' : 'Submit'}
                </button>
                {status.loading && (
                  <span id="image-loader" style={{ display: 'inline' }}>
                    <img alt="Loading" src="images/loader.gif" />
                  </span>
                )}
              </div>
            </fieldset>
          </form>

          {status.error && (
            <div id="message-warning" style={{ display: 'block' }}>
              {status.error}
            </div>
          )}
          {status.success && (
            <div id="message-success" style={{ display: 'block' }}>
              <i className="fa fa-check"></i>Your message was sent, thank you!
            </div>
          )}
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">{name}</p>
          </div>

          <div className="widget widget_tweets">
            <h4 className="widget-title">Latest Tweets</h4>
            <ul id="twitter">
              <li>
                <span>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                  auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                  consequat ipsum
                  <a href="#">http://t.co/CGIrdxIlI3</a>
                </span>
                <b>
                  <a href="#">2 Days Ago</a>
                </b>
              </li>
              <li>
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi
                  <a href="#">http://t.co/CGIrdxIlI3</a>
                </span>
                <b>
                  <a href="#">3 Days Ago</a>
                </b>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
