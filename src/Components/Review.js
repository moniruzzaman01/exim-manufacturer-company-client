import React from "react";
import { useQuery } from "react-query";

const Review = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch(`http://localhost:5000/review`).then((res) => res.json())
  );
  if (isLoading) {
    return;
  }

  return (
    <div className=" px-5 mb-20">
      <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
        customer review
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((review, key) => (
          <div key={key} className="card w-full bg-base-200 shadow-xl">
            <div className="card-body text-center">
              {/* <div className="avatar justify-center">
                <div className="w-24 rounded-full">
                  <img
                    src="https://api.lorem.space/image/face?hash=92310"
                    alt=""
                  />
                </div>
              </div> */}
              <h2 className="text-xl mt-2 font-bold text-center">
                {review.name}
              </h2>
              <p>
                Ratings:{" "}
                <span className=" text-xl text-primary">{review.rating}</span>
              </p>
              <p>{review.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
