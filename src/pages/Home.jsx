import React, { useContext, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import NewsContext from '../context/NewsContext'
import { getData } from '../context/NewsActions'


const Home = () => {
const {allNews,dispatch} = useContext(NewsContext)

const fetchData = async(topic) =>{
  const data = await getData(topic);
  dispatch(
    {
      type: "GET_NEWS",
      payload: data,
    }
  )
}

useEffect(() => {
  fetchData();
}, []);


console.log(allNews);

  return (
    <div>
      {
        allNews.map((news,index) => (
          <NewsCard key = {index} news = {news}/>
        ))
        
      }
    </div>
  )
}

export default Home
