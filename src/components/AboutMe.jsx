import kart from "../assets/kart.jpg";
import avatar2 from "../assets/avatar2.jpg";
export default function AboutMe() {
  return (
    <section className="page-section about-section">
      <span className="page-badge">ABOUT</span>
      <h1 className="page-heading">About Me</h1>
      <div className="page-image-grid">
        <div className="page-image-wrapper">
          <img src={avatar2} alt="Tianyi Zhang" className="page-image" />
        </div>
        <div className="page-image-wrapper">
          <img src={kart} alt="Tianyi Zhang" className="page-image" />
        </div>
      </div>
      <div className="page-bio">
        <h2 className="page-subheading">Tianyi Zhang(Chinese: 张天怡)</h2>
        <p className="page-subtext page-subtext-tight">CS & Math senior</p>
        <div className="page-separator"></div>
      </div>
      <p className="page-subtext about-paragraph">
        Hi there! I’m Tianyi, a senior at the University of Wisconsin–Madison majoring in Computer Science and Mathematics, pursuing honors in both, along with a certificate in Game Design. I’m an undergraduate researcher in the MadAbility Lab, working with{" "}
        <a
          href="https://www.yuhangz.com/"
          className="home-hero__intro-highlight"
          target="_blank"
          rel="noreferrer"
        >
          Prof. Yuhang Zhao
        </a>{" "}
        on accessible interactive systems for people with low vision.
      </p>
      <p className="page-subtext about-paragraph">
        My research interests lie in human–AI interaction and accessibility. Through my work on AR/VR interaction and ScoreSight, a real-time piano music-reading support system, I’ve become interested in how systems can understand users’ ongoing activities and provide timely, personalized assistance. I hope to explore these questions through context-aware AI and wearable interfaces that support people across diverse abilities and everyday environments.
      </p>
      <p className="page-subtext about-paragraph">
        Outside of research, I enjoy playing the piano, composing music, go-karting and fun diving(just got my PADI certification—officially part of the ocean protection crew!).
      </p>
      <p className="page-subtext about-paragraph">
        I’m applying to PhD programs for Fall 2027 and am also open to research and industry internships. I’d love to connect about research or potential opportunities! You can reach me at tzhang628 [at] wisc [dot] edu.
      </p>
      <hr className="about-divider" />

      <div className="timeline">
        <div className="timeline-column">
          <h3 className="timeline-heading">Education</h3>
          <div className="timeline-list">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <span className="timeline-date">2024 - 2026(Expected)</span>
                <div>
                  <h4 className="timeline-title">University of Wisconsin–Madison</h4>
                  <p className="timeline-subtitle">Bachelor Degree</p>

                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <span className="timeline-date">2023.6 - 2023.9</span>
                <div>
                  <h4 className="timeline-title">Peking University(China)</h4>
                  <p className="timeline-subtitle">Exchange Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-column">
          <h3 className="timeline-heading">Experience</h3>
          <div className="timeline-list">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <span className="timeline-date">Aug. 2025 - Present</span>
                <div>
                  <h4 className="timeline-title">MadAbility Lab, UW-Madison</h4>
                  <p className="timeline-subtitle">HCI Research Assistant</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <span className="timeline-date">May. 2025 - Sep. 2025</span>
                <div>
                  <h4 className="timeline-title">UCSC</h4>
                  <p className="timeline-subtitle">Research Assistant Intern</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <span className="timeline-date">Dec. 2024 - Feb. 2025</span>
                <div>
                  <h4 className="timeline-title">Archermind Technology (Nanjing) Co., Ltd.</h4>
                  <p className="timeline-subtitle">Backend Development Intern</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <span className="timeline-date">Jun. 2023 - Sep. 2023</span>
                <div>
                  <h4 className="timeline-title">Medical School, King’s College London</h4>
                  <p className="timeline-subtitle">Research Assistant Intern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '50px' }}></div>
      </div>
    </section>
  );
}