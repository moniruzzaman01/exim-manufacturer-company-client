import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const Parts = () => {
  const navigate = useNavigate();
  const { data: parts, isLoading } = useQuery("parts", () =>
    fetch(`http://localhost:5000/parts`).then((res) => res.json())
  );
  if (isLoading) {
    return;
  }

  return (
    <div className=" px-5">
      <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
        all Parts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {parts.map((part, key) => (
          <div key={key} className="card card-compact  bg-base-200 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                width={400}
                height={225}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{part.name}</h2>
              <p>{part.desc}</p>
              <p>Min_Order_Quantity: {part.min_order_quantity}</p>
              <p>Availabel_Quantity: {part.available_quantity}</p>
              <p>Price_Per_piece: {part.price_per_piece}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => {
                    navigate(`/purchase/${part._id}`);
                  }}
                  className="btn btn-sm btn-primary mt-5"
                >
                  Purchase now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parts;
