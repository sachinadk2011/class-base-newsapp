import "./App.css";

import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import NewsComponent from "./Component/NewsComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.News_APiKey
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<NewsComponent apiKey={this.apiKey} key="all" country="in" pgSz={9} type=" " />}
          />

          <Route
            exact
            path="/business"
            element={
              <NewsComponent
                apiKey={this.apiKey} key="business"
                country="in"
                pgSz={9}
                type="business"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <NewsComponent
                apiKey={this.apiKey} key="entainment"
                country="in"
                pgSz={9}
                type="entertainment"
              />
            }
          />

          <Route
            exact
            path="/general"
            element={
              <NewsComponent
                apiKey={this.apiKey} key="general"
                country="in"
                pgSz={9}
                type="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <NewsComponent apiKey={this.apiKey} key="health" country="in" pgSz={9} type="health" />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <NewsComponent apiKey={this.apiKey} key="sports" country="in" pgSz={9} type="sports" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <NewsComponent
                apiKey={this.apiKey} key="science"
                country="in"
                pgSz={9}
                type="science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <NewsComponent
                apiKey={this.apiKey} key="technology"
                country="in"
                pgSz={9}
                type="technology"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
