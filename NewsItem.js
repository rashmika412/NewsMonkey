import React  from 'react'

const NewsItem = (props) => {

    let {title, description, imageUrl,newsUrl, author, date, source} = props;
    return (
      <div className='container'>
      <div className="card">
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        position: "absolute",
        right: "0"
      }}>

      <span className='badge rounded-pill bg-danger'> {source} </span>
      </div>

  <img src={imageUrl?imageUrl:"https://ichef.bbci.co.uk/news/1024/branded_news/2575/production/_127498590_gettyimages-1327493808.jpg"} className="card-img-top" alt="..."/>

  <div className="card-body">
  <h5 className="card-title">{title}...</h5>

    <p className="card-text">{description}...</p>

    <p className="card-text"><small className="text-muted"> By {author?author:"Unknown"} {new Date (date).toGMTString()}</small></p>

      <a href={newsUrl} target="_blank"  className="btn btn-sm btn-dark">read more</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem;