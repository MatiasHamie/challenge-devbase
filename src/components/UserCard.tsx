import React, { FC } from "react";
import { IUser } from "../interfaces/IUser";
type Props = {
  user: IUser;
};

const UserCard: FC<Props> = ({ user }) => {
  return (
    <div>
      <div className="user-card">
        <img src={user.avatar_url} alt="user avatar" />
        <div className="user-card-info">
          <h1>{user.name}</h1>
          <p>{user.location}</p>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
