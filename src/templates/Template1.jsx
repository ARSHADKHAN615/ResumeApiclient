import React, { useRef, useState } from "react";
import "./styles/Template1.css";
import dayjs from "dayjs";
import parse from "html-react-parser";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import { Avatar, Spin } from "antd";
const Template1 = ({
  name,
  designation,
  image,
  email,
  phone,
  address,
  website,
  bio,
  education,
  experience,
  skills,
  fullStack,
  frontEnd,
  social,
  languages,
  achievements,
  template,
}) => {
  const componentRef = useRef(null);
  const [isPrint, setIsPrint] = React.useState(false);
  const [isGenerating, setIsGenerating] = React.useState(true);
  const [imageBase64, setImageBase64] = useState("");
  const fetchImage = async () => {
    const response = await fetch(image);
    const blob = await response.blob();

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImageBase64(reader.result);
    });
    reader.readAsDataURL(blob);
  };
  React.useEffect(() => {
    fetchImage();
  }, []);

  const generatePDF = () => {
    setIsGenerating(true);
    const opt = {
      margin: 0,
      filename: "ArshadResume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    setIsPrint(true);
    const pro = html2pdf(componentRef.current, opt);
    console.log(pro);
    setIsGenerating(false);
  };

  return (
    <div className={template == 1 ? "light-theme" : "dark-theme"}>
      <div className={isPrint ? "scale-cv" : ""} ref={componentRef}>
        {/* <!-- SCROLLTOP  --> */}
        <span className="scrolltop justify-content-center align-items-center text-decoration-none">
          <i className="bx bx-up-arrow-alt bx-sm"></i>
        </span>
        {/* <!-- NAVIGATION  --> */}
        <div className="header">
          <nav className="navbar d-flex justify-content-between">
            <div className="logo-resume">
              <a href="#" className="logo-resume">
                ArShaD kHaN
              </a>
            </div>
            <div className="menu">
              <ul className="nav-items">
                <li className="nav-item">
                  <a href="#home" className="nav-link">
                    <i className="bx bxs-home-smile bx-sm"></i>Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#profile" className="nav-link">
                    <i className="bx bxs-user bx-sm"></i>Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#education" className="nav-link">
                    <i className="bx bxs-book bx-sm"></i>Education
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#skills" className="nav-link">
                    <i className="bx bx-receipt bx-sm"></i>Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#experience" className="nav-link">
                    <i className="bx bxs-briefcase bx-sm"></i>Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#project" className="nav-link">
                    <i className="bx bxs-award bx-sm"></i>Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#Reference" className="nav-link">
                    <i className="bx bx-link-external bx-sm"></i>Reference
                  </a>
                </li>
              </ul>
            </div>
            <div className="toggle" id="menu-toggle">
              <i className="bx bx-grid-alt" id="menu-toggle-icon"></i>
            </div>
          </nav>
        </div>
        {/* <!-- RESUME START CONTAINER --> */}
        <div className="resume-container">
          <div className="container resume">
            <div className="row position-relative">
              {/* <!-- LIFT RESUME START  --> */}
              <div className="col-lg-4 col-12 left-resume">
                {/* <!-- PROFILE SECTION  --> */}
                <section className="home" id="home">
                  <div className="home_container text-center my-3">
                    <div className="home_data">
                      <a href="#">
                        <Avatar   className="profile_img"
                          id="profile-img" src={imageBase64} />
                        {/* <img
                          src={imageBase64 ? imageBase64 : "/img/profile.png"}
                          alt=""
                          className="profile_img"
                          id="profile-img"
                        /> */}
                      </a>
                      <h1 className="profile_title" id="profile-name">
                        {name}
                      </h1>
                      <h3 className="profile_subtitle">{designation}</h3>
                      <div>
                        <a
                          download=""
                          href={image ? image : "/img/profile.png"}
                          className="download-btn"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                    <div className="home_address d-flex flex-column">
                      <span className="home_info" style={{ margin: 0 }}>
                        <a href="http://" className="contact_link">
                          <i className="bx bxs-map mr-2"></i> {address}
                        </a>
                      </span>
                      {website && (
                      <span className="home_info" style={{ margin: 0 }}>
                        <a href={website} className="contact_link">
                          <i className="bx bx-globe   mr-2"></i> {website}
                        </a>
                      </span>
                      )}
                      <span className="home_info" style={{ margin: 0 }}>
                        <a
                          href={`mailto:${email}`}
                          className="contact_link image_width"
                        >
                          <i className="bx bxs-envelope  mr-2"></i>
                          <span style={{ lineBreak: "auto" }}>{email}</span>
                        </a>
                      </span>
                      <span className="home_info" style={{ margin: 0 }}>
                        <a href={`tel:${phone}`} className="contact_link">
                          <i className="bx bxs-phone-call   mr-2"></i> {phone}
                        </a>
                      </span>
                    </div>
                    {/* <!-- CHANGE THEME MODE BTN  --> */}
                    {/* <div className="change-theme" id="mode-toggle">
                    <i className="bx bxs-moon bx-sm mode-icon"></i>
                  </div> */}
                    {/* <!-- PDF GENERATE BTN  --> */}
                    <div
                      id="pdf-generate"
                      className="desktop-download-btn"
                      onClick={generatePDF}
                    >
                      <i className="bx bx-download bx-sm"></i>
                    </div>
                  </div>
                </section>

                {/* <!-- ABOUT SECTION  --> */}
                <section className="profile section " id="profile">
                  <h2 className="section-title text-lg-left">
                    PROFILE
                    <div className="section-under-line"></div>
                  </h2>
                  <span
                    className="profile_description text-lg-left text-center"
                    id="profile-bio"
                  >
                    {bio ? parse(bio) : "No Bio"}
                  </span>
                </section>

                {/* <!-- SOCIAL SECTION  --> */}
                <section className="social section">
                  <h2 className="section-title text-lg-left">
                    SOCIAL LINKS
                    <div className="section-under-line"></div>
                  </h2>
                  <div className="social_container">
                    {social.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        target="_ars"
                        className="social_link"
                      >
                        <img
                          src={`/img/icons/${item.name.toLowerCase()}.png`}
                          alt="github"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </section>

                <section className="eduction section" id="education">
                  <h2 className="section-title text-lg-left">
                    EDUCATION
                    <div className="section-under-line"></div>
                  </h2>
                  <div className="eduction_container">
                    {education.map((item, index) => (
                      <div className="education_content" key={index}>
                        <div className="education_time">
                          <span className="education_rounder"></span>
                          {index != education.length - 1 && (
                            <span className="education_line"></span>
                          )}
                        </div>
                        <div className="education_data">
                          <h2 className="education_title">{item.degree}</h2>
                          <h3 className="education_subtitle">
                            {item.institution}
                          </h3>
                          <span className="education_year">
                            {`${new Date(
                              item.duration[0]
                            ).getFullYear()} - ${new Date(
                              item.duration[1]
                            ).getFullYear()}`}
                          </span>
                        </div>
                      </div>
                    ))}
                    {/* <div className="education_content">
                    <div className="education_time">
                      <span className="education_rounder"></span>
                    </div>
                    <div className="education_data">
                      <h2 className="education_title">MCA</h2>
                      <h3 className="education_subtitle">
                        R B Institute Of Management
                      </h3>
                      <span className="education_year">2021 - 2023</span>
                    </div>
                  </div> */}
                  </div>
                </section>

                <section className="skills section" id="skills">
                  <h2 className="section-title text-lg-left">
                    SKILLS & TOOLS
                    <div className="section-under-line"></div>
                  </h2>
                  <div className="skills_content">
                    <ul className="skills_box" id="skills-box">
                      {skills.map((item, index) => (
                        <li className="skills_name" key={index}>
                          <img src={`/img/icons/${item.toLowerCase()}.png`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="profile section " id="profile">
                  <h2 className="section-title text-lg-left">
                    ACHIEVEMENTS
                    <div className="section-under-line"></div>
                  </h2>
                  <span
                    className="achievements_description text-lg-left text-center"
                    id="profile-bio"
                  >
                    {achievements ? parse(achievements) : ""}
                  </span>
                </section>

                <a
                  href="https://arshadkhan.me/MyResume"
                  target="_ars"
                  className="site-link"
                >
                  Click Here To View My Resume
                </a>
              </div>

              {/* <!-- RIGHT SIDE  --> */}
              <div className="col-lg-8 col-12 right-resume">
                <section className="project section" id="project">
                  <h2 className="section-title text-lg-left">
                    PROJECTS<div className="section-under-line"></div>
                  </h2>
                  <div className="project_container">
                    <div className="project_content">
                      {frontEnd.map((item, index) => (
                        <div className="project_data" key={index}>
                          <div className="project_heading_box">
                            <div className="project_title">{item.name}</div>
                            <div className="projects_link">
                              <a href={item.liveLink}>[Live]</a>
                              <a href={item.githubLink}>[Github]</a>
                            </div>
                          </div>
                          <div className="project_description">
                            {item.description ? parse(item.description) : ""}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="experience section" id="experience">
                  <h2 className="section-title text-lg-left">
                    EXPERIENCE
                    <div className="section-under-line"></div>
                  </h2>
                  <div className="experience_container">
                    <div className="experience_content">
                      {experience.map((item, index) => (
                        <div className="experience_data" key={index}>
                          <div className="experience_title">
                            {item.position}
                          </div>
                          <div className="experience_subHeading_box">
                            <div className="experience_subtitle">
                              {item.company}
                            </div>
                            <div className="experience_duration">
                              {`${dayjs(item.duration[0]).format(
                                "MMM YYYY"
                              )} - ${
                                item.status == "present"
                                  ? "Present"
                                  : dayjs(item.duration[1]).format("MMM YYYY")
                              }`}
                            </div>
                          </div>
                          <div className="experience_description">
                            {item.description ? parse(item.description) : ""}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="language section" id="language">
                  <h2 className="section-title text-lg-left">
                    LANGUAGE
                    <div className="section-under-line"></div>
                  </h2>
                  <div className="language_content">
                    <ul className="d-flex justify-content-around flex-wrap">
                      {languages.map((item, index) => (
                        <li className="language_name" key={index}>
                          <span className="language_circle"></span>{" "}
                          {`${item.name} - ${item.level}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
                {/* <section className="language section" id="language">
                <h2 className="section-title text-lg-left">
                  ACHIEVEMENTS
                  <div className="section-under-line"></div>
                </h2>
                <div className="experience_description">
                </div>
              </section> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
