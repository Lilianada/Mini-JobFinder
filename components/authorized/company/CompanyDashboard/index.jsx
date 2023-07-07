'use client'
import ActiveJobs from "@components/authorized/company/ActiveJobs";
import InactiveJobs from "@components/authorized/company/InactiveJobs";
import JobPostForm from "@components/authorized/company/JobPostForm";
import React, { useState } from "react";
import "./style.scss";

const DashboardLayout = () => {
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
              activeTab === "activeJobs" ? "active" : ""
            }`}
            onClick={() => handleTabClick("activeJobs")}
          >
            Active Jobs
          </li>
          <li
            className={`sidebar__item ${
              activeTab === "inactiveJobs" ? "active" : ""
            }`}
            onClick={() => handleTabClick("inactiveJobs")}
          >
            Inactive Jobs
          </li>
          <li
            className={`sidebar__item ${
              activeTab === "postJob" ? "active" : ""
            }`}
            onClick={() => handleTabClick("postJob")}
          >
            Post Job
          </li>
          {/* <li
            className={`sidebar__item ${
              activeTab === "candidates" ? "active" : ""
            }`}
            onClick={() => handleTabClick("candidates")}
          >
            Candidates
          </li> */}
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
        {activeTab === "activeJobs" && <ActiveJobsTab />}
        {activeTab === "inactiveJobs" && <InactiveJobsTab />}
        {activeTab === "postJob" && <PostJobTab />}
        {/* {activeTab === "candidates" && <CandidatesTab />} */}
        {activeTab === "analytics" && <AnalyticsTab />}
        {activeTab === "notifications" && <NotificationsTab />}
        {activeTab === "accountSettings" && <AccountSettingsTab />}
      </div>
    </div>
  );
};

// Individual Tab Components

const ActiveJobsTab = () => {
  return <ActiveJobs/>;
};

const InactiveJobsTab = () => {
  return <InactiveJobs/>;
};

const PostJobTab = () => {
  return <JobPostForm/>;
};

// const CandidatesTab = () => {
//   return <div>Candidates Tab Content</div>;
// };

const AnalyticsTab = () => {
  return <div>Analytics Tab Content</div>;
};

const NotificationsTab = () => {
  return <div>Notifications Tab Content</div>;
};

const AccountSettingsTab = () => {
  return <div>Account Settings Tab Content</div>;
};

export default DashboardLayout;
