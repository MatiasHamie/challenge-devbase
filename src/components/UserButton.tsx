import React, { FC } from "react";

type Props = {
  userName: string;
};

const UserButton: FC<Props> = ({ userName }) => {
  return (
    <>
      <button className="user-button">{userName}</button>
    </>
  );
};

export default UserButton;
