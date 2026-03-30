import React from 'react';
import useDocumentTitle from '../components/useDocumentTitle';

function Introduction() {
  useDocumentTitle('Sean D. Briganti | Introduction');

  return (
    <main>
      <h2>Introduction</h2>

      <figure>
        <img src="/images/beaver.png" alt="Beaver holding a stick in its mouth" />
        <figcaption>Beaver holding a stick - my personal brand mascot.</figcaption>
      </figure>

      <p>I'm a junior at UNC Charlotte studying Computer Science with a concentration in Cybersecurity. I'm excited to build complex webpages this semester.</p>

      <ul>
        <li><strong>Personal Background:</strong> I'm 18 years old and I enjoy math and going to the gym.</li>
        <li><strong>Professional Background:</strong> I have multiple offers for interning in spring, summer, and fall, ranging from offensive security to Go programming.</li>
        <li><strong>Academic Background:</strong> I completed high school simultaneously with an associate degree.</li>
        <li><strong>Courses I'm Taking:</strong>
          <ol>
            <li><strong>Math 2165:</strong> Required, and I love math.</li>
            <li><strong>ITIS 3135:</strong> Front-End development is vital for the field.</li>
            <li><strong>ITSC 2181:</strong> Understanding computers "under the hood."</li>
            <li><strong>ITIS 3200:</strong> Most relevant for my Cybersecurity focus.</li>
          </ol>
        </li>
      </ul>

      <blockquote>
        "The happiness of your life depends upon the quality of your thoughts."
        <cite>— Marcus Aurelius</cite>
      </blockquote>
    </main>
  );
}

export default Introduction;
