import React from 'react';
import './style.scss';

export default function CompanyTeam() {
  return (
    <section class="team__section">
      <div className="section__header">
        <h2 className="section__title">Our Team</h2>
      </div>

  <div class="team__container">
    <div class="team__member">
      <img src="team-member1.jpg" alt="Team Member 1" class="member__image"/>
      <h3 class="member__name">John Doe</h3>
      <p class="member__position">CEO</p>
    </div>
    <div class="team__member">
      <div className="member__image">
        <img src="team-member2.jpg" alt="Team Member 2"/>
      </div>
      <h3 class="member__name">Jane Smith</h3>
      <p class="member__position">COO</p>
    </div>
    <div class="team__member">
      <img src="team-member3.jpg" alt="Team Member 3" class="member__image"/>
      <h3 class="member__name">Alex Johnson</h3>
      <p class="member__position">CTO</p>
    </div>
    <div class="team__member">
      <img src="team-member4.jpg" alt="Team Member 4" class="member__image"/>
      <h3 class="member__name">Emily Wilson</h3>
      <p class="member__position">Marketing Director</p>
    </div>
  </div>
</section>

  )
}
