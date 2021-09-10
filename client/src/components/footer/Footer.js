import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer_message">
        <a href="mailto:jade@positivedeviancy.com">
          <i class="far fa-envelope"></i> Contact Us
        </a>
      </h3>

      <p className="footer_copyright">
        Copyright &copy; {new Date().getFullYear()} Positive Deviancy LLC
      </p>
    </footer>
  );
}
