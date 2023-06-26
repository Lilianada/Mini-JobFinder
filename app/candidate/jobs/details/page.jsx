import React from 'react';
import { AiOutlineClockCircle, AiOutlineEnvironment } from "react-icons/ai";
import { CgBriefcase } from "react-icons/cg";
import './style.scss';
import JobOverview from '@components/authorized/JobOverview';
import CompanyDescription from '@components/authorized/CompanyDescription';
import RequiredSkills from '@components/authorized/RequiredSkills';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

export default function JobDetails() {
  return (
    <div className="jobDetails__section">
        <div className="details__header">
            <h2 className="details__title">
                Senior Full-stack Developer
            </h2>
            <div className="details__flex">
                <p className="details__type">
                    <AiOutlineEnvironment fill="#9d9d9d" />
                    Full-time
                </p>
                <p className="details__posted">
                    <AiOutlineClockCircle fill="#9d9d9d" />
                    3 days ago
                </p>
            </div>
        </div>

        {/* <JobOverview/> */}
        <section className="employmentInfo__section">
      <div className="info__header">
        <p className="info__title">Employment Information</p>
      </div>

      <div className="info__content">
        <div className="info__item">
          <div className="info__left">
            <span className="info__icon">
              <HiOutlineBuildingOffice2 />
            </span>
            <p className="info__title">Industry</p>
          </div>
          <div className="info__right">
            <div className="info__text">
              Mechanical / Auto / Automotive, Civil / Construction
            </div>
          </div>
        </div>

        <div className="info__item">
          <div className="info__left">
            <span className="info__icon">
              <HiOutlineBuildingOffice2 />
            </span>
            <p className="info__title">Job level</p>
          </div>
          <div className="info__right">
            <div className="info__text">Entry Level</div>
          </div>
        </div>

        <div className="info__item">
          <div className="info__left">
            <span className="info__icon">
              <HiOutlineBuildingOffice2 />
            </span>
            <p className="info__title">Qualification</p>
          </div>
          <div className="info__right">
            <div className="info__text">Bachelor's Degree</div>
          </div>
        </div>

        <div className="info__item">
          <div className="info__left">
            <span className="info__icon">
              <HiOutlineBuildingOffice2 />
            </span>
            <p className="info__title">Salary</p>
          </div>
          <div className="info__right">
            <div className="info__text">$500 - $1000</div>
          </div>
        </div>

        <div className="info__item">
          <div className="info__left">
            <span className="info__icon">
              <HiOutlineBuildingOffice2 />
            </span>
            <p className="info__title">Experience</p>
          </div>
          <div className="info__right">
            <div className="info__text">1 year</div>
          </div>
        </div>

        <div className="info__item">
          <div className="info__left">
            <span className="info__icon">
              <HiOutlineBuildingOffice2 />
            </span>
            <p className="info__title">Job type</p>
          </div>
          <div className="info__right">
            <div className="info__text">Full-time</div>
          </div>
        </div>

        <div className="info__item">
          <div className="info__left">
            <span className="info__icon">
              <HiOutlineBuildingOffice2 />
            </span>
            <p className="info__title">Deadline</p>
          </div>
          <div className="info__right">
            <div className="info__text">30/10/2021</div>
          </div>
        </div>

        <div className="info__item">
          <div className="info__left">
            <span className="info__icon">
              <HiOutlineBuildingOffice2 />
            </span>
            <p className="info__title">Location</p>
          </div>
          <div className="info__right">
            <div className="info__text">San Gwann, Remote</div>
          </div>
        </div>
      </div>
    </section>

        {/* <CompanyDescription/> */}
        <section className="companyDescription__section">
        <div className="description__header">
            <h2 className="description__title">
                About Company
            </h2>
        </div>
      <p className="description__text">
        One of the main areas that I work on with my clients is shedding these
        non-supportive beliefs and replacing them with beliefs that will help
        them to accomplish their desires. It is truly amazing the damage that
        we, as parents, can inflict on our children. So why do we do it? For the
        most part, we don’t do it intentionally or with malice. 
        <br/> <br/>
        In the majority
        of cases, the cause is a well-meaning but unskilled or un-thinking
        parent, who says the wrong thing at the wrong time, and the message
        sticks – as simple as that!
      </p>
    </section>
        <RequiredSkills/>
    </div>
  )
}
