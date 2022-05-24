import { useState } from "react";
import { useQuery } from "react-query";

const useAdmin = ({ authUser }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const { data: user, isLoading } = useQuery(
    ["usersByEmail", authUser?.email],
    () =>
      fetch(`http://localhost:5000/usersByEmail?email=${authUser?.email}`).then(
        (res) => res.json()
      )
  );

  if (isLoading) {
    return;
  }
  console.log("admin", user);
  // if (user) {
  //   setLoading(false);
  // }
  if (user.role === "admin") {
    setIsAdmin(true);
    console.log("admin");
  }

  return [isAdmin, loading];
};

export default useAdmin;
