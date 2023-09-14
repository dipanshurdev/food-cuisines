import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  let params = useParams();
  const [cuisine, setCuisine] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCuisine = async (name) => {
      setLoading(true);
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=40`
      );
      const recipes = await data.json();
      // console.log(params.type);
      setCuisine(recipes.results);
      setLoading(false);
      window.document.title = `cuisines | ${params.type}`;
    };
    getCuisine(params.type);
    // console.log(params.type);
  }, [params.type]);

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-[25%]">
        <h5 className="text-center text-slate-700 font-bold">
          Wait while we fetching data...
        </h5>
      </div>
    );
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-4 max-mobile:grid-cols-2 max-mobile:gap-4 gap-8"
    >
      {cuisine.map((item) => (
        <div key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img
              className="w-[100%] rounded-3xl "
              src={item.image}
              alt={item.title}
            />
            <h4 className="text-center p-3.5 ">{item.title}</h4>
          </Link>
        </div>
      ))}
    </motion.div>
  );
};

export default Cuisine;

// className = "no-underline ";
