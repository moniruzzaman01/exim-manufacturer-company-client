import React from "react";

const Portfolio = () => {
  return (
    <div className=" flex justify-center ">
      <div className=" absolute top-1/3">
        <div class=" w-fit bg-base-200 shadow-xl rounded-xl">
          <div className="flex">
            <div className=" p-10 flex-1">
              <h2 className=" text-xl">Name: </h2>
              <h2 className=" text-xl">Email:</h2>
              <h2 className=" text-xl">Educational Background:</h2>
            </div>
            <div className=" p-10 flex-1">
              <h2 className=" text-xl">Moniruzzaman </h2>
              <h2 className=" text-xl">moniruzzaman.shakib.1@gmail.com</h2>
              <h2 className=" text-xl">
                Student of Electrical and Electronic Engineering
                <br />
                level-2 semester-I
              </h2>
            </div>
          </div>
          <div className="text-center">live site link</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
