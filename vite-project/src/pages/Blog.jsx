
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard';


const Blog = () => {
  const [data, setData] = useState([])
  const DataFetch = async()=>{
    try {
      const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
     setData(res.data.categories)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    DataFetch()
  }, [])

  console.log(data);
  return (
    <div className="max-w-7xl mx-auto mt-14 px-6">
      <div className="flex flex-wrap justify-center gap-10">
        {data.map((item) => (
          <ProductCard
            key={item.idCategory}
            IDCategory={item.idCategory}
            Category={item.strCategory}
            Image={item.strCategoryThumb}
            Description={item.strCategoryDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;