import React from "react";
import UserButton from "./UserButton";

const UserButtonContainer = () => {
  const topUsers: string[] = [
    "GrahamCampbell",
    "fabpot",
    "weierophinney",
    "rkh",
    "josh",
  ];

  return (
    <div className="userbutton-container">
      {topUsers.map((user) => (
        <UserButton key={user} userName={user} />
      ))}
    </div>
  );
};

export default UserButtonContainer;
