import React, { useState, useEffect } from "react";
import avatar from "../../assets/img/avatar.png";
import avatarIcon from "../../assets/img/avatar.webp";
import "./styles.css";
import { Link } from "react-router-dom";
import Greeting from "../../components/greeting";
import { FaArrowCircleUp } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const Information = () => {
  const [visible, setVisible] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div className="app">
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <div className="scrollToTop">
            <FaArrowCircleUp
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            />
          </div>
          <div className="intro-wrapper1">
            <div className="nav-wrapper">
              <div className="nav-wrapper-left__dots-wrapper">
                <div className="browser-dot dot-1"></div>
                <div className="browser-dot dot-2"></div>
                <div className="browser-dot dot-3"></div>
              </div>
            </div>

            <div className="information">
              <img src={avatar} alt="avatar" />
              <h2> Queen </h2>

              <div className="social">
                <Link to="/profile">
                  <div className="icon">
                    <img src={avatarIcon} alt="website" />
                  </div>
                  <p>Profile</p>
                  <div className=""></div>
                </Link>
              </div>

              {/* <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="/resume.pdf"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/nolan/50/open-resume.png"
                      alt="resume"
                    />
                  </div>
                  <p>Résumé</p>
                  <div className=""></div>
                </a>
              </div> */}

              {/* <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="mailto:abdelrahmanzaki85@gmail.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/gmail-new.png"
                      alt="email"
                    />
                  </div>
                  <p>Email</p>
                  <div className=""></div>
                </a>
              </div> */}

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="tel:+201288290747"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/apple-phone.png"
                      alt="phone"
                    />
                  </div>
                  <p>Phone</p>
                  <div className=""></div>
                </a>
              </div>

              {/* <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.linkedin.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/linkedin.png"
                      alt="linkedin"
                    />
                  </div>
                  <p>Linkedin</p>
                  <div className=""></div>
                </a>
              </div> */}

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.facebook.com/Queen-2-102622942396545/"
                  aria-label="Facebook"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                      alt="facebook"
                    />
                  </div>
                  <p>Facebook Page</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.facebook.com/groups/427405922511605/?ref=share"
                  aria-label="Facebook"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                      alt="facebook"
                    />
                  </div>
                  <p>Facebook Group</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.messenger.com/t/Queen-2-102622942396545/?messaging_source%3Apages%message_shortlink"
                  aria-label="Messenger"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluency/50/000000/facebook-messenger--v2.png"
                      alt="messenger"
                    />
                  </div>
                  <p>Messenger</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://instagram.com/queen20225555?igshid=YmMyMTA2M2Y="
                  aria-label="instagram"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                      alt="instagram"
                    />
                  </div>
                  <p>Instagram</p>
                  <div className=""></div>
                </a>
              </div>

              {/* <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://twitter.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/twitter.png"
                      alt="twitter"
                    />
                  </div>
                  <p>Twitter</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.snapchat.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/snapchat.png"
                      alt="snapchat"
                    />
                  </div>
                  <p>Snapchat</p>
                  <div className=""></div>
                </a>
              </div> */}

              <div className="social">
                <a href="whatsapp://send?text=welcome&phone=+201288290747">
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/whatsapp.png"
                      alt="whatsapp"
                    />
                  </div>
                  <p>WhatsApp</p>
                  <div className=""></div>
                </a>
              </div>

              <Greeting />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Information;
