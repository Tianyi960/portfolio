import passCueImage from "../assets/ben_teaser.jpg";
import vrPointImage from "../assets/vrpoint.png";
import scoreSightImage from "../assets/scoresight.png";

export default function Publications() {
  return (
    <section className="page-section publications-section">
      <span className="page-badge">PUBLICATIONS</span>
      <h1 className="page-heading">Research Papers</h1>
      <div className="publication-list">
        <article className="publication-card" aria-labelledby="head-gaze-finger-title">
          <figure className="publication-figure">
            <img
              src={vrPointImage}
              alt="Comparison of gaze-, head-, and finger-based object selection in static and dynamic augmented reality scenarios."
              className="publication-image"
              width="2040"
              height="856"
            />
          </figure>
          <div className="publication-details">
            <h2 id="head-gaze-finger-title" className="publication-title">
              <a
                href="https://arxiv.org/abs/2607.06778"
                className="publication-title-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Head, Gaze, or Finger? Comparing Object Selection Techniques in
                Augmented Reality for People with Low Vision
              </a>
            </h2>
            <p className="publication-venue">
              <em>
                Under review at CHI ’27
              </em>
            </p>
            <p className="publication-authors">
              Ruijia Chen, <strong>Tianyi Zhang</strong>, Sanbrita Mondal, Yukang
              Yan, and Yuhang Zhao
            </p>
          </div>
        </article>
        <article className="publication-card" aria-labelledby="scoresight-title">
          <figure className="publication-figure">
            <img
              src={scoreSightImage}
              alt="ScoreSight supporting piano music reading with visual guidance, magnification, and customizable display settings."
              className="publication-image"
              width="1217"
              height="546"
            />
          </figure>
          <div className="publication-details">
            <h2 id="scoresight-title" className="publication-title">
              Demonstration of ScoreSight: Real-time Piano Music Reading Support
              for People with Decreased Central Vision
            </h2>
            <p className="publication-venue">
              <strong className="publication-venue-status">To appear at UIST ’26 Adjunct</strong>{" "}
              <a
                href="https://drive.google.com/drive/folders/1AfGt7gKJx_zkBUZDq7vz6zU7Gkf_p3l-"
                className="publication-resource-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View ScoreSight demo"
              >
                [demo]
              </a>
            </p>
            <p className="publication-authors">
              <strong>Tianyi Zhang</strong>, Yihan Wu, Varun Ganesh, Ruijia Chen, Yuhang Zhao
            </p>
          </div>
        </article>
        <article className="publication-card" aria-labelledby="passcue-title">
          <figure className="publication-figure">
            <img
              src={passCueImage}
              alt="PassCue augmented reality social cues highlighting people and displaying recognition and interaction cues during passing encounters."
              className="publication-image"
              width="6808"
              height="2295"
            />
          </figure>
          <div className="publication-details">
            <h2 id="passcue-title" className="publication-title">
              PassCue: Social Cues in Augmented Reality to Support Passing
              Encounters for People with Low Vision
            </h2>
            <p className="publication-venue">
              <em>
                Under review at CHI ’27
              </em>
            </p>
            <p className="publication-authors">
              Ben Kosa, Kexin Zhang, Yuheng Wu, Daniel Killough,{" "}
              <strong>Tianyi Zhang</strong>, Helena Qing Huang, Daniel Wang, Justin
              Feng, Sanbrita Mondal, and Yuhang Zhao.
            </p>
          </div>
        </article>
      </div>
      <div className="page-bottom-spacer" aria-hidden="true" />
    </section>
  );
}
