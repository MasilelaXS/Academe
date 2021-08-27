import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import Main from "./main";
import Learners from "./learners";
import Teachers from "./teachers";
import Profile from "./profile";

function Index() {
  let [nav, setNav] = useState("Class");

  const getNav = (currentNav) => {
    setNav(currentNav);
  };

  const btmNav = [
    {
      id: 1,
      navName: "Class",
      navIcon: <AiIcons.AiOutlineInsertRowAbove />,
    },
    {
      id: 2,
      navName: "Learners",
      navIcon: <AiIcons.AiOutlineTeam />,
    },
    {
      id: 3,
      navName: "Educators",
      navIcon: <AiIcons.AiOutlineUserSwitch />,
    },
    {
      id: 4,
      navName: "Profile",
      navIcon: <AiIcons.AiOutlineSolution />,
    },
  ];

  return (
    <div>
      <NavBar nav={nav} getNav={getNav} btmNav={btmNav} />
      {nav == "Class" && <Main />}
      {nav == "Learners" && <Learners />}
      {nav == "Educators" && <Teachers />}
      {nav == "Profile" && <Profile />}
    </div>
  );
}

export default Index;
