"use client";

import React from "react";
import useGetAcademicYears from "~/hooks/queries/use-get-academic-years";

const Home = () => {
  const { data } = useGetAcademicYears();
  console.log(data);
  return <div>home!</div>;
};

export default Home;
