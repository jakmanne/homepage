import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';

function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    ReactGA.initialize('UA-91431679-1');
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

    const fetchResumeData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/jakmanne/resumecontent/master/resumeData.json'
        );
        setResumeData(response.data);
      } catch (error) {
        const data = await import('./resumeData.json');
        setResumeData(data.default);
      }
    };

    fetchResumeData();
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Footer data={resumeData.main} />
    </div>
  );
}

export default App;
