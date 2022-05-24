import React from "react";
import {
  BriefcaseIcon,
  UsersIcon,
  FlagIcon,
  ThumbUpIcon,
} from "@heroicons/react/solid";

const BusinessSummary = () => {
  return (
    <div className=" bg-base-100 flex justify-center py-20">
      <div className=" w-full">
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          business summary
        </h2>
        <h2 className=" text-center text-slate-300 text-4xl uppercase font-bold">
          millions business trust us
        </h2>
        <h4 className="text-center uppercase text-xl mt-2">
          try to understand users expectation
        </h4>
        <div className=" grid grid-cols-2 lg:grid-cols-4 text-center my-16">
          <div>
            <FlagIcon className="h-20 w-20 mb-5 text-slate-300 mx-auto" />
            <h2 className=" text-4xl text-primary font-bold">72</h2>
            <p className=" text-slate-300 text-xl">Countries</p>
          </div>
          <div>
            <BriefcaseIcon className="h-20 w-20 mb-5 text-slate-300 mx-auto" />
            <h2 className=" text-4xl text-primary font-bold">535+</h2>
            <p className=" text-slate-300 text-xl">Complete Projects</p>
          </div>
          <div>
            <UsersIcon className="h-20 w-20 mb-5 text-slate-300 mx-auto" />
            <h2 className=" text-4xl text-primary font-bold">273+</h2>
            <p className=" text-slate-300 text-xl">Happy Clients</p>
          </div>
          <div>
            <ThumbUpIcon className="h-20 w-20 mb-5 text-slate-300 mx-auto" />
            <h2 className=" text-4xl text-primary font-bold">432+</h2>
            <p className=" text-slate-300 text-xl">Feedbacks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
