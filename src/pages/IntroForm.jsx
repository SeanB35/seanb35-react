import React from 'react';
import useDocumentTitle from '../components/useDocumentTitle';
import '../styles/intro_form.css';

function IntroForm() {
  useDocumentTitle('Sean D. Briganti | Introduction Form');

  return (
    <main>
      <h2>Introduction Form</h2>

      <form id="intro-form" noValidate>
        {/* Name Fields */}
        <fieldset>
          <legend>Name</legend>
          <div className="inline-fields">
            <div>
              <label htmlFor="first-name" className="required-star">First Name</label>
              <input type="text" id="first-name" name="firstName" defaultValue="Sean" placeholder="Enter first name" required />
            </div>
            <div>
              <label htmlFor="middle-name">Middle Name/Initial</label>
              <input type="text" id="middle-name" name="middleName" defaultValue="D." placeholder="Enter middle name" />
            </div>
            <div>
              <label htmlFor="last-name" className="required-star">Last Name</label>
              <input type="text" id="last-name" name="lastName" defaultValue="Briganti" placeholder="Enter last name" required />
            </div>
            <div>
              <label htmlFor="nickname">Nickname</label>
              <input type="text" id="nickname" name="nickname" defaultValue="" placeholder="Enter nickname (optional)" />
            </div>
          </div>
        </fieldset>

        {/* Acknowledgment */}
        <fieldset>
          <legend>Acknowledgment</legend>
          <label htmlFor="acknowledge-statement" className="required-star">Acknowledgment Statement</label>
          <input type="text" id="acknowledge-statement" name="acknowledgeStatement" defaultValue="I acknowledge that the information provided is accurate to the best of my knowledge." placeholder="Enter acknowledgment statement" required />
          <label htmlFor="acknowledge-date" className="required-star">Date</label>
          <input type="date" id="acknowledge-date" name="acknowledgeDate" defaultValue="2026-03-22" required />
        </fieldset>

        {/* Mascot */}
        <fieldset>
          <legend>Mascot</legend>
          <div className="inline-fields">
            <div>
              <label htmlFor="mascot-adjective" className="required-star">Adjective</label>
              <input type="text" id="mascot-adjective" name="mascotAdjective" defaultValue="Super" placeholder="e.g. Super, Mighty" required />
            </div>
            <div>
              <label htmlFor="mascot-animal" className="required-star">Animal</label>
              <input type="text" id="mascot-animal" name="mascotAnimal" defaultValue="Beaver" placeholder="e.g. Beaver, Eagle" required />
            </div>
          </div>
        </fieldset>

        {/* Image */}
        <fieldset>
          <legend>Image</legend>
          <label htmlFor="image-file" className="required-star">Image File</label>
          <input type="file" id="image-file" name="imageFile" accept="image/*" required />
          <label htmlFor="image-alt" className="required-star">Image Alt Text</label>
          <input type="text" id="image-alt" name="imageAlt" defaultValue="Beaver holding a stick in its mouth" placeholder="Describe the image" required />
          <label htmlFor="image-caption" className="required-star">Image Caption</label>
          <input type="text" id="image-caption" name="imageCaption" defaultValue="Beaver holding a stick - my personal brand mascot." placeholder="Caption for the image" required />
        </fieldset>

        {/* Personal Statement */}
        <fieldset>
          <legend>Personal Statement</legend>
          <label htmlFor="personal-statement" className="required-star">Statement</label>
          <textarea id="personal-statement" name="personalStatement" placeholder="Write your personal introduction statement" required defaultValue="I'm a junior at UNC Charlotte studying Computer Science with a concentration in Cybersecurity. I'm excited to build complex webpages this semester." />
        </fieldset>

        {/* Main Bullets */}
        <fieldset>
          <legend>Main Bullets (7 Alignment)</legend>

          <label htmlFor="bullet1-title" className="required-star">Bullet 1 Title</label>
          <input type="text" id="bullet1-title" name="bullet1Title" defaultValue="Personal Background:" placeholder="e.g. Personal Background:" required />
          <label htmlFor="bullet1-text" className="required-star">Bullet 1 Text</label>
          <input type="text" id="bullet1-text" name="bullet1Text" defaultValue="I'm 18 years old and I enjoy math and going to the gym." required />

          <label htmlFor="bullet2-title" className="required-star">Bullet 2 Title</label>
          <input type="text" id="bullet2-title" name="bullet2Title" defaultValue="Professional Background:" placeholder="e.g. Professional Background:" required />
          <label htmlFor="bullet2-text" className="required-star">Bullet 2 Text</label>
          <input type="text" id="bullet2-text" name="bullet2Text" defaultValue="I have multiple offers for interning in spring, summer, and fall, ranging from offensive security to Go programming." required />

          <label htmlFor="bullet3-title" className="required-star">Bullet 3 Title</label>
          <input type="text" id="bullet3-title" name="bullet3Title" defaultValue="Academic Background:" placeholder="e.g. Academic Background:" required />
          <label htmlFor="bullet3-text" className="required-star">Bullet 3 Text</label>
          <input type="text" id="bullet3-text" name="bullet3Text" defaultValue="I completed high school simultaneously with an associate degree." required />

          <label htmlFor="bullet4-title" className="required-star">Bullet 4 Title (Computer Platform)</label>
          <input type="text" id="bullet4-title" name="bullet4Title" defaultValue="Primary Computer Platform:" required />
          <label htmlFor="bullet4-text" className="required-star">Bullet 4 Text</label>
          <input type="text" id="bullet4-text" name="bullet4Text" defaultValue="Windows" required />

          <label htmlFor="courses-title" className="required-star">Bullet 5 Title (Courses)</label>
          <input type="text" id="courses-title" name="coursesTitle" defaultValue="Courses I'm Taking:" required />

          <label htmlFor="bullet6-title">Bullet 6 Title (Funny thing) - Optional</label>
          <input type="text" id="bullet6-title" name="bullet6Title" defaultValue="Funny thing:" placeholder="..." />
          <label htmlFor="bullet6-text">Bullet 6 Text - Optional</label>
          <input type="text" id="bullet6-text" name="bullet6Text" defaultValue="I have weirdly flexible shoulders." placeholder="Something funny" />

          <label htmlFor="bullet7-title">Bullet 7 Title (Something to share) - Optional</label>
          <input type="text" id="bullet7-title" name="bullet7Title" defaultValue="Something I would like to share:" placeholder="..." />
          <label htmlFor="bullet7-text">Bullet 7 Text - Optional</label>
          <input type="text" id="bullet7-text" name="bullet7Text" defaultValue="Can't wait to work with everyone." placeholder="Share something" />
        </fieldset>

        {/* Dynamic Courses */}
        <fieldset>
          <legend>Courses Tracker (Bullet 5 Sub-list)</legend>
          <div id="courses-container">
            <div className="course-entry" data-index="1">
              <div>
                <label>Dept</label>
                <input type="text" name="courseDept1" defaultValue="Math" placeholder="e.g. ITIS" required />
              </div>
              <div>
                <label>Number</label>
                <input type="text" name="courseNum1" defaultValue="2165" placeholder="e.g. 3135" required />
              </div>
              <div>
                <label>Name</label>
                <input type="text" name="courseName1" defaultValue="" placeholder="Course name (optional)" />
              </div>
              <div>
                <label>Reason</label>
                <input type="text" name="courseReason1" defaultValue="Required, and I love math." placeholder="Why you're taking it" required />
              </div>
            </div>
            <div className="course-entry" data-index="2">
              <div>
                <label>Dept</label>
                <input type="text" name="courseDept2" defaultValue="ITIS" placeholder="e.g. ITIS" required />
              </div>
              <div>
                <label>Number</label>
                <input type="text" name="courseNum2" defaultValue="3135" placeholder="e.g. 3135" required />
              </div>
              <div>
                <label>Name</label>
                <input type="text" name="courseName2" defaultValue="" placeholder="Course name (optional)" />
              </div>
              <div>
                <label>Reason</label>
                <input type="text" name="courseReason2" defaultValue="Front-End development is vital for the field." placeholder="Why you're taking it" required />
              </div>
            </div>
            <div className="course-entry" data-index="3">
              <div>
                <label>Dept</label>
                <input type="text" name="courseDept3" defaultValue="ITSC" placeholder="e.g. ITIS" required />
              </div>
              <div>
                <label>Number</label>
                <input type="text" name="courseNum3" defaultValue="2181" placeholder="e.g. 3135" required />
              </div>
              <div>
                <label>Name</label>
                <input type="text" name="courseName3" defaultValue="" placeholder="Course name (optional)" />
              </div>
              <div>
                <label>Reason</label>
                <input type="text" name="courseReason3" defaultValue='Understanding computers "under the hood."' placeholder="Why you're taking it" required />
              </div>
            </div>
            <div className="course-entry" data-index="4">
              <div>
                <label>Dept</label>
                <input type="text" name="courseDept4" defaultValue="ITIS" placeholder="e.g. ITIS" required />
              </div>
              <div>
                <label>Number</label>
                <input type="text" name="courseNum4" defaultValue="3200" placeholder="e.g. 3135" required />
              </div>
              <div>
                <label>Name</label>
                <input type="text" name="courseName4" defaultValue="" placeholder="Course name (optional)" />
              </div>
              <div>
                <label>Reason</label>
                <input type="text" name="courseReason4" defaultValue="Most relevant for my Cybersecurity focus." placeholder="Why you're taking it" required />
              </div>
            </div>
          </div>
          <div className="btn-row">
            <button type="button" id="add-course-btn" className="btn-secondary btn-small">+ Add Course</button>
            <button type="button" id="delete-course-btn" className="btn-danger btn-small">− Delete Last Course</button>
          </div>
        </fieldset>

        {/* Quote */}
        <fieldset>
          <legend>Quote</legend>
          <label htmlFor="quote-text" className="required-star">Quote</label>
          <input type="text" id="quote-text" name="quoteText" defaultValue="The happiness of your life depends upon the quality of your thoughts." placeholder="Enter a quote" required />
          <label htmlFor="quote-author" className="required-star">Author</label>
          <input type="text" id="quote-author" name="quoteAuthor" defaultValue="Marcus Aurelius" placeholder="Author of the quote" required />
        </fieldset>

        {/* Links */}
        <fieldset>
          <legend>Links</legend>
          <label htmlFor="link-github" className="required-star">GitHub URL</label>
          <input type="url" id="link-github" name="linkGithub" defaultValue="https://github.com/SeanB35" placeholder="https://github.com/..." required />
          <label htmlFor="link-charlotte" className="required-star">Charlotte Web URL</label>
          <input type="url" id="link-charlotte" name="linkCharlotte" defaultValue="https://webpages.charlotte.edu/sbrigant" placeholder="https://webpages.charlotte.edu/..." required />
          <label htmlFor="link-ghpages" className="required-star">GitHub Pages URL</label>
          <input type="url" id="link-ghpages" name="linkGhPages" defaultValue="https://seanb35.github.io/" placeholder="https://username.github.io/" required />
          <label htmlFor="link-freecodecamp" className="required-star">freeCodeCamp URL</label>
          <input type="url" id="link-freecodecamp" name="linkFreeCodeCamp" defaultValue="https://www.freecodecamp.org/sbrigant" placeholder="https://www.freecodecamp.org/..." required />
          <label htmlFor="link-linkedin" className="required-star">LinkedIn URL</label>
          <input type="url" id="link-linkedin" name="linkLinkedin" defaultValue="https://www.linkedin.com/in/sean-briganti/" placeholder="https://www.linkedin.com/in/..." required />
        </fieldset>

        {/* Buttons */}
        <div className="btn-row">
          <button type="submit" className="btn-primary">Submit</button>
          <input type="reset" value="Reset" />
          <button type="button" id="clear-btn" className="btn-secondary">Clear</button>
        </div>
      </form>

      <div id="output"></div>
    </main>
  );
}

export default IntroForm;
