import React, { useRef } from "react";
import style from "./styles/Template2.module.css";
import html2pdf from "html2pdf.js/dist/html2pdf.min";

const Template2 = () => {
  const [isPrint, setIsPrint] = React.useState(false);
  const componentRef = useRef(null);
  const generatePDF = () => {
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
  };
  return (
    <>
      <div
        id="pdf-generate"
        className="desktop-download-btn"
        onClick={generatePDF}
      >
        <i className="bx bx-download bx-sm"></i>
      </div>
      <div className={isPrint ? "scale-cv" : ""} ref={componentRef}>
        <div className={style.container}>
          <div className={style.header}>
            <div className={style.full_name}>
              <span className={style.first_name}>John</span>
              <span className={style.last_name}>Doe</span>
            </div>
            <div className={style.contact_info}>
              <span className={style.email}>Email: </span>
              <span className={style.email_val}>john.doe@gmail.com</span>
              <span className={style.separator} />
              <span className={style.phone}>Phone: </span>
              <span className={style.phone_val}>111-222-3333</span>
            </div>
            <div className={style.about}>
              <span className={style.position}>Front-End Developer </span>
              <span className={style.desc}>
                I am a front-end developer with more than 3 years of experience
                writing html, css, and js. I'm motivated, result-focused and
                seeking a successful team-oriented company with opportunity to
                grow.
              </span>
            </div>
          </div>
          <div className={style.details}>
            <div className={style.section}>
              <div className={style.section__title}>Experience</div>
              <div className={style.section__list}>
                <div className={style.section__list_item}>
                  <div className={style.left}>
                    <div className={style.name}>KlowdBox</div>
                    <div className={style.addr}>San Fr, CA</div>
                    <div className={style.duration}>Jan 2011 - Feb 2015</div>
                  </div>
                  <div className={style.right}>
                    <div className={style.name}>Fr developer</div>
                    <div className={style.desc}>did This and that</div>
                  </div>
                </div>
                <div className={style.section__list_item}>
                  <div className={style.left}>
                    <div className={style.name}>Akount</div>
                    <div className={style.addr}>San Monica, CA</div>
                    <div className={style.duration}>Jan 2011 - Feb 2015</div>
                  </div>
                  <div className={style.right}>
                    <div className={style.name}>Fr developer</div>
                    <div className={style.desc}>did This and that</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.section}>
              <div className={style.section__title}>Education</div>
              <div className={style.section__list}>
                <div className={style.section__list_item}>
                  <div className={style.left}>
                    <div className={style.name}>
                      Sample Institute of technology
                    </div>
                    <div className={style.addr}>San Fr, CA</div>
                    <div className={style.duration}>Jan 2011 - Feb 2015</div>
                  </div>
                  <div className={style.right}>
                    <div className={style.name}>Fr developer</div>
                    <div className={style.desc}>did This and that</div>
                  </div>
                </div>
                <div className={style.section__list_item}>
                  <div className={style.left}>
                    <div className={style.name}>Akount</div>
                    <div className={style.addr}>San Monica, CA</div>
                    <div className={style.duration}>Jan 2011 - Feb 2015</div>
                  </div>
                  <div className={style.right}>
                    <div className={style.name}>Fr developer</div>
                    <div className={style.desc}>did This and that</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.section}>
              <div className={style.section__title}>Projects</div>
              <div className={style.section__list}>
                <div className={style.section__list_item}>
                  <div className={style.name}>DSP</div>
                  <div className={style.text}>
                    I am a front-end developer with more than 3 years of
                    experience writing html, css, and js. I'm motivated,
                    result-focused and seeking a successful team-oriented
                    company with opportunity to grow.
                  </div>
                </div>
                <div className={style.section__list_item}>
                  <div className={style.name}>DSP</div>
                  <div className={style.text}>
                    I am a front-end developer with more than 3 years of
                    experience writing html, css, and js. I'm motivated,
                    result-focused and seeking a successful team-oriented
                    company with opportunity to grow. <a href="/login">link</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.section}>
              <div className={style.section__title}>Skills</div>
              <div className={style.skills}>
                <div className={style.skills__item}>
                  <div className={style.left}>
                    <div className={style.name}>Javascript</div>
                  </div>
                  <div className={style.right}>
                    <input id="ck1" type="checkbox" defaultChecked />
                    <label htmlFor="ck1" />
                    <input id="ck2" type="checkbox" defaultChecked />
                    <label htmlFor="ck2" />
                    <input id="ck3" type="checkbox" />
                    <label htmlFor="ck3" />
                    <input id="ck4" type="checkbox" />
                    <label htmlFor="ck4" />
                    <input id="ck5" type="checkbox" />
                    <label htmlFor="ck5" />
                  </div>
                </div>
              </div>
              <div className={style.skills__item}>
                <div className={style.left}>
                  <div className={style.name}>CSS</div>
                </div>
                <div className={style.right}>
                  <input id="ck1" type="checkbox" defaultChecked />
                  <label htmlFor="ck1" />
                  <input id="ck2" type="checkbox" defaultChecked />
                  <label htmlFor="ck2" />
                  <input id="ck3" type="checkbox" />
                  <label htmlFor="ck3" />
                  <input id="ck4" type="checkbox" />
                  <label htmlFor="ck4" />
                  <input id="ck5" type="checkbox" />
                  <label htmlFor="ck5" />
                </div>
              </div>
            </div>
            <div className={style.section}>
              <div className={style.section__title}>Interests</div>
              <div className={style.section__list}>
                <div className={style.section__list_item}>
                  Football, programming.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template2;
