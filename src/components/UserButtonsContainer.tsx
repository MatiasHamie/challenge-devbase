import React, { useState } from "react";
import PersonPage from "./PersonPage";
import UserButton from "./UserButton";

const UserButtonContainer = () => {
  const topUsers: string[] = [
    "GrahamCampbell",
    "fabpot",
    "weierophinney",
    "rkh",
    "josh",
  ];

  const [userPicked, setuserPicked] = useState(null);

  return (
    <div className="userbutton-container">
      {topUsers.map((user) => (
        <UserButton key={user} userName={user} />
      ))}
    </div>
  );
};

export default UserButtonContainer;
