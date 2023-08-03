import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title, description, imageURL, newsURL, author, date, source} = this.props;
    return (
      <div className = "my-3">
        <div className="card" >
          <div style = {{display:'flex', justifyContent: 'flex-end', position: 'absolute', right:'0'}} >
        <span className="badge rounded-pill bg-danger"> {source}</span>
        </div>
          <img src = {imageURL ? imageURL: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/28/full/1632851427-7613.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}   </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small>By {author?author:"Unknown"} on {new Date(date).toGMTString() } </small></p>
            <a href={newsURL} target= "blank" className="btn btn-sm btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem