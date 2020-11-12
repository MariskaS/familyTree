import React from 'react';

import MemberList from "../components/members/MemberList";

import '../styles/layout/section.scss'
import '../styles/components/typography/h3.scss'

const Members = () => (
  <section className="ft-section">
    <div className="ft-section__container">
      <h3 className="ft-h3">Member List</h3>
      <MemberList/>
    </div>
  </section>
);

export default Members;
