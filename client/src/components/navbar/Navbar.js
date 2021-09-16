import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav className="nav">
      <div className="navLeft">
        <a
          href="https://www.facebook.com/PositiveDVNC/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="navIcon fab fa-facebook-square"></i>
        </a>

        <a
          href="https://twitter.com/positiveDVNC/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="navIcon fab fa-twitter-square"></i>
        </a>

        <a
          href="https://www.linkedin.com/company/positive-deviancy/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="navIcon fab fa-linkedin-in"></i>{" "}
        </a>
        <a
          href="https://www.instagram.com/positiveDVNC/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="navIcon fab fa-instagram-square"></i>
        </a>
      </div>
      <div className="navCenter">
        <ul className="navList">
          {user && user.role === "admin" && (
            <li className="navListItem">
              <Link className="link" to="/admin">
                ADMIN
              </Link>
            </li>
          )}

          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <a
              href="https://americanmadechallenges.org/"
              target="_blank"
              rel="noreferrer"
            >
              AM NETWORK
            </a>
          </li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/settings">
                <img
                  className="navImg"
                  src={PF + user.profilePic}
                  alt="profile"
                />
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/write">
                Write
              </Link>
            </li>
            <li className="navListItem logout" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
