import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";

const useAdmin = () => {
  const [authUser] = useAuthState(auth);
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
  if (user) {
    setLoading(false);
  }
  if (user.role === "admin") {
    console.log("admin");
  }

  //   return [isAdmin, loading];
};

export default useAdmin;
