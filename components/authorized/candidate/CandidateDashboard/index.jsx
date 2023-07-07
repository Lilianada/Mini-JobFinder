'use client'
import ActiveJobs from "@components/authorized/company/ActiveJobs";
import InactiveJobs from "@components/authorized/company/InactiveJobs";
import JobPostForm from "@components/authorized/company/JobPostForm";
import React, { useState } from "react";
import "./style.scss";

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
            Active Jobs
          </li>
          <li
            className={`sidebar__item ${
              activeTab === "inactiveJobs" ? "active" : ""
            }`}
            onClick={() => handleTabClick("inactiveJobs")}
          >
            Applied Jobs
          </li>
          <li
            className={`sidebar__item ${
              activeTab === "postJob" ? "active" : ""
            }`}
            onClick={() => handleTabClick("postJob")}
          >
            Post Job
          </li>
          <li
            className={`sidebar__item ${
              activeTab === "analytics" ? "active" : ""
            }`}
            onClick={() => handleTabClick("analytics")}
          >
            Analytics
          </li>
          <li
            className={`sidebar__item ${
              activeTab === "notifications" ? "active" : ""
            }`}
            onClick={() => handleTabClick("notifications")}
          >
            Notifications
          </li>
          <li
            className={`sidebar__item ${
              activeTab === "accountSettings" ? "active" : ""
            }`}
            onClick={() => handleTabClick("accountSettings")}
          >
            Account Settings
          </li>
        </ul>
      </div>

      <div className="content__area">
        {activeTab === "savedJobs" && <SavedJobsTab />}
        {activeTab === "inactiveJobs" && <InactiveJobsTab />}
        {activeTab === "postJob" && <PostJobTab />}
        {activeTab === "analytics" && <AnalyticsTab />}
        {activeTab === "notifications" && <NotificationsTab />}
        {activeTab === "accountSettings" && <AccountSettingsTab />}
      </div>
    </div>
  );
};

// Individual Tab Components

const SavedJobsTab = () => {
  return <ActiveJobs/>;
};

const InactiveJobsTab = () => {
  return <InactiveJobs/>;
};

const PostJobTab = () => {
  return <JobPostForm/>;
};

const AnalyticsTab = () => {
  return <div>Analytics Tab Content</div>;
};

const NotificationsTab = () => {
  return <div>Notifications Tab Content</div>;
};

const AccountSettingsTab = () => {
  return <div>Account Settings Tab Content</div>;
};

export default CandidateDashLayout;
