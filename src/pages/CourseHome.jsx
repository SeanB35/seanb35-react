import React from 'react';
import useDocumentTitle from '../components/useDocumentTitle';

function CourseHome() {
  useDocumentTitle("Sean Briganti's Super Beaver ~ ITIS 3135 | Course Home");

  return (
    <main>
      <section className="hero">
        <h1>I am Sean and this is my ITIS3135 First Course Page</h1>
      </section>
      <article>
        <h3>Course Status</h3>
        <p>Under Construction <strong>ITIS 3135</strong>.</p>
      </article>
    </main>
  );
}

export default CourseHome;
