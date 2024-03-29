import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-91431679-1');
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    const axios = require('axios');

    axios.get('https://raw.githubusercontent.com/jakmanne/resumecontent/master/resumeData.json')
      .then(response => {
        this.setState({ resumeData: response.data });
      })
      .catch(error => {
        let data = require('./resumeData.json');
        this.setState({ resumeData: data });
      });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
