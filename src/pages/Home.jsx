import React from "react";
import Popular from "../components/Popular";
import Vegies from "../components/Vegies";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Popular />
      <Vegies />
    </motion.div>
  );
};

export default Home;
