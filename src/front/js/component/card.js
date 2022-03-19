import React from 'react'

export  function Card(props) {
  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={props.img} className="card-img-top"  alt={props.img} />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">This is from <i>{props.source}</i></p>
    <a href={props.url} className="btn btn-primary">Go News.</a>
  </div>
</div>
    </div>
  )
}
