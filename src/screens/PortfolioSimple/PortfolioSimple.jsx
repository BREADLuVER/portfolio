import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Group } from "../../components/Group";
import { Header } from "../../components/Header";
import { ProjectNfo } from "../../components/ProjectNfo";
import "./style.css";

export const PortfolioSimple = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="portfolio-simple"
      style={{
        alignItems:
          screenWidth < 750
            ? "flex-end"
            : screenWidth >= 1200 || (screenWidth >= 750 && screenWidth < 1200)
              ? "center"
              : undefined,
        backgroundColor:
          screenWidth < 750
            ? "#ffffff"
            : screenWidth >= 1200 || (screenWidth >= 750 && screenWidth < 1200)
              ? "var(--bg-gray)"
              : undefined,
        flexDirection:
          screenWidth >= 1200 || (screenWidth >= 750 && screenWidth < 1200)
            ? "column"
            : undefined,
        gap:
          screenWidth < 750
            ? "10px"
            : screenWidth >= 750 && screenWidth < 1200
              ? "170px"
              : screenWidth >= 1200
                ? "200px"
                : undefined,
        height:
          screenWidth < 750
            ? "640px"
            : screenWidth >= 750 && screenWidth < 1200
              ? "3166px"
              : screenWidth >= 1200
                ? "3293px"
                : undefined,
        justifyContent: screenWidth < 750 ? "center" : undefined,
        minWidth:
          screenWidth < 750
            ? "360px"
            : screenWidth >= 750 && screenWidth < 1200
              ? "750px"
              : screenWidth >= 1200
                ? "1200px"
                : undefined,
        overflowX:
          screenWidth >= 750 && screenWidth < 1200 ? "hidden" : undefined,
        width: screenWidth < 750 ? "100%" : undefined,
      }}
    >
      {screenWidth < 750 && (
        <div className="frame-2">
          <p className="text-wrapper-3">
            please use a tablet or a PC for better view
          </p>

          <img className="img" alt="Frame" src={`${import.meta.env.BASE_URL}img/frame-3355-2-1-1.png`} />
        </div>
      )}

      {(screenWidth >= 1200 || (screenWidth >= 750 && screenWidth < 1200)) && (
        <>
          <div className="frame-3">
            <Header
              className="header-instance"
              tabDefaultTabDefaultClassName={`${screenWidth >= 750 && screenWidth < 1200 && "class"} ${screenWidth >= 1200 && "class-2"}`}
            />
            <div className="frame-4">
              {screenWidth >= 750 && screenWidth < 1200 && (
                <div className="intro">
                  <div className="software-developer">SOFTWARE DEVELOPER</div>

                  <div className="content">
                    <img
                      className="image"
                      alt="Image"
                      src={`${import.meta.env.BASE_URL}img/image-1-1-1.png`}
                    />

                    <p className="title">
                      Hello,&nbsp;&nbsp;my name is Brad Yin
                    </p>

                    <div className="subheadline">
                      <p className="text-2">
                        I&#39;m a software developer who cares just as much
                        about how things look as how they work. Over the last
                        five years, I’ve worked across front-end and full-stack
                        roles—building internal dashboards, legal tech tools,
                        and community platforms that focus on usability,
                        performance, and resilience.
                      </p>
                    </div>

                    <div className="buttons">
                      <Group className="group-5" property1="default" />
                    </div>
                  </div>
                </div>
              )}

              {screenWidth >= 1200 && (
                <>
                  <div className="intro-2">
                    <div className="software-developer-2">
                      SOFTWARE DEVELOPER
                    </div>

                    <div className="content">
                      <p className="title">
                        Hello,&nbsp;&nbsp;my name is Brad Yin
                      </p>

                      <div className="div-wrapper">
                        <p className="text-2">
                          I&#39;m a software developer who cares just as much
                          about how things look as how they work. Over the last
                          five years, I’ve worked across front-end and
                          full-stack roles—building internal dashboards, legal
                          tech tools, and community platforms that focus on
                          usability, performance, and resilience.
                        </p>
                      </div>

                      <div className="buttons">
                        <Group className="group-5" property1="default" />
                      </div>
                    </div>
                  </div>

                  <div className="image-2">
                    <img
                      className="vector"
                      alt="Vector"
                      src={`${import.meta.env.BASE_URL}img/vector.png`}
                    />

                    <img
                      className="mask-group"
                      alt="Mask group"
                      src={`${import.meta.env.BASE_URL}img/mask-group.png`}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          <div
            div id="projects"
            className="projects"
            style={{
              borderRadius:
                screenWidth >= 750 && screenWidth < 1200 ? "24px" : undefined,
            }}
          >
            <div className="frame-5">
              <div className="text-3">Career</div>

              <div className="rectangle-2" />
            </div>

            <div
              className="project"
              style={{
                alignItems:
                  screenWidth >= 750 && screenWidth < 1200
                    ? "center"
                    : screenWidth >= 1200
                      ? "flex-start"
                      : undefined,
                flex:
                  screenWidth >= 750 && screenWidth < 1200
                    ? "0 0 auto"
                    : undefined,
                height: screenWidth >= 1200 ? "524px" : undefined,
              }}
            >
              {screenWidth >= 750 && screenWidth < 1200 && (
                <ProjectNfo className="project-nfo-instance" />
              )}

              {screenWidth >= 1200 && (
                <>
                  <ProjectNfo
                    className="instance-node"
                    text="AMD (2023-present)"
                    text1="At AMD, I helped build the Radeon Display Insights Portal—a React-based internal tool for the Display QA team to track and validate real-time GPU telemetry. The dashboard replaced legacy systems and supported new display tech like DisplayPort 2.1 and HDR10+. I worked on features like the HDR timeline viewer, FreeSync drift monitor, and a heatmap of display faults."
                  />
                  <div className="image-wrapper">
                    <img className="image-3" alt="Image" src={`${import.meta.env.BASE_URL}img/image.png`} />
                  </div>
                </>
              )}
            </div>

            <div
              className="project-2"
              style={{
                alignItems:
                  screenWidth >= 750 && screenWidth < 1200
                    ? "center"
                    : screenWidth >= 1200
                      ? "flex-start"
                      : undefined,
                flex:
                  screenWidth >= 750 && screenWidth < 1200
                    ? "0 0 auto"
                    : undefined,
                height: screenWidth >= 1200 ? "524px" : undefined,
              }}
            >
              {screenWidth >= 750 && screenWidth < 1200 && (
                <ProjectNfo
                  className="project-nfo-4"
                  frameClassName="project-nfo-2"
                  text="Rosenblum Law (2021-2023)"
                  text1="At Rosenblum Law, I built CaseSight Portal—an AI-powered OCR tool that automated case intake for traffic ticket submissions across NY and NJ. The system parsed scanned tickets from uploads, emails, and in-person submissions, extracting key legal data and syncing it to the firm’s CMS. I worked with attorneys and paralegals to design workflows tailored to compliance needs and high document variability."
                  textClassName="project-nfo-3"
                />
              )}

              {screenWidth >= 1200 && (
                <>
                  <img className="image-4" alt="Image" src={`${import.meta.env.BASE_URL}img/image-1.png`} />

                  <ProjectNfo
                    frameClassName="project-nfo-2"
                    text="Rosenblum Law (2021-2023)"
                    text1="At Rosenblum Law, I built CaseSight Portal—an AI-powered OCR tool that automated case intake for traffic ticket submissions across NY and NJ. The system parsed scanned tickets from uploads, emails, and in-person submissions, extracting key legal data and syncing it to the firm’s CMS. I worked with attorneys and paralegals to design workflows tailored to compliance needs and high document variability."
                    textClassName="project-nfo-3"
                  />
                </>
              )}
            </div>

            <div
              className="project-3"
              style={{
                alignItems:
                  screenWidth >= 750 && screenWidth < 1200
                    ? "center"
                    : screenWidth >= 1200
                      ? "flex-start"
                      : undefined,
                flex:
                  screenWidth >= 750 && screenWidth < 1200
                    ? "0 0 auto"
                    : undefined,
                height: screenWidth >= 1200 ? "524px" : undefined,
              }}
            >
              {screenWidth >= 750 && screenWidth < 1200 && (
                <ProjectNfo
                  className="project-nfo-4"
                  frameClassName="project-nfo-2"
                  text="Ironbound CC (2023-present)"
                  text1="At Ironbound, I developed a progressive web app that replaced paper-based check-ins and payroll tracking for early childhood centers. The app supported offline-first recording, syncing data to Firestore when online. I built accessible, responsive forms using semantic HTML and Flexbox, structured the UI with React Router, and managed state via Redux Toolkit. I also introduced Storybook for component previews and maintained strong test coverage with Jest and Cypress. We shipped in two-week sprints, regularly demoing to staff for real-world feedback."
                  textClassName="project-nfo-5"
                />
              )}

              {screenWidth >= 1200 && (
                <>
                  <ProjectNfo
                    frameClassName="project-nfo-2"
                    text="Ironbound CC (2023-present)"
                    text1="At Ironbound, I developed a progressive web app that replaced paper-based check-ins and payroll tracking for early childhood centers. The app supported offline-first recording, syncing data to Firestore when online. I built accessible, responsive forms using semantic HTML and Flexbox, structured the UI with React Router, and managed state via Redux Toolkit. I also introduced Storybook for component previews and maintained strong test coverage with Jest and Cypress. We shipped in two-week sprints, regularly demoing to staff for real-world feedback."
                    textClassName="project-nfo-5"
                  />
                  <img className="image-4" alt="Image" src={`${import.meta.env.BASE_URL}img/image-2.png`} />
                </>
              )}
            </div>
          </div>

          <img
            id="contact"
            className="frame-6"
            style={{
              height:
                screenWidth >= 750 && screenWidth < 1200
                  ? "249px"
                  : screenWidth >= 1200
                    ? "261px"
                    : undefined,
              marginLeft:
                screenWidth >= 750 && screenWidth < 1200
                  ? "-198.00px"
                  : undefined,
              marginRight:
                screenWidth >= 750 && screenWidth < 1200
                  ? "-198.00px"
                  : undefined,
              width:
                screenWidth >= 750 && screenWidth < 1200
                  ? "1146px"
                  : screenWidth >= 1200
                    ? "1200px"
                    : undefined,
            }}
            alt="Frame"
            src={`${import.meta.env.BASE_URL}img/frame-3355-2-1-1.png`}
          />
        </>
      )}
    </div>
  );
};
