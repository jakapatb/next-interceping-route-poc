import { NextPage } from "next";
import React from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const DynamicParamsPage = async ({ params: { id } }: any) => {
  await sleep(5000);
  return <h2>DynamicParamsPage {id}</h2>;
};

export default DynamicParamsPage;
