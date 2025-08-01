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
            text1="At AMD, I built AMD’s new QA telemetry dashboard for GPU display validation using React 18, TypeScript, Node.js, and WebSockets. Delivered tools like the HDR Timeline Viewer and FreeSync Inspector for real-time debugging. Shipped internal systems for log tagging, anomaly detection, and replayable test sessions. Collaborated with firmware teams to standardize telemetry formats. Stack: React, Node.js, D3.js, PostgreSQL, Docker, WebSocket, Jest, Storybook, GitLab"
          />
        </div>

        <div className="project-nfo-wrapper">
          <ProjectNfo
            className="project-nfo-7"
            frameClassName="project-nfo-8"
            text="Rosenblum Law (2021-2023)"
            text1="At Rosenblum Law, I led development of CaseSight, an OCR-based legal intake platform that automated ticket processing using Google Vision, Azure OCR, and custom Python pipelines. Built a TypeScript dashboard with diff previews, form overrides, and analytics tools to surface accuracy trends and intake performance. Stack: React, Node.js, Django, Python, Celery, RabbitMQ, PostgreSQL, REST, Docker"
            textClassName="project-nfo-9"
          />
        </div>

        <div className="project-nfo-wrapper">
          <ProjectNfo
            className="project-nfo-7"
            frameClassName="project-nfo-8"
            text="Ironbound CC (2019-2021)"
            text1="At Ironbound, I built an Angular (v12) offline-first web app for daycare check-ins and staff scheduling. Designed dynamic forms and real-time sync via NgRx, IndexedDB, and a .NET Core API. Created an internal admin panel with audit logs and role-based settings; optimized performance for classroom tablets. Stack: Angular, NgRx, RxJS, IndexedDB, .NET Core, Jasmine, Cypress"
            textClassName="project-nfo-10"
          />
        </div>
      </div>

      <img className="frame-11" alt="Frame" src="/img/frame-3355-2-1-1.png" />
    </div>
  );
};
