import React, { useState } from "react";
import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
    setInput("");
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <div className="w-[auto] relative">
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          name="text"
          placeholder="Search..."
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 1rem 20rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
    outline: none;
    border: none;
    font-size: 1.2rem;
    padding: 0.9rem 3rem;
    border-radius: 1rem;
  }

  svg {
    position: absolute;
    top: 35%;
    left: 5%;
    transfrom: translate(100%, -50%);
    color: #fff;
    font-size: 1.4rem;
  }
`;

export default Search;
