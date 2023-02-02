import "./Home.css";
import { Link } from "react-router-dom";
import tvImg from "../../asset/tv.png";
import Mobile from "../../asset/mobile.jpeg";
import boxShot from "../../asset/boxshot.png";
import downloadIcon from "../../asset/download-icon.gif";
import kidImg from "../../asset/kid.png"
export default function Home() {

  return (
    <div className="HeaderCon">
      <nav>
        <div>
          <svg
            viewBox="0 0 111 30"
            data-uia="netflix-logo"
            class="svg-icon svg-icon-netflix-logo"
            aria-hidden="true"
            focusable="false"
          >
            <g id="netflix-logo">
              <path
                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                id="Fill-14"
              ></path>
            </g>
          </svg>
        </div>
        <ul>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                border: "1px solid #fff",
                borderRadius: "2px",
                background: "transparent",
                padding: "0.5rem 1rem",
              }}
              to=""
            >
              English
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                background: "#e50914",
                borderRadius: "2px",
                padding: "0.5rem 1rem",
              }}
              to="/login"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
      <div className="Main">
        <div className="HeaderText">
          <h1>
            Unlimited movies, TV <br />
            shows, and more.
          </h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="HeaderInput">
              <Link to="/register" style={{padding: "15px 18rem", borderRadius: "4px", background: "red", color: "#fff", textDecoration: "none"}} >Register</Link>
          </div>
        </div>
      </div>
      {/* Enjoy */}
      <section>
        <div className="EnjoyCon">
          <div className="EnjoyText">
            <h3>Enjoy on your TV.</h3>
            <p>
              Watch on Smart TVs, Playstation, Xbox,
              <br />
              Chromecast, Apple TV, Blu-ray players, and more.
            </p>
          </div>
          <div className="EnjoyTv">
            <img
              style={{ position: "relative", zIndex: "1", width: "100%" }}
              src={tvImg}
              alt=""
            />
            <video
              autoPlay
              playsInline
              muted
              loop
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "76%",
              }}
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>
      {/* Download */}
      <div className="DownloadCon">
        <div className="DownloadPic">
          <img style={{ widows: "100%" }} src={Mobile} alt="" />
          <div className="DownloadBox">
            <img src={boxShot} alt="" />
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: -90 }}
            >
              <p>
                Stranger Thing
                <br />
                <span style={{ color: "#0071eb", fontSize: "0.9rem" }}>
                  Downloading...
                </span>
              </p>
            </div>
            <img src={downloadIcon} alt="" />
          </div>
        </div>
        <div>
          <div className="DownloadText">
            <h3>Download your shows <br />
            to watch offline.</h3>
            <p>
              Save your favorites easily and always have
              <br />
              something to watch.
            </p>
          </div>
        </div>
      </div>
      {/* Watch */}
      <div className="WatchCon">
        <div>
          <h3>Watch everywhere.</h3>
          <p>Stream unlimited movies and TV shows on<br />
          your phone, tablet, laptop, and TV.</p>
        </div>
      </div>
      {/* Kid */}
      <div className="KidCon">
        <div style={{width: "100%"}}>
          <img src={kidImg} alt="" />
        </div>
        <div className="KidText">
        <div>
          <h3>Create profiles for kids.</h3>
          <p>Send kids on adventures with their favorite <br />
          characters in a space made just for them—<br />
          free with your membership.</p>
        </div>
        </div>
      </div>
    </div>
  );
}
