import React from 'react';
import useDocumentTitle from '../components/useDocumentTitle';
import usePageStyle from '../components/usePageStyle';
import '../styles/survey.css';

const SURVEY_BODY_CSS = `
body {
  font-family: 'Open Sans', sans-serif !important;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;
  color: #f1faee !important;
  margin: 0;
  background: linear-gradient(135deg, #0077be, #003049) !important;
  padding: 20px;
}
`;

function Survey() {
  useDocumentTitle('Super Beaver | Survey');
  usePageStyle('survey', SURVEY_BODY_CSS);

  return (
    <main>
      <div className="container">
        <header className="header">
          <h1 id="title" className="text-center">Woodland Sidekick Squad Application</h1>
          <p id="description" className="description text-center">
            Join Super Beaver in the fight for woodland justice and epic dam construction!
          </p>
        </header>
        <form id="survey-form">
          <div className="form-group">
            <label id="name-label" htmlFor="name">Hero Name (or Real Name)</label>
            <input type="text" name="name" id="name" className="form-control" placeholder="Enter your heroic name" required />
          </div>

          <div className="form-group">
            <label id="email-label" htmlFor="email">Secret Email</label>
            <input type="email" name="email" id="email" className="form-control" placeholder="Enter your secret communications email" required />
          </div>

          <div className="form-group">
            <label id="number-label" htmlFor="number">Years Foraging <span className="clue">(optional)</span></label>
            <input type="number" name="age" id="number" min="0" max="99" className="form-control" placeholder="Years" />
          </div>

          <div className="form-group">
            <p>Which option best describes your current role in the forest?</p>
            <select id="dropdown" name="role" className="form-control" required defaultValue="">
              <option disabled value="">Select current woodland role</option>
              <option value="student">Apprentice Lodge Builder</option>
              <option value="job">Full-time River Patrol</option>
              <option value="learner">Gatherer in Training</option>
              <option value="preferNo">Secret Civilian Identity</option>
              <option value="other">Other Woodland Creature</option>
            </select>
          </div>

          <div className="form-group">
            <p>Are you willing to face danger alongside Super Beaver?</p>
            <label>
              <input name="user-recommend" value="definitely" type="radio" className="input-radio" defaultChecked />Definitely! To the river!
            </label>
            <label>
              <input name="user-recommend" value="maybe" type="radio" className="input-radio" />Maybe, if I get a cape.
            </label>
            <label>
              <input name="user-recommend" value="not-sure" type="radio" className="input-radio" />Not sure, I prefer chewing bark.
            </label>
          </div>

          <div className="form-group">
            <p>What is your favorite Super Beaver superpower?</p>
            <select id="most-like" name="mostLike" className="form-control" required defaultValue="">
              <option disabled value="">Select a superpower</option>
              <option value="challenges">Titanium Chompers</option>
              <option value="projects">Sonic Tail Slap</option>
              <option value="community">Hydro-Dynamic Swimming</option>
              <option value="openSource">Incredible Wood-Sensing Instincts</option>
            </select>
          </div>

          <div className="form-group">
            <p>
              Which training modules would you like to enroll in?
              <span className="clue">(Check all that apply)</span>
            </p>
            <label><input name="prefer" value="front-end-projects" type="checkbox" className="input-checkbox" />Advanced Dam Engineering</label>
            <label><input name="prefer" value="back-end-projects" type="checkbox" className="input-checkbox" />River Navigation Tactics</label>
            <label><input name="prefer" value="data-visualization" type="checkbox" className="input-checkbox" />Predator Evasion (Wolves &amp; Bears)</label>
            <label><input name="prefer" value="challenges" type="checkbox" className="input-checkbox" />Underwater Breath Holding</label>
            <label><input name="prefer" value="open-source-community" type="checkbox" className="input-checkbox" />Cape Maintenance &amp; Ironing</label>
            <label><input name="prefer" value="gitter-help-rooms" type="checkbox" className="input-checkbox" />Log Identification (Oak vs. Pine)</label>
            <label><input name="prefer" value="videos" type="checkbox" className="input-checkbox" />Patrol Communications</label>
            <label><input name="prefer" value="city-meetups" type="checkbox" className="input-checkbox" />Emergency Mud Packing</label>
            <label><input name="prefer" value="wiki" type="checkbox" className="input-checkbox" />Night Vision Exercises</label>
            <label><input name="prefer" value="forum" type="checkbox" className="input-checkbox" />Super-Snack Foraging</label>
            <label><input name="prefer" value="additional-courses" type="checkbox" className="input-checkbox" />Superhero Landings</label>
          </div>

          <div className="form-group">
            <p>Any additional heroic remarks or battle cries?</p>
            <textarea id="comments" className="input-textarea" name="comment" placeholder="Enter your battle cry here..."></textarea>
          </div>

          <div className="form-group">
            <button type="submit" id="submit" className="submit-button">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Survey;
