import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <div>
        <footer className="py-3 mt-4 footer__nav-bg_color">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2  footer__text-color">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2  footer__text-color">
                Guid
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 footer__text-color">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2  footer__text-color">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2  footer__text-color">
                About us
              </a>
            </li>
          </ul>
          <p className="text-center footer__text-color ">© 2024 Company, Inc</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
