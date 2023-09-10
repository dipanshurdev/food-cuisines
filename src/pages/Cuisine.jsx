import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  let params = useParams();
  const [cuisine, setCuisine] = useState([]);

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=40`
    );
    const recipes = await data.json();
    //     console.log(recipes.results);
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    // console.log(params.type);
  }, [params.type]);
  //console.log(cuisine);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-4 gap-8"
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
