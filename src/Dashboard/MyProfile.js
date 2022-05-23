import React from "react";

const MyProfile = () => {
  return (
    <div className="flex justify-center">
      <div>
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          My Profile
        </h2>
        <div className="card w-96 bg-base-200 shadow-xl">
          <div className="card-body">
            <p>Name:</p>
            <p>Email:</p>
            <p>Mobile:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
