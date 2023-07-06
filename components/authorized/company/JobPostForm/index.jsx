import React from "react";
import "./style.scss" ;
export default function JobPostForm() {
  return (
    <section class="job-postings__section">
      <h2 class="section__title">Create Job Posting</h2>
      <form class="job-posting__form">
        <label for="job-title">Job Title:</label>
        <input type="text" id="job-title" name="job-title" required />

        <label for="job-description">Job Description:</label>
        <textarea
          id="job-description"
          name="job-description"
          required
        ></textarea>

        <label for="location">Location:</label>
        <input type="text" id="location" name="location" required />

        <button type="submit" class="submit__button">
          Create Job Posting
        </button>
      </form>

      <div class="job-postings__container">
        <h3 class="job-postings__title">Active Postings</h3>
        <ul class="active-postings__list">
          <li class="job-posting">
            <h4 class="job-posting__title">Frontend Developer</h4>
            <p class="job-posting__location">Location: New York, NY</p>
            <p class="job-posting__description">
              We are looking for a skilled Frontend Developer to join our team.
              The ideal candidate has experience with HTML, CSS, and JavaScript.
            </p>
            <div class="job-posting__actions">
              <button class="edit__button">Edit</button>
            </div>
          </li>
        </ul>

        <h3 class="job-postings__title">Inactive Postings</h3>
        <ul class="inactive-postings__list">
          <li class="job-posting">
            <h4 class="job-posting__title">UI/UX Designer</h4>
            <p class="job-posting__location">Location: San Francisco, CA</p>
            <p class="job-posting__description">
              We are seeking a talented UI/UX Designer to design and enhance the
              user experience of our applications.
            </p>
            <div class="job-posting__actions">
              <button class="activate__button">Activate</button>
              <button class="edit__button">Edit</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
