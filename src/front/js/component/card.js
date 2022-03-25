import React from 'react'
import "../../styles/NewsCards.css"
export  function Card(props) {
  return (
  <div className="container  d-flex ">
  <div className="card  ">
    <img src={props.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">This information is from <i>{props.source}</i></p>
      <a  href={props.url} target="_blank" className="btn btn-primary">See news</a>

    </div>

</div>
   
  </div>
  )
}
