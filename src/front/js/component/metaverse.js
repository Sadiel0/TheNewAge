import React, {useEffect,useState} from 'react'
import {Card} from './card'
function metaverse() {
    const [news, setNews] = useState([])

    useEffect(() =>{
    fetch("https://blockchain-news1.p.rapidapi.com/news/", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "blockchain-news1.p.rapidapi.com",
      "x-rapidapi-key": "042ca87ebdmsh74fb588ba8f852fp1fe206jsn4f13f7b280b0"
	}
})
.then((response) =>  response.json())
  
.then((data)=>{
  setNews(data)
  console.log(data)
})
.catch(err => {
	console.error(err);
});

    },[])
  return (
    <div className="">
       <h1>MetaVerse</h1>
        
      <div className="container d-flex flex-wrap">
      {news.filter((item, idx) => idx < 10 /*item.img === true*/  ).map((item,index) =>  {

          return ( 
          <Card  key={index}  title={item.title} img={item.img} url={item.url} source={item.source}/>
          )
        })}
      </div>
     
    </div>
  )
}

export default metaverse