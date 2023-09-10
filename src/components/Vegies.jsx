import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import React, { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const Vegies = () => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const isVeggie = localStorage.getItem("veggie");

    if (isVeggie) {
      setVeggie(JSON.parse(isVeggie));
    } else {
      const api =
        await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=28&tags=vegetarian
       `);
      const data = await api.json();
      setVeggie(data.recipes);

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
    }
  };

  // console.log(veggie);

  useEffect(() => {
    getVeggie();
  }, []);
  return (
    <>
      <div className="my-4 ">
        <h3 className="text-slate-700">Veg Recipies</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {veggie.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <div className="min-h-[15rem] rounded-3xl overflow-hidden relative">
                <Link to={`/recipe/${recipe.id}`}>
                  <div className="absolute z-10 left-[5%] top-[5%]  w-[90%] flex items-center justify-between flex-row">
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
                  <p className="absolute z-10 left-2/4 bottom-[25px] -translate-x-1/2 -translate-y-0  text-white w-[100%] text-center font-semibold h-[10%] flex justify-center items-center text-sm">
                    {recipe.title}
                  </p>

                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="rounded-3xl absolute object-cover left-0 h-[100%] w-[100%]"
                  />
                  <div className="z-[3] absolute w-[100%] h-[20%] bg-gradient-to-tr from-[#413a3a33] to-[#ffffff42] top-[180px]" />
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default Vegies;
