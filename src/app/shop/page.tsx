import { NextPage } from "next";
import React from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ShopPage = async () => {
  await sleep(5000);
  return <h2>ShopPage</h2>;
};

export default ShopPage;

export const dynamic = "force-dynamic";
