import React, { FC } from "react";
import { useHistory } from "react-router";

type Props = {
  title: string;
};

const NavBar: FC<Props> = ({ title }) => {
  const history = useHistory();

  const handleOnClick = () => {
    history.goBack();
  };

  return (
    <div className="navbar">
      <button onClick={handleOnClick}>Back</button>
      <h1>{title}</h1>
    </div>
  );
};

export default NavBar;
