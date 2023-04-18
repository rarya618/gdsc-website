import React from "react";
import aboutcss from "./About.module.css";

const About: React.FC = () => {
  return (
    <div>
      <div className={aboutcss.background}>
        <div className={aboutcss.aboutcontainer}>
          <h1 className={aboutcss.about}>About</h1>
        </div>
      </div>

      <div
        style={{
          textAlign: "left",
          paddingLeft: "100px",
          paddingRight: "50px",
        }}
      >
        <h2 className={aboutcss.usydgdsc}>
          University of Sydney Google Developer Student Club
        </h2>
        <p className={aboutcss.bigtech}>Using big tech for big good.</p>
        <p className={aboutcss.firstparagraph}>
          Founded in 2021, the USYD GDSC aims to build a welcoming, passionate
          and interdisciplinary student community interested in all things tech.
          Our mission: to leverage Google support to empower students to learn
          about technology, create impact and foster a strong community. We
          encourage students from all backgrounds to join our club. Our events
          are aimed at computer science, design and entrepreneurial
          tech-interested students. If you're interested in taking part in some
          exciting events in 2023 - join our club!
        </p>
        <h3 className={aboutcss.pastgdsc}>Past GDSC Events:</h3>

        <div className={aboutcss.eventscontainer}>
          <p>
            ⚡Into the Googleverse introduced our community to all things Google
            with lightning talks by Googlers Brett Morgan, Jamie Sanson and
            Samuel Marks
          </p>
          <p>
            📚Guide to Google featured interview advice from Google recruiter
            Jackson Godley and technical tips from Googlers Lena Wang and
            Madeleine Wagne
          </p>
          <p>
            🏃🏽‍♂️Googlethon pitted Chess Bots built by the GDSC community against
            chess masters from the USYD Chess Club♖
          </p>
          <p>
            💲Ethical Blockchain Workshop (run together with Tech for Social
            Good) introduced students to the ethical considerations of
            Blockchain
          </p>
          <p>
            🎨 Design Week: Design @ Google! provided key insights on the path
            to becoming a designer with talks by Google designers Xinni C and
            Mike Yee
          </p>
          <p>
            🐍 Python Week guided students through building their own games and
            bots in Python
          </p>
          <p>
            ☁️AI & Cloud Week featured talks by Australian Palantir Global
            Impact Scholar Ayesha Ahmed and Machine Learning expert Zarif Aziz
          </p>
          <p style={{ marginBottom: "150px" }}>
            ✨#Iamremarkable Workshop! by Google Cloud Exec Karen Zhang
            encouraged everyone (especially women and underrepresented groups)
            to speak up about their achievements
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
