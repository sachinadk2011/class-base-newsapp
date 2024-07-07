import React, { Component } from "react";
import NewsItem from "./NewsItem";

import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "./Loader";




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
  captalization =(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
  }

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      articles: [],
      tlRs: 0,
      loading: true
      
    };
    document.title = `NewsStream-${this.props.type !== " "?this.captalization(this.props.type):
      "recent news | past news"}`
  }

  async updateNews () {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.type
    }&apiKey=${this.props.apiKey}&pageSize=${
      this.props.pgSz
    }&page=${this.state.page}`;

    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parcel = await data.json();
    this.props.setProgress(70);
    this.setState({ 
      tlRs: parcel.totalResults,
      articles: parcel.articles,
      loading: false
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  /* Handleback = async () => {
    this.setState({
      
      page: this.state.page - 1,
      
    });
    this.updateNews();

    
  };
  Handlefro = async () => {
    this.setState({
      

      page: this.state.page + 1
     
    });
    this.updateNews();

    
  }; */
  fetchMoreData = async () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }), async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.type
    }&apiKey=${this.props.apiKey}&pageSize=${
      this.props.pgSz
    }&page=${this.state.page}`;

    let data = await fetch(url);
    let parcel = await data.json();
    this.setState({
      tlRs: parcel.totalResults,
      
      articles: this.state.articles.concat(parcel.articles),
      
    });
  });
};
 
  render() {
    return (
      <>
        <h2 className="text-center " style={{marginTop: "70px"}} >
        NewsStream- Top {this.captalization(this.props.type)} Heading News
          
        </h2>
        {this.state.loading && <Loader/> }
        <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    
    hasMore={this.state.articles.length !== this.state.tlRs}
    loader={ <Loader/>}
    
  >
    <div className="container my-3">
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
        </div>
         </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-5">
        <button style={{visibility: this.state.page<=1 ? "hidden": "visible"}}  type="button" onClick={this.Handleback} className="btn btn-dark">&larr; Previous</button>
        <button type="button" style={{visibility: Math.ceil(this.state.tlRs/this.props.pgSz)>=this.state.page + 1 ? "visible": "hidden"}}  
        onClick={this.Handlefro} className="btn btn-dark"> Next &rarr;</button>
        </div> */}
      </>
    )
  }
}
