import React, { FC, useEffect, useState } from "react";
import { IUser } from "../interfaces/IUser";
import UserCard from "./UserCard";
type Props = {
  userName: string;
};

const PersonPage: FC<Props> = ({ userName }) => {
  const [userData, setuserData] = useState<IUser | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((resp) => resp.json())
      .then((data) => setuserData(data));
  }, [userName]);

  if (!userData) return <div>Loading...</div>;

  return <UserCard user={userData} />;
};

export default PersonPage;
