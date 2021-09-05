import React, { FC, useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { IUser } from "../interfaces/IUser";
import NavBar from "../components/shared/NavBar";
import UserCard from "../components/UserCard";

const PersonPage: FC = () => {
  const queryParams = useQuery();
  const user = queryParams.get("user");
  const [userData, setuserData] = useState<IUser | null>(null);

  useEffect(() => {
    if (user) {
      fetch(`https://api.github.com/users/${user}`)
        .then((resp) => resp.json())
        .then((data) => setuserData(data));
    }
  }, [user]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="person">
      <NavBar title="Person" />
      <UserCard user={userData} />
    </div>
  );
};

export default PersonPage;
