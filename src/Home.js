import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";
const Home = () => {
  const { openSideBar, openModal } = useContext(AppContext);

  return (
    <>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </>
  );
};

export default Home;
