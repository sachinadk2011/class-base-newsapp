import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'


export default class NewComponent extends Component {
  static defaultProps = {
    pgSz: 9,
    country: "in",
    type: "business"
  }
  static propTypes = {
    pgSz: PropTypes.number,
    country: PropTypes.string,
    type: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      page: 1,
      articles: [],
      tlRs: null
    
      
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.type}&apiKey=747f74a9894f4ee78db288082253122d&pageSize=${this.props.pgSz}&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parcel = await data.json();
    this.setState ( {
      tlRs : parcel.totalResults,
      articles: parcel.articles
      
      
      
    })
  }

  Handleback = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.type}&apiKey=747f74a9894f4ee78db288082253122d&pageSize=${this.props.pgSz}&page=${this.state.page - 1}`;
  let data = await fetch(url);
  let parcel = await data.json();
  
  this.setState ( {
    tlRs : parcel.totalResults,
    page: this.state.page - 1,
     articles: parcel.articles
   
    
  })
  }
  Handlefro = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.type}&apiKey=747f74a9894f4ee78db288082253122d&pageSize=${this.props.pgSz}&page=${this.state.page + 1}`;
  let data = await fetch(url);
  let parcel = await data.json();
  
  this.setState ( {
    tlRs : parcel.totalResults,
    
    page: this.state.page + 1,
    articles: parcel.articles
    
  })
  
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" >
          Top Heading - news
        </h1>
        <div className="row">
          {this.state.articles.map((element) =>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title? element.title.slice(0, 25):"unknown title"}
              description={element.description? element.description.slice(0, 50) : " " }
              imageUrl={element.urlToImage?element.urlToImage:"https://clipartspub.com/images/question-mark-clipart-printable-2.jpg"}
              newsUrl={element.url}
              author = {element.author}
              time = {element.publishedAt}
              source = {element.source.name}
            />
          </div>
          }
          )}
        </div>
        <div className="container d-flex justify-content-between my-5">
        <button style={{visibility: this.state.page<=1 ? "hidden": "visible"}}  type="button" onClick={this.Handleback} className="btn btn-dark">&larr; Previous</button>
        <button type="button" style={{visibility: Math.ceil(this.state.tlRs/this.props.pgSz)>=this.state.page + 1 ? "visible": "hidden"}}  
        onClick={this.Handlefro} className="btn btn-dark"> Next &rarr;</button>
        </div>
      </div>
    )
  }
}
