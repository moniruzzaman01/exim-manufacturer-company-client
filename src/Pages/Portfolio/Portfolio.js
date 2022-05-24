import React from "react";

const Portfolio = () => {
  return (
    <div className=" flex justify-center ">
      <div className=" min-h-screen lg:mt-20">
        <div className=" p-3 lg:p-10  lg:w-fit w-screen bg-base-100 shadow-xl rounded-xl">
          <div className="flex">
            <div className=" flex-1">
              <h2 className=" lg:text-xl">Name: </h2>
              <h2 className=" lg:text-xl">Email:</h2>
              <h2 className=" lg:text-xl">Educational Background:</h2>
            </div>
            <div className=" flex-1">
              <h2 className=" lg:text-xl">Moniruzzaman </h2>
              <h2 className=" lg:text-xl">moniruzzaman.shakib.1@gmail.com</h2>
              <h2 className=" lg:text-xl">
                Student of Electrical and Electronic Engineering
                <br />
                level-2 semester-I
              </h2>
            </div>
          </div>
          <div className="mt-10">
            <h3 className=" text-xl">
              As a web developer I know HTML, CSS, JavaScript, ReactJS, NodeJs,
              ExpressJS, MongoDB. Also I have some basic knowledge of PHP,
              Python, Mysql.
            </h3>
            <p>Here Some of my work.</p>
            <a
              className=" text-blue-500 underline block "
              href={`https://groceries-59179.web.app/`}
            >
              Live Site link 1
            </a>
            <a
              className=" text-blue-500 underline block "
              href={`https://todolist-45574.web.app/todo`}
            >
              Live Site link 2
            </a>
            <a
              className=" text-blue-500 underline block "
              href={`https://assignment-12-fec01.web.app/`}
            >
              Live Site link 3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
