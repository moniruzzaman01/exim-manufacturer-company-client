import React from "react";

const Parts = () => {
  const a = [1, 2, 3, 4, 5, 6];
  return (
    <div className=" px-5">
      <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
        all Parts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {a.map((a, key) => (
          <div key={key} className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p>Min_Order_Quantity: 3000</p>
              <p>Availabel_Quantity: 150000</p>
              <p>Price_Per_piece: 200</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary mt-5">
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
