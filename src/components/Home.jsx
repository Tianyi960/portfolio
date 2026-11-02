import { Container, Row, Col } from "react-bootstrap";
import heroAvatar from "../assets/avatar1.jpg";

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4.98 3.5a2 2 0 11-4 0 2 2 0 014 0zm.04 4.24H1.02V21h3.99V7.74zM8.35 7.74H12.2v1.8h.05c.54-1.02 1.87-2.1 3.85-2.1 4.11 0 4.87 2.7 4.87 6.2V21h-4V14.5c0-1.55 0-3.53-2.15-3.53-2.15 0-2.48 1.68-2.48 3.42V21h-4v-13.26z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" fill="#000" />
    <path
      d="M4 7l8 6 8-6M4 17l5.5-4.125M20 17l-5.5-4.125"
      fill="none"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 .5a11.5 11.5 0 00-3.64 22.42c.58.11.8-.25.8-.56v-2c-3.34.73-4.04-1.61-4.04-1.61-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.76.4-1.27.72-1.56-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.62-5.49 5.92.41.35.77 1.05.77 2.12v3.14c0 .31.21.68.8.56A11.5 11.5 0 0012 .5z" />
  </svg>
);

const ResumeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M6 2h8l4 4v16H6V2zm8 0v5h4M9 11h6M9 15h6M9 19h4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const socialLinks = [
  { href: "mailto:tzhang628@wisc.edu", label: "Email", icon: EmailIcon },
  {
    href: "https://www.linkedin.com/in/tianyi-zhang-35bb4b355/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  { href: "https://github.com/Tianyi960", label: "Github", icon: GithubIcon },
  {
    href: "https://drive.google.com/file/d/1p22rffXosg9TWAhEx4QbTbSaw_h6_Uat/view?usp=drive_link",
    label: "Resume",
    icon: ResumeIcon,
  },
];

const HERO_IMAGE = heroAvatar;

export default function Home() {
  return (
    <section className="home-hero">
      <Container className="home-hero__container">
        <Row className="align-items-center home-hero__row">
          <Col md={5} lg={4} className="text-center home-hero__avatar-col">
            <div className="home-hero__avatar">
              <img src={HERO_IMAGE} alt="Tianyi" />
            </div>
          </Col>
          <Col md={7} lg={8} className="home-hero__content">
            <h1 className="display-4 fw-bold mb-3">Tianyi Zhang</h1>
            <p className="mb-3 home-hero__intro">
              I’m a senior at UW–Madison pursuing honors in both <span className="home-hero__intro-highlight">Computer Science</span> and <span className="home-hero__intro-highlight">Mathematics</span>, along with a certificate in <span className="home-hero__intro-highlight">Game Design</span>. My research interests include <span className="home-hero__intro-highlight">Human–AI Interaction</span> and <span className="home-hero__intro-highlight">Accessibility</span>.
            </p>
            <p className="mb-4 home-hero__intro">
              <strong className="home-hero__opportunities">
                I’m seeking PhD opportunities for Fall 2027 and am open to research and industry internships.
              </strong>
            </p>

            <div className="d-flex flex-wrap align-items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    className="fw-semibold link-dark home-hero__social-link"
                    href={link.href}
                  >
                    {Icon && (
                      <span className="home-hero__social-icon">
                        <Icon />
                      </span>
                    )}
                    {link.label}
                  </a>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}