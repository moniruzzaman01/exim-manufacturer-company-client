import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    if (email) {
      const newUser = {
        name: user?.user?.displayName,
        email: user.user.email,
      };
      fetch(`http://localhost:5000/users?email=${email}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
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
