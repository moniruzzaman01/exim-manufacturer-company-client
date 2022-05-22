import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  console.log("token", token);

  useEffect(() => {
    const email = user?.user?.email;
    if (email) {
      fetch(`http://localhost:5000/users?email=${email}`, {
        method: "put",
      })
        .then((res) => res.json())
        .then((data) => {
          setToken(data.accessToken);
          localStorage.setItem("accessToken", data.accessToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
