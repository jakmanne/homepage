import React from 'react';

function Footer({ data }) {
  if (!data) return null;

  const networks = data.social.map((network) => (
    <li key={network.name}>
      <a href={network.url}>
        <i className={network.className}></i>
      </a>
    </li>
  ));

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
