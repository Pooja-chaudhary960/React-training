import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards";

const Contact = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const FectchProduct = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
      setError(error);
    }
  };
  useEffect(() => {
    FectchProduct();
  }, []);
  console.log(data);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="max-w-7xl mx-auto mt-14 px-6">
        <div className="flex flex-wrap justify-center gap-10">
          {data.map((item) => (
            <Cards
              key={item.id}
              ID={item.id}
              Title={item.title}
              Description={item.description}
              Category={item.category}
              Price={item.price}
              DisCountPercentage={item.discountPercentage}
              Rating={item.rating}
              Stock={item.stock}
              Thumbnail={item.thumbnail}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
