import React, { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [active, setActive] = useState("instructions");
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json();
      setRecipe(data);
      setLoading(false);
    };

    fetchResults();
  }, [params.name]);
  // console.log();

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
    <Wrapper className="mt-[5rem] mb-[5rem]">
      <div>
        <h2 className="mb-8 text-3xl">{recipe.title}</h2>
        <div className=" z-10 relative top-[40px] left-[25px]  w-[90%] flex items-center justify-between flex-row">
          <div className="w-[25px]">
            {recipe.vegetarian ? (
              <img
                src="https://www.clipartmax.com/png/middle/165-1650927_veg-symbol.png"
                alt="veg"
                className="w-[100%] "
              />
            ) : (
              <img
                src="https://w7.pngwing.com/pngs/815/552/png-transparent-lentil-soup-veggie-burger-vegetarianism-vegetarian-and-non-vegetarian-marks-non-veg-food-miscellaneous-angle-food-thumbnail.png"
                alt="non-veg"
                className="w-[100%]"
              />
            )}
          </div>
          <div className="flex items-center gap-[4px] text-slate-700 ">
            <CiClock2 style={{ color: "white" }} />
            {recipe.readyInMinutes}
            :min
          </div>
        </div>
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
          <div className="flex items-start mt-[50px] flex-col justify-center ">
            <h2 className="text-2xl">Instructions</h2>
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
          </div>
        )}

        {active === "ingredients" && (
          <div className="flex items-start mt-[50px] flex-col justify-center ">
            <h2 className="text-2xl">Ingredients</h2>
            <ol>
              {recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ol>
          </div>
        )}
      </Details>
    </Wrapper>
  );
};

export default Recipe;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
  @media screen and (max-width: 490px) {
    grid-template-rows: 400px 1fr;
    grid-template-columns: none;
  }
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
