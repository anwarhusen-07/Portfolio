import { useState } from "react";
import { images } from "../Images";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MailOutline,
  PhoneIphone,
  CalendarToday,
  LocationOnOutlined,
  GitHub,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";

function Sidebar() {
  const [openContent, setOpenContent] = useState(false);

  return (
    <aside className={openContent ? "sidebar active" : "sidebar"} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            style={{ borderRadius: "1rem" }}
            src={images.NewProfile}
            alt="anwarhusen"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" style={{fontSize: "1.1rem"}} title="Anwarhusen Imambhai">
            Anwarhusen Imambhai
          </h1>

          <p className="title">Frontend Developer</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setOpenContent((prev) => !prev)}
          data-sidebar-btn
        >
          <span>Show Contacts</span>

          {openContent ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:anwarofficial070@gmail.com"  className="contact-link">
                anwarofficial070@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <PhoneIphone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+91 8722965045" className="contact-link">
                +91 8722965045
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <CalendarToday />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">Dec 28, 2004</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocationOnOutlined />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Gokak, Karnataka, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
        <ul className="social-list">


          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/anwarhusen-imambhai/"
              className="social-link"
            >
              <LinkedIn />
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/anwarhusen-07" className="social-link">
              <GitHub />
            </a>
          </li>
          <li className="social-item">
            <a href="https://wa.me/8722965045" className="social-link">
              <WhatsApp />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
