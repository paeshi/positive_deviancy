import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Navbar.css";

export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <a
          href="https://www.facebook.com/PositiveDVNC/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fab fa-facebook-square"></i>
        </a>

        <a
          href="https://twitter.com/positiveDVNC/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fab fa-twitter-square"></i>
        </a>

        <a
          href="https://www.linkedin.com/company/positive-deviancy/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fab fa-linkedin-in"></i>{" "}
        </a>
        <a
          href="https://www.instagram.com/positiveDVNC/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <a
              href="https://americanmadechallenges.org/"
              target="_blank"
              rel="noreferrer"
            >
              AM NETWORK
            </a>
          </li>
          {/* <li className="topListItem">
            <Link className="link" to="/">
              ABOUT US
            </Link>
          </li> */}
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>

          {/* <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li> */}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/settings">
                <img
                  className="topImg"
                  src={PF + user.profilePic}
                  alt="profile"
                />
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/settings">
                Write
              </Link>
            </li>
            <li className="topListItem logout" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
