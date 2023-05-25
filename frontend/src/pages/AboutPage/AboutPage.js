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
            service that IIA is going to provide at the airport.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
