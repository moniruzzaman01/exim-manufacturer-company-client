import React from "react";

const Review = () => {
  const a = [1, 2, 3];
  return (
    <div className=" px-5">
      <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
        customer review
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {a.map((a, key) => (
          <div key={key} className="card w-full bg-base-200 shadow-xl">
            <div className="card-body text-center">
              <div className="avatar justify-center">
                <div className="w-24 rounded-full">
                  <img
                    src="https://api.lorem.space/image/face?hash=92310"
                    alt=""
                  />
                </div>
              </div>
              <h2 className="text-xl mt-2 font-bold text-center">
                Card title!
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
