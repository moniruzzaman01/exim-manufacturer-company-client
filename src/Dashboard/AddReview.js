import React from "react";

const AddReview = () => {
  const handleForm = () => {};
  return (
    <div className="flex justify-center">
      <div className=" absolute top-20 w-full max-w-lg">
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase mt-10">
          add a review
        </h2>
        <form onSubmit={handleForm}>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Rating:</span>
            </label>
            <input
              required
              type="number"
              name="rating"
              placeholder="between 0 to 5"
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Short Message:</span>
            </label>
            <input
              required
              type="text"
              name="message"
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <button
            className={` btn btn-primary mt-10 w-full `}
            // ${loading && "loading"}
          >
            {/* {loading ? "" : "sign up"} */}
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
