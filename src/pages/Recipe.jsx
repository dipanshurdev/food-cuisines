import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [active, setActive] = useState("instructions");
  const params = useParams();

  const fetchResults = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setRecipe(data);
  };

  useEffect(() => {
    fetchResults();
  }, [params.name]);

  return (
    <Wrapper className="mt-[10rem] mb-[5rem]">
      <div>
        <h2 className="mb-8 text-xl">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Details className="ml-8">
        <button
          onClick={() => setActive("instructions")}
          className={`${
            active === "instructions" ? "active" : ""
          } px-4 py-2 bg-white border-[2px] border-slate-700 mr-8 font-semibold`}
        >
          Instructions
        </button>
        <button
          onClick={() => setActive("ingredients")}
          className={`${
            active === "ingredients" ? "active" : ""
          } px-4 py-2 bg-white border-[2px] border-slate-700 mr-8 font-semibold`}
        >
          Ingredients
        </button>

        {active === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
          </div>
        )}

        {active === "ingredients" && (
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Details>
    </Wrapper>
  );
};

export default Recipe;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
`;

const Details = styled.div`
  .active {
    background-image: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  ul {
    margin-top: 1rem;
  }

  li {
    font-size: 1.4rem;
  }
`;

//
//h2
// className = "text-xl "; // li
// className = "mt-4"; //ul
// active bg:linear-gradient(35deg, #494949, #313131 ) color: white
//button
