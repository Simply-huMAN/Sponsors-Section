import Sponsors from "./components/Sponsors";
import "./App.css";

function App() {
  return (
    <main>
      <div className="main">
        <div className="content">
          <p id="heading">Our Awesome Sponsors</p>
          <p id="info">
            Our love for open source and drive to make an impact materialized as
            HackNITR 4.0. Backed by likes of participating students, we grew
            steadily to organize hackathons and support social intiatives.
            Today, we bring you the opportunity to collaborate with us on our
            next endeavour. &nbsp;
          </p>
          <a
            id="link"
            href="https://form.typeform.com/to/maI5lJ4t?typeform-source=hacknitr21.typeform.com"
            target="blank"
          >
            Sponsor us
          </a>
        </div>
        <Sponsors />
        {/* <div className="sponsors">
        <p>ALPHA SPONSORS</p>
        <a href="https://mlh.io" target="blank">
          <img
            src="https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/MLH_xejp6v.png"
            alt="MLH logo"
            // style="width: 80%"
          ></img>
        </a>
        <a href="https://github.com" target="blank">
          <img
            src="https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/github1_cujncr.png"
            alt="Github"
            // style="width:70%"
          ></img>
        </a>
        <a href="https://devfolio.co/" target="blank">
          <img
            src="https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/past_rv4xvj.png"
            alt="Devfolio"
            // style="width:95%"
          ></img>
        </a>
      </div>
      <div className="sponsors">
        <p>BETA SPONSORS</p>
      </div>
      <div className="sponsors">
        <p>GAMMA SPONSORS</p>
      </div>
      <div className="sponsors">
        <p>DELTA SPONSORS</p>
      </div>
      <div className="partners">
        <p>MEDIA PARTNERS</p>
      </div>
      <div className="partners">
        <p>AUTHENTICATION PARTNERS</p>
      </div>
      <div className="partners">
        <p>MENTAL HEALTH PARTNERS</p>
      </div>
      <div className="partners">
        <p>CODING PARTNERS</p>
      </div> */}
      </div>
    </main>
  );
}

export default App;
