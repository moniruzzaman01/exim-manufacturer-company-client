import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const MyOrder = () => {
  const [authUser] = useAuthState(auth);
  const navigate = useNavigate();
  const { data: purchasedItems, isLoading } = useQuery(
    ["purchased", authUser],
    () =>
      fetch(`http://localhost:5000/purchase?email=${authUser?.email}`).then(
        (res) => res.json()
      )
  );

  if (isLoading) {
    return;
  }

  return (
    <div>
      <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
        My Order
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {purchasedItems.map((item, key) => (
              <tr key={key}>
                <th>{key + 1}</th>
                <td className=" capitalize">{item.partsName}</td>
                <td>{item.quantity} pcs</td>
                <td>{item.price} tk</td>
                <td>
                  {item.paymentId ? (
                    <>
                      <p className=" text-success">Paid</p>{" "}
                      <small>{item.paymentId}</small>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          navigate(`/dashboard/payment/${item._id}`);
                        }}
                        className="btn btn-success btn-xs text-white mr-5"
                      >
                        Pay
                      </button>
                      <button
                        onClick={() => {
                          navigate(`/dashboard/payment/${item._id}`);
                        }}
                        className="btn btn-error btn-xs text-white"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
