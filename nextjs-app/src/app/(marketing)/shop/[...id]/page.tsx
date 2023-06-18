import { Title } from "@/components";
import React from "react";

// optionals params [[...parmasHere]]
// dont need a page.tsx

const ShopDetailPage = ({ params }: any) => {
  console.log(params);
  return <Title text="Shop details page " />;
};

export default ShopDetailPage;
