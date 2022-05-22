import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";

const MyOrder = () => {
  const [authUser] = useAuthState(auth);
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
              <th>Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {purchasedItems.map((item, key) => (
              <tr key={key}>
                <td>{item.partsName}</td>
                <td>{item.quantity} pcs</td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-success btn-xs text-white">
                    Pay
                  </button>
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
