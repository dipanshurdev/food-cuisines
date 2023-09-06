import React from "react";
import { FaPizzaSlice, FaHamburger, FaHotdog } from "react-icons/fa";
import {
  GiNoodles,
  GiChopsticks,
  GiFrenchFries,
  GiShrimp,
} from "react-icons/gi";
import { CiBowlNoodles } from "react-icons/ci";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import Samosa from "../img/icons8-samosa-50.png";

const Category = () => {
  return (
    <>
      <Splide
        options={{
          perPage: 5,
          arrows: true,
          pagination: false,
          drag: "free",
          speed: 0.8,
        }}
        className="flex items-center justify-center mx-40 px-12 mb-6"
      >
        <SplideSlide>
          <Link to={"/cuisine/italian"}>
            <FaPizzaSlice className="  text-white" />
            <h4 className="text-white text-sm active:text-white">Italian</h4>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to={"/cuisine/american"}>
            <FaHamburger className=" text-white " />
            <h4 className="text-white text-sm active:text-white">American</h4>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to={"/cuisine/thai"}>
            <GiNoodles className=" text-white" />
            <h4 className="text-white text-sm active:text-white">Thai</h4>
          </Link>
        </SplideSlide>

        <SplideSlide>
          <Link to={"/cuisine/japanese"}>
            <GiChopsticks className="  text-white" />
            <h4 className="text-white active:text-white text-sm">Japanese</h4>
          </Link>
        </SplideSlide>

        <SplideSlide>
          <Link to={"/cuisine/indian"}>
            <img
              src={Samosa}
              alt="indian-cuisine"
              style={{ filter: "invert(1)" }}
            />
            <h4 className="text-white active:text-white text-sm">Indian</h4>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to={"/cuisine/spanish"}>
            <GiShrimp className="  text-white" />
            <h4 className="text-white active:text-white text-sm">Spanish</h4>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to={"/cuisine/french"}>
            <GiFrenchFries className="  text-white" />
            <h4 className="text-white active:text-white text-sm">French</h4>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to={"/cuisine/chinese"}>
            <CiBowlNoodles className="  text-white" />
            <h4 className="text-white active:text-white text-sm">Chinese</h4>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to={"/cuisine/british"}>
            <FaHotdog className="  text-white" />
            <h4 className="text-white active:text-white text-sm">British</h4>
          </Link>
        </SplideSlide>
      </Splide>
    </>
  );
};

export default Category;

const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  svg {
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #03d3fc, #04187d);
  }
  ul {
    margin: 0px 125px;
  }
`;
