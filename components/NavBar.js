import * as AiIcons from "react-icons/ai";

function NavBar({ nav, getNav, btmNav }) {
  return (
    <>
      <div className="navbar-top">
        <div className="nav-wrapper">
          <h3 className="theme-text">{nav}</h3>
          <ul className="nav-content hide-on-small">
            <li className="nav-item">
              <AiIcons.AiOutlineAppstore />
            </li>
            <li className="nav-item">
              <AiIcons.AiOutlineForm />
            </li>
            <li className="nav-item">
              <AiIcons.AiOutlineFilePdf />
            </li>
            <li className="nav-item">
              <AiIcons.AiOutlineSetting />
            </li>
          </ul>

          <div className="nav-item">
            <AiIcons.AiOutlineLogout />
          </div>
        </div>
      </div>

      <div className="navbar-bottom">
        <ul className="nav-content">
          {btmNav.map((btmItem) => (
            <span
              key={btmItem.id}
              className={`nav-item ${nav == btmItem.navName && "active"}`}
            >
              <li onClick={() => getNav(btmItem.navName)}>{btmItem.navIcon}</li>
            </span>
          ))}

          {/* <li
            className={`nav-item ${nav == "Dashboard" && "active"}`}
            onClick={() => getNav("Dashboard")}
          >
            <AiIcons.AiOutlineAppstore />
          </li>
          <li
            className={`nav-item ${nav == "Assignment" && "active"}`}
            onClick={() => getNav("Assignment")}
          >
            <AiIcons.AiOutlineForm />
          </li>
          <li
            className={`nav-item ${nav == "Resource" && "active"}`}
            onClick={() => getNav("Resource")}
          >
            <AiIcons.AiOutlineFilePdf />
          </li>
          <li
            className={`nav-item ${nav == "Profile" && "active"}`}
            onClick={() => getNav("Profile")}
          >
            <AiIcons.AiOutlineUser />
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
