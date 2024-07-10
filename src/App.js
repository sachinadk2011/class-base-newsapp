
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import NewsComponent from './Component/NewsComponent';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;
  state = {
    progre: 0
  }
  country = "in";
  setProgress=(progress)=>{
    this.setState({
      progre: progress
    })
  }

  render() {
    return (
      <Router>
        <Navbar />

        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progre}
        
      />
         <Routes>
         <Route exact path="/" element={<NewsComponent setProgress={this.setProgress}  apiKey={this.apiKey} key="all" country={this.country} pgSz={9} type=" " />} />
    
          <Route exact path="/business" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="business" country={this.country} pgSz={9} type="business" />} />
          
          <Route exact path="/entertainment" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="entainment" country={this.country} pgSz={9} type="entertainment" />} />
          
          <Route exact path="/general" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="general" country={this.country} pgSz={9} type="general" />} />
          <Route exact path="/health" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="health"  country={this.country} pgSz={9} type="health" />} />
          
          <Route exact path="/sports" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country={this.country} pgSz={9} type="sports" />} />
          <Route exact path="/science" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="science"  country={this.country} pgSz={9} type="science" />} />
          <Route exact path="/technology" element={<NewsComponent setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country={this.country} pgSz={9} type="technology" />} />
          
        </Routes>
      
    </Router>
        
      
    )
  }
}

