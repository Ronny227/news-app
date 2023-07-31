import React from 'react'
const NewsCard = ({news}) => {

  

  return (
    <div className="card mb-3" >
    <div className="row g-0">
      <div className="col-md-4">
        <img src={news.urlToImage} className="img-fluid rounded-start" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{news.source.name}</h5>
          <p className="card-text">{news.content}</p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewsCard
