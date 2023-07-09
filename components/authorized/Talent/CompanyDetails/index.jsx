import React, {useState} from "react";
import {  MdPeopleOutline } from "react-icons/md";
import "./style.scss";
import { AiOutlineEnvironment, AiOutlineMail } from "react-icons/ai";

export default function CompanyDetails() {
    const [formData, setFormData] = useState({
        name: "Lovehoney Group",
        email: "career@lovehoneygroup.com",
        bio: "The Lovehoney Group is the world’s leading sexual wellbeing company. We offer exciting brands with innovative, high-quality sex toys, lingerie, and accessories in a smooth online shopping experience.\n\nLovehoney employs over 900 awesome, diverse & driven people throughout our 9 offices across the globe, celebrating a broad spectrum of talents in engineering, industrial design, sales, and marketing.\n\nWe are proud to be a company that thrives by doing things differently, challenging expectations and stereotypes while making a positive impact on our customers’ lives.",
        profileImage: "https://ouch-cdn2.icons8.com/-JZptPGuKRXkyuzdLeFBi71mdKqKYQHlVYx_4AQFhdQ/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png",
        teamSize: "500-1000",
        linkedInLink: "https://www.linkedin.com/company/lovehoney-group/",
        companySite: "https://www.lovehoneygroup.com/",
        address: "Berlin, Germany (hybrid)",
      });
      const {
        name,
        email,
        bio,
        profileImage,
        teamSize,
        linkedInLink,
        companySite,
        address,
      } = formData;
    
  return (
    <section className="details__page">
         <div className="details__container">
          <div className="details__top">
            <div className="details__column">
              {profileImage && (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="details__image"
                />
              )}
              <h4 className="user__name">Welcome to {name}</h4>

              <div className="details__row">
                <p className="user__address">
                  <AiOutlineEnvironment />
                  {address}
                </p>
                <p className="user__address">
                  <AiOutlineMail />
                  {email}
                </p>
                <p className="user__address">
                    <MdPeopleOutline />
                    {teamSize} employees
                  </p>
              </div>
            </div>
          </div>

          <div className="details__bottom">
            <div className="details__box">
              <h4 className="title">About Us</h4>
              <p className="text">{bio}</p>
            </div>

            <div className="details__box">
              <h4 className="title">Open Positions</h4>
              <p className="text">Nil </p>
            </div>

            <div className="details__box">
              <h4 className="title">Social Links</h4>
              <p className="text">
                <strong>LinkedIn:</strong> {" "}
                <a href={linkedInLink} className="text">{linkedInLink}</a>
                
              </p>
              <p className="text">
                <strong>Portfolio:</strong> {" "}
                <a href={companySite} className="text">{companySite}</a>
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}
