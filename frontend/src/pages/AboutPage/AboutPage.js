import "./AboutPage.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from '@mui/icons-material/Email';
const AboutPage = () => {
  return (
    <div
      className="about"
      style={{
        backgroundImage: "url('/Images/airport-5.jpg')",
      }}
    >
      <div className="about-background">
        <div className="about-content">
          <h1>IIA Feedback System</h1>
          <p>
            It collects feedback forms of customer's satisfaction/grievance of
            different aspects of airport. Project is to collect the data
            electronically in the form of an app with selectable parameters and
            rating. The app will be available by default on the free Wi-Fi
            service that SKIT, Jaipur is going to provide at the airport.
          </p>
        </div>

        <h2>Designed & Developed By: </h2>
        <div className="about-developed">
          <div className="developer-div">
            <img
              className="developer-logo"
              src="/Images/shashank-dp.jpeg"
              alt=""
            />
            <h3>Shashank Varshney</h3>
            <div className="about-contact-information">
              <a
                href="https://www.linkedin.com/in/shashank-varshney-86sh001/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="medium" />
              </a>
              <a
                href="https://github.com/Shashank152001"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="medium" />
              </a>
              <a href="mailto:varshneyshashank8846@gmail.com">
                <EmailIcon fontSize="medium" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
