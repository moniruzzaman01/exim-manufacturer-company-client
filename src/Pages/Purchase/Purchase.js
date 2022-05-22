import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { partsId } = useParams();
  const { data: parts, isLoading } = useQuery("partsById", () =>
    fetch(`http://localhost:5000/partsById?id=${partsId}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return;
  }

  return (
    <div className="flex justify-center px-5 min-h-screen">
      <div>
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          Pay here
        </h2>
        <div className="card w-fit bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className=" text-2xl font-bold">Name: {parts.name}</h2>
            <p>Desc: {parts.desc}</p>
            <p>Min_Order_Quantity: {parts.min_order_quantity}</p>
            <p>Availabel_Quantity: {parts.available_quantity}</p>
            <p>Price_Per_piece: {parts.price_per_piece}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
