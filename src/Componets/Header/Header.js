import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <img className="headerImage" alt="header" src="../../img/header.jpg" />
      <nav className="navegacion">
        <ul>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "Link"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "Link"
              }
              to="/registro-chat"
            >
              Registro Chat
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "Link"
              }
              to="/galeria"
            >
              Galería
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "Link"
              }
              to="/eventos"
            >
              Eventos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "Link"
              }
              to="/tienda-virtual"
            >
              Tienda Virtual
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
