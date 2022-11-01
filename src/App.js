import logo from "./assets/logo.png";
import photos from "./assets/hero-photos.png";
import imgOne from "./assets/img-one.jpg";
import imgTwo from "./assets/img-two.jpg";
import imgThree from "./assets/img-three.png";
import imgFour from "./assets/img-four.png";
import imgFive from "./assets/img-five.png";
import imgSix from "./assets/img-six.png";
import imgSeven from "./assets/img-seven.png";
import imgEight from "./assets/img-eight.png";
import arrow from "./assets/arrow.png";
import polestar from "./assets/polestar.png";
import volvo from "./assets/volvo.png";
import telia from "./assets/telia.png";
import logoCircle from "./assets/logo-circle.png";
import logoLight from "./assets/logo-circle-light.png";
import teamtailor from "./assets/teamtailor.png";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { BsCalendarDateFill, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
      </header>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-copy">
            <h1 className="headline-sm">JOIN THE</h1>
            <h1 className="headline-lg">COMMUNITY</h1>
          </div>
          <button className="btn"><a href="#positions">Lediga uppdrag</a></button>
          <div className="bg-img-container">
            <img src={photos} alt="" />
          </div>
        </div>
      </div>
      <div className="community-container">
        <div className="community-copy">
          <span>GEMENSKAP</span>
          <h2>
            Vi bygger ett community som stöttar, hjälper och har roligt
            tillsammans.
          </h2>
          <p>
            Att umgås är något vi värdesätter och därför åker vi tillsammans på
            två konferenser per år, anordnar talks, afterwork och mycket annat
            skoj.
          </p>
        </div>
      </div>
      <div className="photo-grid">
        <div className="grid">
          <img src={imgOne} alt="" className="one" />
          <img src={imgTwo} alt="" className="two" />
          <img src={imgThree} alt="" className="three" />
          <img src={imgFour} alt="" className="four" />
          <img src={imgFive} alt="" className="five" />
          <img src={imgSix} alt="" className="six" />
          <img src={imgSeven} alt="" className="seven" />
          <img src={imgEight} alt="" className="eight" />
        </div>
      </div>
      <div className="assignment-container">
        <div className="assignment-copy">
          <span>UPPDRAG</span>
          <h2>Tillsammans har vi ett enormt nätverk med kontakter.</h2>
          <p>
            Vi söker vitt och brett och samlar en lista på uppdrag som passar
            dina önskemål. Sen är det din tur att välja det som känns bäst.
          </p>
        </div>
        <div className="cards">
          <span>Se mer av våra uppdrag</span>
          <div className="card-container">
            <div className="card">
              <div className="card-inner">
                <div className="img-container">
                  <img src={polestar} alt="Polestar" />
                </div>
                <div className="card-back">
                  <span>Polestar</span>
                  <h3>Fullstackutvecklare</h3>
                  <p>
                    Framtidens bilar är trådlöst uppkopplade. Säkerhet och
                    stabilitet förväntas av användaren och vårt agila team
                    utvecklar molnbaserade tjänster för att föraren ska få en
                    bra, trygg och säker upplevelse.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <div className="img-container">
                  <img src={volvo} alt="Volvo" />
                </div>
                <div className="card-back">
                  <span>Volvo</span>
                  <h3>Lösningsarkitekt</h3>
                  <p>
                    Som arkitekt får man ofta ta ansvar och tuffa beslut för att
                    säkerställa att lösningen som helhet håller. Det är lätt att
                    tappa fokus och drunkna i mängden av nya ramverk.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <div className="img-container">
                  <img src={telia} alt="Telia" />
                </div>
                <div className="card-back">
                  <span>Telia</span>
                  <h3>Scrum Master</h3>
                  <p>
                    Rollen som Scrum Master för ett agilt utvecklingsteam
                    innefattar att stödja teamet, säkerställa att processer
                    efterlevs och undanröja hinder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="salary-container">
        <div className="salary-copy">
          <span>Lön</span>
          <h2>Hos oss bestämmer alla över sin egen ekonomi.</h2>
          <p>
            Oavsett om det gäller lön, antal semesterdagar eller pension. Vårt
            upplägg innebär i de allra flesta fall en stor löneökning.
          </p>
          <button>Se exempel</button>
        </div>
        <div className="arrow-container">
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="logo-animation">
        <img src={logoCircle} alt="LogFab"/>
      </div>
      <div className="positions-container" id="positions">
        <div className="positions-content">
          <div className="positions-header">
            <div className="positions-header__text">
              <span>LEDIGA UPPDRAG</span>
              <h2>Hitta något som passar dig</h2>
            </div>
            <div className="positions-header__arrows">
              <BsFillArrowLeftSquareFill />
              <BsFillArrowRightSquareFill />
            </div>
          </div>
          <div className="positions-cards">
            <div className="positions-cards__card">
              <h3>Javautvecklare</h3>
              <div className="info-hidden">
                <div className="info-group">
                  <HiLocationMarker />
                  Göteborg, Remote
                </div>
                <div className="info-group">
                  <BsCalendarDateFill />
                  November 2022
                </div>
              </div>
            </div>
            <div className="positions-cards__card">
              <h3>Scrum Master</h3>
              <div className="info-hidden">
                <div className="info-group">
                  <HiLocationMarker />
                  Göteborg, Remote
                </div>
                <div className="info-group">
                  <BsCalendarDateFill />
                  November 2022
                </div>
              </div>
            </div>
            <div className="positions-cards__card">
              <h3>Business Analyst</h3>
              <div className="info-hidden">
                <div className="info-group">
                  <HiLocationMarker />
                  Göteborg, Remote
                </div>
                <div className="info-group">
                  <BsCalendarDateFill />
                  November 2022
                </div>
              </div>
            </div>
            <div className="positions-cards__card">
              <h3>Fullstackutvecklare</h3>
              <div className="info-hidden">
                <div className="info-group">
                  <HiLocationMarker />
                  Göteborg, Remote
                </div>
                <div className="info-group">
                  <BsCalendarDateFill />
                  November 2022
                </div>
              </div>
            </div>
          </div>
          <span
            style={{
              fontSize: "2rem",
              color: "#58988e",
              fontFamily: "TitilliumWebLight",
            }}
          >{`Fler lediga uppdrag >>`}</span>
        </div>
      </div>
      <div className="coworkers-container">
        <div className="coworkers-number">
          <div className="coworkers-number__nr">26</div>
          <h2>medarbetare</h2>
        </div>
        <div className="coworkers-slack">
          <div className="coworkers-slack__nr">249k</div>
          <h2>slackmeddelanden</h2>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-copy">
          <span>VAR ÄR VI?</span>
          <h2>
            Kom in till vårt fräscha kontor på Avenyn och ta en kaffe med oss!
          </h2>
          <div className="address-container">
            <div className="address-container__address">
              <span>Göteborg</span>
              <span>Kungsportsavenyen 29</span>
              <span>411 36 Göteborg</span>
            </div>
            <div className="address-container__contact">
              <span>Vägbeskrivning</span>
              <span>jesper@logikfabriken.se</span>
              <span>0704016234</span>
            </div>
          </div>
          <div className="social-container">
            <BsInstagram />
            <BsLinkedin />
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logoCircle} alt="LogFab" />
          </div>
          <nav>
            <ul>
              <li>Start</li>
              <li>Medarbetare</li>
              <li>Jobb</li>
              <li>Blogg</li>
            </ul>
          </nav>
          <div className="teamtailor">
            <img src={teamtailor} alt="Teamtailor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
