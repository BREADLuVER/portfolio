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
                      <Group className="group-5" property1="default" type="github" />
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
                        <Group className="group-5" property1="default" type="github" />
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
                    text1="At AMD, I built AMD’s new QA telemetry dashboard for GPU display validation using React 18, TypeScript, Node.js, and WebSockets. Delivered tools like the HDR Timeline Viewer and FreeSync Inspector for real-time debugging. Shipped internal systems for log tagging, anomaly detection, and replayable test sessions. Collaborated with firmware teams to standardize telemetry formats. Stack: React, Node.js, D3.js, PostgreSQL, Docker, WebSocket, Jest, Storybook, GitLab"
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
                  text1="At Rosenblum Law, I led development of CaseSight, an OCR-based legal intake platform that automated ticket processing using Google Vision, Azure OCR, and custom Python pipelines. Built a TypeScript dashboard with diff previews, form overrides, and analytics tools to surface accuracy trends and intake performance. Stack: React, Node.js, Django, Python, Celery, RabbitMQ, PostgreSQL, REST, Docker"
                  textClassName="project-nfo-3"
                />
              )}

              {screenWidth >= 1200 && (
                <>
                  <img className="image-4" alt="Image" src={`${import.meta.env.BASE_URL}img/image-1.png`} />

                  <ProjectNfo
                    frameClassName="project-nfo-2"
                    text="Rosenblum Law (2021-2023)"
                    text1="At Rosenblum Law, I led development of CaseSight, an OCR-based legal intake platform that automated ticket processing using Google Vision, Azure OCR, and custom Python pipelines. Built a TypeScript dashboard with diff previews, form overrides, and analytics tools to surface accuracy trends and intake performance. Stack: React, Node.js, Django, Python, Celery, RabbitMQ, PostgreSQL, REST, Docker"
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
                  text="Ironbound CC (2019-2021)"
                  text1="At Ironbound, I built an Angular (v12) offline-first web app for daycare check-ins and staff scheduling. Designed dynamic forms and real-time sync via NgRx, IndexedDB, and a .NET Core API. Created an internal admin panel with audit logs and role-based settings; optimized performance for classroom tablets. Stack: Angular, NgRx, RxJS, IndexedDB, .NET Core, Jasmine, Cypress"
                />
              )}

              {screenWidth >= 1200 && (
                <>
                  <ProjectNfo
                    frameClassName="project-nfo-2"
                    text="Ironbound CC (2019-2021)"
                    text1="At Ironbound, I built an Angular (v12) offline-first web app for daycare check-ins and staff scheduling. Designed dynamic forms and real-time sync via NgRx, IndexedDB, and a .NET Core API. Created an internal admin panel with audit logs and role-based settings; optimized performance for classroom tablets. Stack: Angular, NgRx, RxJS, IndexedDB, .NET Core, Jasmine, Cypress"
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
