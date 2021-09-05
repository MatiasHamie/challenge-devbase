import React, { FC } from "react";
import { IUser } from "../interfaces/IUser";
type Props = {
  user: IUser;
};

const UserCard: FC<Props> = ({ user }) => {
  return (
    <div>
      <div className="user-card">
        <h1>{user.name}</h1>
        <img src={user.avatar_url} alt="" />
        <p>{user.location}</p>
      </div>
    </div>
  );
};
export default UserCard;
