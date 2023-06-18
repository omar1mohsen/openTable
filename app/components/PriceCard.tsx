import { PRICE } from "@prisma/client";
import React from "react";

const PriceCard = ({ price }: { price: PRICE }) => {
  const handlePrcie = () => {
    if (price === PRICE.CHEAP) {
      return (
        <>
          <span>$$</span>
          <span className="text-gray-400">$$</span>
        </>
      );
    } else if (price === PRICE.REGULAR) {
      return (
        <>
          <span>$$$</span>
          <span className="text-gray-400">$</span>
        </>
      );
    } else {
      return (
        <>
          <span>$$$$</span>
        </>
      );
    }
  };
  return <div className="text-reg font-light mr-3">{handlePrcie()}</div>;
};

export default PriceCard;
