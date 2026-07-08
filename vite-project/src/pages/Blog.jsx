import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Blog = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const DataFetch = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php",
      );
      setData(res.data.categories);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
      setError(error);
    }
  };

  useEffect(() => {
    DataFetch();
  }, []);

  console.log(data);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
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
