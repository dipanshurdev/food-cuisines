import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Error from "../components/Error";

export const SearchResult = () => {
  let params = useParams();

  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getsearchResult = async (name) => {
      setLoading(true);
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      );
      const recipes = await data.json();
      setSearchResult(recipes.results);
      setLoading(false);

      window.document.title = `cuisines | ${params.search}`;
    };

    getsearchResult(params.search);
  }, [params.search]);

  if (!searchResult.length && !loading) {
    return <Error />;
  }

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
    <div className="grid grid-cols-4 max-mobile:grid-cols-2 max-mobile:gap-2 gap-8">
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
