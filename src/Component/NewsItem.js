import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, time, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card  " style={{ width: "23rem" }}>
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
           style={{left: "88%", zIndex: '1'}}   >
            {source}
          </span>
          <img
            src={imageUrl}
            className="card-img-top"
            style={{ width: "366px", height: "206px" }}
            alt="title"
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title + "..." : title}</h5>
            <p className="card-text">
              {description && description.trim() !== "" ? (
                <>
                  {description}...
                  <a
                    href={newsUrl}
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    See more
                  </a>
                </>
              ) : (
                " "
              )}{" "}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown Author"}
                on {new Date(time).toGMTString()}{" "}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
