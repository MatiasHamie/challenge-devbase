import React, { FC } from "react";
import { useHistory } from "react-router-dom";

type Props = {
  userName: string;
};

const UserButton: FC<Props> = ({ userName }) => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`/person?user=${userName}`);
  };

  return (
    <>
      <button onClick={handleOnClick} className="user-button">
        {userName}
      </button>
    </>
  );
};

export default UserButton;
