import React,{useEffect, useState} from 'react'
import axios from "axios"



const About = () => {
const [data, setData] = useState([])
  const fetchData = async()=>{
    try {
      const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      // console.log(res.data.categories)
      setData(res.data.categories)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(()=>{
 fetchData()
  },[])
 
  console.log(data)
  return (
    <div>



    </div>
  )
}

export default About;