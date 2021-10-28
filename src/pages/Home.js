import React from "react";
import "../styles/Home.css";
import img1 from "../assets/home-img.svg";
import img2 from "../assets/about-img.svg";
import img3 from "../assets/book-img.svg";
import img4 from "../assets/symp1.jpg";
import img5 from "../assets/symp2.jpg";
import img6 from "../assets/symp3.jpg";
import img7 from "../assets/blog1.jfif";
import img8 from "../assets/blog2.jpg";
import img9 from "../assets/blog3.jpg";

const Home = () => {
  return (
    <div>
      {/* header section starts  */}
      <header className="header">
        <a href="#" className="logo">
          {" "}
          <i className="fas fa-heartbeat" /> Take Care.{" "}
        </a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#overview">Overview</a>
          <a href="#symptoms">Symptoms</a>
          <a href="#precautions">Precautions</a>
          <a href="#blogs">Blogs</a>
          <a href="#book">Talks</a>
          <a href="#about">About us</a>
          <a href="#tracker">Covid tracker</a>
        </nav>
        <div id="menu-btn" className="fas fa-bars" />
      </header>
      {/* header section ends */}

      {/* home section starts  */}
      <section className="home" id="home">
        <div className="image">
          <img src={img1} alt="" />
        </div>
        <div className="content">
          <h3>Stay home, stay safe</h3>
          <p>Self-care guide to take care of yourself and your loved ones !</p>
          <a
            href="https://www.mygov.in/covid-19/"
            target="_blank"
            className="btn"
          >
            {" "}
            Know more <span className="fas fa-chevron-right" />{" "}
          </a>
        </div>
      </section>
      {/* home section ends */}

      {/* overview section starts  */}
      <section className="overview" id="overview">
        <h1 className="heading">
          {" "}
          Covid <span>Overview</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <h3>Take</h3>
            <p className="text">
              Most people infected with the virus will experience mild to
              moderate respiratory illness and recover without requiring special
              treatment. However, some will become seriously ill and require
              medical attention. Older people and those with underlying medical
              conditions like cardiovascular disease, diabetes, chronic
              respiratory disease, or cancer are more likely to develop serious
              illness.
            </p>
          </div>
          <div className="box">
            <h3>Your</h3>
            <p className="text">
              The best way to prevent and slow down transmission is to be well
              informed about the disease and how the virus spreads. Protect
              yourself and others from infection by staying at least 1 metre
              apart from others, wearing a properly fitted mask, and washing
              your hands or using an alcohol-based rub frequently. Get
              vaccinated when it’s your turn and follow local guidance.
            </p>
          </div>
          <div className="box">
            <h3>Care</h3>
            <p className="text">
              The virus can spread from an infected person’s mouth or nose in
              small liquid particles when they cough, sneeze, speak, sing or
              breathe. These particles range from larger respiratory droplets to
              smaller aerosols. It is important to practice respiratory
              etiquette, for example by coughing into a flexed elbow, and to
              stay home and self-isolate until you recover if you feel unwell.
            </p>
          </div>
        </div>
      </section>
      {/* overview section ends */}

      {/* symptoms section starts  */}
      <section className="symptoms" id="symptoms">
        <h1 className="heading">
          {" "}
          look <span>Symptoms</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <h3>Most common symptoms</h3>
            <span>
              <ul>
                <li>fever</li>
                <li>cough</li>
                <li>tiredness</li>
                <li>loss of taste or smell</li>
              </ul>
            </span>
          </div>
          <div className="box">
            <h3>Less common symptoms</h3>
            <span>
              <ul>
                <li>sore throat</li>
                <li>headache</li>
                <li>aches and pains</li>
                <li>diarrhoea</li>
                <li>a rash on skin, or discolouration of fingers or toes</li>
                <li>red or irritated eyes.</li>
              </ul>
            </span>
          </div>
          <div className="box">
            <h3>Serious symptoms</h3>
            <span>
              <ul>
                <li>difficulty breathing or shortness of breath</li>
                <li>loss of speech or mobility, or confusion</li>
                <li>chest pain</li>
              </ul>
            </span>
          </div>
          <div className="box">
            <img src={img4} alt="" />
          </div>
          <div className="box">
            <img src={img5} alt="" />
          </div>
          <div className="box">
            <img src={img6} alt="" />
          </div>
        </div>
      </section>
      {/* symptoms section ends */}

      {/* precautions section starts  */}
      <section className="precautions" id="precautions">
        <h1 className="heading">
          {" "}
          take <span>Precautions</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <p>
              Maintain a safe distance from others (at least 1 metre), even if
              they don’t appear to be sick.
            </p>
          </div>
          <div className="box">
            <p>
              Wear a mask in public, especially indoors or when physical
              distancing is not possible.
            </p>
          </div>
          <div className="box">
            <p>
              Choose open, well-ventilated spaces over closed ones. Open a
              window if indoors.
            </p>
          </div>
          <div className="box">
            <p>
              Clean your hands often. Use soap and water, sanitizer or an
              alcohol-based hand rub.
            </p>
          </div>
          <div className="box">
            <p>
              Get vaccinated when it’s your turn. Follow local guidance about
              vaccination.
            </p>
          </div>
          <div className="box">
            <p>
              Cover your nose and mouth with your bent elbow or a tissue when
              you cough or sneeze.
            </p>
          </div>
          <div className="box">
            <p>
            Stay home if you feel unwell.
            </p>
          </div>
          <div className="box">
            <p>
            Monitor your health daily.
            </p>
          </div>
        </div>
      </section>
      {/* precautions section ends */}

      {/* blogs section starts  */}
      <section className="blogs" id="blogs">
        <h1 className="heading">
          {" "}
          our <span>blogs</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={img8} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar" /> Sep 12, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user" /> by Regan Olsson{" "}
                </a>
              </div>
              <h3>
                This Relentless Pandemic Can Tax Your Mental Health. How to Cope
              </h3>
              <p>
                Remember those brief, blissful weeks at the beginning of the
                summer? Vaccination rates were rising, COVID-19 infections were
                dropping and mask mandates...
              </p>
              <a
                href="https://www.bannerhealth.com/healthcareblog/better-me/6-ways-to-overcome-fomo-after-social-isolation"
                target="_blank"
                className="btn"
              >
                {" "}
                read more <span className="fas fa-chevron-right" />{" "}
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={img7} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar" /> Sep 15, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user" /> by Stephanie Thurrott{" "}
                </a>
              </div>
              <h3>Got FOMO? Tips for Overcoming Your Anxiety Post-Pandemic</h3>
              <p>
                Is your social media feed more packed these days with photos of
                dinner dates, get-togethers and trips to the beach? It seems
                like everyone is out from...
              </p>
              <a
                href="https://www.bannerhealth.com/healthcareblog/better-me/this-relentless-pandemic-can-tax-your-mental-health-heres-how-to-cope"
                target="_blank"
                className="btn"
              >
                {" "}
                read more <span className="fas fa-chevron-right" />{" "}
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={img9} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar" /> Sep 01, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user" /> by Regan Olsson{" "}
                </a>
              </div>
              <h3>Keeping Kids Healthy Going Back to School</h3>
              <p>
                Your child is all packed and ready to go! Pencils? ✅ Notebooks?
                ✅ Backpack? ✅ Water bottle? ✅ Health? Check?? As a parent,
                you want to do everything in..
              </p>
              <a
                href="https://www.bannerhealth.com/healthcareblog/advise-me/back-to-school-back-to-germs"
                target="_blank"
                className="btn"
              >
                {" "}
                read more <span className="fas fa-chevron-right" />{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* blogs section ends */}
      
{/* booking section starts   */}
<section className="book" id="book">
        <h1 className="heading">
          {" "}
          talk with<span> Experts</span>{" "}
        </h1>
        <div className="row">
          <div className="image">
            <img src={img3} alt="" />
          </div>
          <form action>
            <h3>book an free appointment</h3>
            <input type="text" placeholder="Your name" className="box" />
            <input type="number" placeholder="Your number" className="box" />
            <input type="email" placeholder="Your email" className="box" />
            <input type="date" className="box" />
            <a href="#"><input type="submit" defaultValue="book now" className="btn" /></a>
          </form>
        </div>
      </section>
      {/* booking section ends */}

{/* about section starts  */}
<section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>about</span> us{" "}
        </h1>
        <div className="row">
          <div className="image">
            <img src={img2} alt="" />
          </div>
          <div className="content">
            <h3>we are here to guide you !</h3>
            <p>
              We provide free counselling from our experts free of cost
              regarding COVID-19. Conduct vaccination drives at schools,
              colleges, companies, etc. as per goverment norms.
            </p>
            <p>
              We are here to create awareness about COVID-19. Here you'll get
              covid tracker which tracks cases in overall world as well as in
              India.
            </p>
            <a href="#tracker" className="btn">
              {" "}
              Covid tracker <span className="fas fa-chevron-right" />{" "}
            </a>
          </div>
        </div>
      </section>
      {/* about section ends */}
    </div>
  );
};

export default Home;
