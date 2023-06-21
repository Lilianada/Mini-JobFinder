import React from "react";
import "./style.scss";

export default function ExpectationSection() {
  return (
    <section className="expect-section">
      <h2 className="expect-title">What to expect on Hired</h2>
      <p className="expect-description">
        We’re here to help you get a job you love. Here’s how Hired works, in a
        nutshell:
      </p>
      <ol className="expect-steps">
        <li className="expect-step">
          <span className="step-number">1.</span> Submit your profile
        </li>
        <li className="expect-step">
          <span className="step-number">2.</span> Our AI platform will evaluate
          if your profile is ready to be shown to employers. We will email you
          when it is approved. Learn how to strengthen your profile in our Help
          Center.
        </li>
        <li className="expect-step">
          <span className="step-number">3.</span> Get interview requests
        </li>
        <li className="expect-step">
          <span className="step-number">4.</span> Employers see your profile on
          their curated candidate list for 10 weeks, and will send you interview
          requests if they are interested in talking to you.
        </li>
        <li className="expect-step">
          <span className="step-number">5.</span> Choose your opportunities
        </li>
        <li className="expect-step">
          <span className="step-number">6.</span> Accept or decline interview
          requests within 48 hours to maintain a high response rate. Be sure to
          keep your availability calendar updated so employers can schedule
          interviews promptly.
        </li>
      </ol>
    </section>
  );
}
