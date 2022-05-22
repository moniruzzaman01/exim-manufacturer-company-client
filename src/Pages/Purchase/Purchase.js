import { async } from "@firebase/util";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const [authUser] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const { partsId } = useParams();
  const { data: parts, isLoading } = useQuery("partsById", () =>
    fetch(`http://localhost:5000/partsById?id=${partsId}`).then((res) =>
      res.json()
    )
  );

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    const email = authUser.email;
    const partsId = parts._id;
    const quantity = event.target.quantity.value;
    const address = event.target.address.value;
    const paymentData = { email, partsId, quantity, address };
    console.log(paymentData);

    await fetch(`http://localhost:5000/purchase`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          event.target.reset();
          toast.success("Item Purchase Successfull");
        }
      });
    setLoading(false);
  };

  if (isLoading) {
    return;
  }

  return (
    <div className="flex justify-center px-5 min-h-screen">
      <div>
        <h2 className=" text-center text-primary text-4xl mb-10 uppercase">
          Purchase here
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
        <div className="w-full max-w-lg mx-auto">
          <h2 className=" text-3xl text-primary text-center mt-20 mb-5">
            Provide Your Information
          </h2>
          <form onSubmit={handleForm}>
            <div className="form-control w-full max-w-lg mt-1">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                required
                type="text"
                value={authUser.displayName}
                disabled
                className="input input-bordered input-primary w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                required
                type="email"
                value={authUser.email}
                disabled
                className="input input-bordered input-primary w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <label className="label">
                <span className="label-text">Quantity:</span>
              </label>
              <input
                required
                type="number"
                name="quantity"
                className="input input-bordered input-primary w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <label className="label">
                <span className="label-text">Address:</span>
              </label>
              <textarea
                required
                name="address"
                className="textarea textarea-primary"
                placeholder=""
              ></textarea>
            </div>
            <button
              className={` btn btn-primary mt-10 w-full ${
                loading && "loading"
              }`}
            >
              {loading ? "" : "sign up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
