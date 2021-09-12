import "./Sidebar.css";
import energy from "../../assets/images/energy.jpg";
import Timer from "../timer/Timer";

export default function Sidebar() {
  const startDate = new Date("October 5, 2021 5:00").getTime();

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">
          Countdown until the Solar Prize Round 5 Hardware & Software Tracks
          Submissions are Due! (October 5th 2021 5pm EST)
        </span>
        <Timer startDate={startDate} />
        <img src={energy} alt="solar panels" className="sidebar_img" />
        <p>
          The American-Made Solar Prize is all about encouraging the
          entrepreneurial/inventor spirit in brilliant innovators looking to
          make an impact on a cleaner, solar-based future. We want to help
          people like YOU bring your ideas to life through the Solar Prize Round
          5, where you can win cash prizes to further your innovation.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
