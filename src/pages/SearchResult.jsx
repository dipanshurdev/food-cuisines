import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const SearchResult = () => {
  let params = useParams();

  const [searchResult, setSearchResult] = useState([]);

  const getsearchResult = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();

    setSearchResult(recipes.results);
  };

  useEffect(() => {
    getsearchResult(params.search);
  }, [params.search]);

  return (
    <div className="grid grid-cols-4 gap-8">
      {searchResult.map((item) => (
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
    </div>
  );
};
