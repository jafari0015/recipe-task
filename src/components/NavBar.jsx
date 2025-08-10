import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `nav-icon ${isActive ? "active" : ""}`
        }
      >
        <i className="fa-regular fa-house"></i>
      </NavLink>

      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          `nav-icon ${isActive ? "active" : ""}`
        }
      >
        <i className="fa-regular fa-folder"></i>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `nav-icon ${isActive ? "active" : ""}`
        }
      >
        <i className="fa-regular fa-user"></i>
      </NavLink>
    </nav>
  );
}
