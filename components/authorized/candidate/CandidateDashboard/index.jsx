'use client'
import InactiveJobs from "@components/authorized/company/InactiveJobs";
import JobPostForm from "@components/authorized/company/JobPostForm";
import React, { useState } from "react";
import "./style.scss";
import SavedJobs from "../SavedJobs";
import MyResume from "../MyResume";
import AppliedJobs from "../AppliedJobs";

const CandidateDashLayout = () => {
  const [activeTab, setActiveTab] = useState("activeJobs");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard__layout">
      <div className="sidebar">
        <ul className="sidebar__menu">
          <li
            className={`sidebar__item ${
              activeTab === "savedJobs" ? "active" : ""
            }`}
            onClick={() => handleTabClick("savedJobs")}
          >
            Saved Jobs
          </li>
          <li
            className={`sidebar__item ${
              activeTab === "appliedJobs" ? "active" : ""
            }`}
            onClick={() => handleTabClick("appliedJobs")}
          >
            Applied Jobs
          </li>
          <li
            className={`sidebar__item ${
              activeTab === "myResume" ? "active" : ""
            }`}
            onClick={() => handleTabClick("myResume")}
          >
            My Resume
          </li>
          <li
            className={`sidebar__item ${
              activeTab === "notifications" ? "active" : ""
            }`}
            onClick={() => handleTabClick("notifications")}
          >
            Notifications
          </li>
        </ul>
      </div>

      <div className="content__area">
        {activeTab === "savedJobs" && <SavedJobsTab />}
        {activeTab === "appliedJobs" && <AppliedJobsTab />}
        {activeTab === "postJob" && <MyResumeTab />}
        {activeTab === "notifications" && <NotificationsTab />}
      </div>
    </div>
  );
};

// Individual Tab Components

const SavedJobsTab = () => {
  return <SavedJobs/>;
};

const AppliedJobsTab = () => {
  return <AppliedJobs/>;
};

const MyResumeTab = () => {
  return <MyResume/>;
};

const NotificationsTab = () => {
  return <div>Notifications Tab Content</div>;
};

export default CandidateDashLayout;
