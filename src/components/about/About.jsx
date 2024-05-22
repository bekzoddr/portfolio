import Image from "next/image";
import React from "react";
import { FaInstagram, FaTelegram, FaMailBulk, FaPhone } from "react-icons/fa";
import { IoMail, IoHome, IoCalendarNumberSharp } from "react-icons/io5";
import me from "@/assets/images/me.jpg";
import { Container } from "@mui/material";
import Link from "next/link";
import { dates } from "@/static";
const About = () => {
  const infos = dates?.map((el) => (
    <div key={el.id} className="info">
      <h3>{el.date}</h3>
      <h3 className="date">{el.deepDate}</h3>
    </div>
  ));

  return (
    <Container maxWidth="lg">
      <div className="about">
        <div className="box">
          <Image src={me} alt="image" />
          <div className="info">
            <h4>HELLO EVERYBODY, I AM</h4>
            <h1>
              Bekzod <br />
              Sodiqov
            </h1>
            {/* <h3 style={{ margin: "50px" }}>
              I'm a{" "}
              <span style={{ fontWeight: "bold", color: "green" }}>{text}</span>
              <Cursor cursorStyle="</>" cursorColor="gold" />
            </h3> */}
            <h3 className="job">Frontend Developer</h3>
            <p className="paragraph">
              You will begin to realise why this exercise is called the Dickens
              Pattern (with reference to the ghost showing Scrooge some
              different futures)
            </p>
            <div className="datas">
              <div className="data">
                <IoCalendarNumberSharp className="icon" />
                <p>16 December, 2007</p>
              </div>
              <div className="data">
                <FaPhone className="icon" />
                <p>
                  <a href="tel:+998935279062">+998 (93) 527-90-62</a>
                </p>
              </div>
              <div className="data">
                <IoMail className="icon" />
                <p>
                  <a href="mailto:bekzoddr@gmail.com">bekzoddr@gmail.com</a>
                </p>
              </div>
              <div className="data">
                <IoHome className="icon" />
                <p>Uzbekistan, Tashkent, Keles</p>
              </div>
            </div>
            <div className="address">
              <Link
                href={"https://www.instagram.com/_s.bekzod_/"}
                target="_blank"
              >
                <div className="icon">
                  <FaInstagram />
                </div>
              </Link>
              <Link href={"https://t.me/bekzoddr"} target="_blank">
                <div className="icon">
                  <FaTelegram />
                </div>
              </Link>
              <div className="icon">
                <FaMailBulk />
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <Container maxWidth="xl">
          {" "}
          <div className="about__me">
            <h4>About me</h4>
            <h2>A Frontend Developer Based in Najot Talim</h2>
            <p>
              I am student, if you hire me, I will become a senior programmer
              with your help.
            </p>
            <br />
            <div className="infos">{infos}</div>
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default About;
