import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import Main from "./main";
import Assignment from "./assignment";
import Resource from "./resource";
import Profile from "./profile";

function Index() {
  let [nav, setNav] = useState("Dashboard");

  const getNav = (currentNav) => {
    setNav(currentNav);
  };

  const btmNav = [
    {
      id: 1,
      navName: "Dashboard",
      navIcon: <AiIcons.AiOutlineAppstore />,
    },
    {
      id: 2,
      navName: "Assignment",
      navIcon: <AiIcons.AiOutlineForm />,
    },
    {
      id: 3,
      navName: "Resource",
      navIcon: <AiIcons.AiOutlineFilePdf />,
    },
    {
      id: 4,
      navName: "Profile",
      navIcon: <AiIcons.AiOutlineUser />,
    },
  ];

  return (
    <div>
      <NavBar nav={nav} getNav={getNav} btmNav={btmNav} />
      {nav == "Dashboard" && <Main />}
      {nav == "Assignment" && <Assignment />}
      {nav == "Resource" && <Resource />}
      {nav == "Profile" && <Profile />}
    </div>
  );
}

export default Index;
