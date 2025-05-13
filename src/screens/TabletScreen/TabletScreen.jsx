import React from "react";
import { Group } from "../../components/Group";
import { Header } from "../../components/Header";
import { ProjectNfo } from "../../components/ProjectNfo";
import "./style.css";

export const TabletScreen = () => {
  return (
    <div className="tablet-screen">
      <div className="frame-9">
        <Header className="header-2" tabDefaultTabDefaultClassName="header-3" />
        <div className="intro-wrapper">
          <div className="intro-3">
            <div className="software-developer-3">SOFTWARE DEVELOPER</div>

            <div className="content-2">
              <img className="image-5" alt="Image" src="/img/image-1-1-1.png" />

              <p className="title-2">Hello,&nbsp;&nbsp;my name is Brad Yin</p>

              <div className="subheadline-2">
                <p className="text-4">
                  I&#39;m a software developer who cares just as much about how
                  things look as how they work. Over the last five years, I’ve
                  worked across front-end and full-stack roles—building internal
                  dashboards, legal tech tools, and community platforms that
                  focus on usability, performance, and resilience.
                </p>
              </div>

              <div className="group-wrapper">
                <Group className="group-instance" property1="default" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-2">
        <div className="frame-10">
          <div className="text-5">Career</div>

          <div className="rectangle-3" />
        </div>

        <div className="project-nfo-wrapper">
          <ProjectNfo
            className="project-nfo-6"
            text="AMD (2023-present)"
            text1="At AMD, I helped build the Radeon Display Insights Portal—a React-based internal tool for the Display QA team to track and validate real-time GPU telemetry. The dashboard replaced legacy systems and supported new display tech like DisplayPort 2.1 and HDR10+. I worked on features like the HDR timeline viewer, FreeSync drift monitor, and a heatmap of display faults."
          />
        </div>

        <div className="project-nfo-wrapper">
          <ProjectNfo
            className="project-nfo-7"
            frameClassName="project-nfo-8"
            text="Rosenblum Law (2021-2023)"
            text1="At Rosenblum Law, I built CaseSight Portal—an AI-powered OCR tool that automated case intake for traffic ticket submissions across NY and NJ. The system parsed scanned tickets from uploads, emails, and in-person submissions, extracting key legal data and syncing it to the firm’s CMS. I worked with attorneys and paralegals to design workflows tailored to compliance needs and high document variability."
            textClassName="project-nfo-9"
          />
        </div>

        <div className="project-nfo-wrapper">
          <ProjectNfo
            className="project-nfo-7"
            frameClassName="project-nfo-8"
            text="Ironbound CC (2023-present)"
            text1="At Ironbound, I developed a progressive web app that replaced paper-based check-ins and payroll tracking for early childhood centers. The app supported offline-first recording, syncing data to Firestore when online. I built accessible, responsive forms using semantic HTML and Flexbox, structured the UI with React Router, and managed state via Redux Toolkit. I also introduced Storybook for component previews and maintained strong test coverage with Jest and Cypress. We shipped in two-week sprints, regularly demoing to staff for real-world feedback."
            textClassName="project-nfo-10"
          />
        </div>
      </div>

      <img className="frame-11" alt="Frame" src="/img/frame-3355-2-1-1.png" />
    </div>
  );
};
