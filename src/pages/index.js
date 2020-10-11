import React from "react"
import style from "./layout.module.css"
import { Helmet } from "react-helmet";
import "./global.css"

export default function Home() {
  return <div className={style.wrapper}>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Yifan Pan</title>
        <link rel="canonical" href="https://yifan.catnipan.com" />
    </Helmet>
    <header className={style.header}>
      <p className={style.hello}>Hello!</p>
      <p className={style.name}>My name is Yifan Pan.</p>
      <p className={style.intro}>I am currently in a Master's Program at Northeastern University. Prior to that, I've been working as a frontend engineer for two years.</p>
      <p className={style.intro}>
        I'm a math lover. I love functional programming and I enjoy the beautiful interplay between mathematics and programming.
      </p>
    </header>
    <section className={style.section}>
      <h2 className={style.title}>Experience</h2>
      <div>
        <h3 className={style.subtitle}>Frontend Software Engineer <a className={style.companyLink} href="https://www.betalpha.com/" target="_blank">@Betalpha</a></h3>
        <ul className={style.ul}>
          <li>Developed backtesting, factor attribution and portfolio optimization modules using Electron, React and Redux for an investment research software used by top asset management companies managing billions of funding.</li>
          <li>Introduced Redux-Saga to the team to handle increasing complexity of communication with server for computationtasks, reducing asynchronous bugs by 80%.</li>
          <li>Kept code duplication rate constantly below 5% by abstracting common features (e.g.  access control andspreadsheet generation) into higher-order React components.</li>
          <li>Analyzed performance issue and optimized a major inefficiency caused by repeated generation of Redux dataselectors, saving memory use by 10%.</li>
        </ul>
        <h3 className={style.subtitle}>Frontend Software Engineer <a className={style.companyLink} href="https://www.fotor.com.cn/" target="_blank">@Everimaging</a></h3>
        <ul className={style.ul}>
          <li>Built single-page applications using React and React Router for submit and review system of design works,designer’s portfolio page and printing order system, achieving 10k+ daily active users.</li>
          <li>Led a team of 3 developers to work on localization and optimization of the Fotor online design platform.</li>
          <li>Refactored help center from WordPress-based into Jamstack-based using Hugo, reducing loading time by 80%.</li>
        </ul>
      </div>
    </section>
    <section className={style.section}>
      <h2 className={style.title}>Selected Projects</h2>
      <h3 className={style.subtitle}><a href="https://catnipan.com/g/connect-four" target="_blank">Connect Four Online Battle</a></h3>
      <ul>
        <li>Created a 3D online game supporting multiple users playing with an AI client, playing and chatting with friends viaa room link, or playing with a stranger by random pairing.</li>
        <li>Developed a Rust server using Actix framework and deployed on Vultr cloud.  Implemented data structure forstoring user session, game status, room allocation and player data, allowing broadcasting real-time update to endplayers through WebSocket.</li>
        <li>Implemented the 3D interface using Three.js and configured geometry, material and light to make it pretty.</li>
        <li>Completed the game dashboard in React, Redux and Redux-Saga, allowing interaction between React componentsand non-React HTML Canvas.</li>
      </ul>
      <h3 className={style.subtitle}>Blog Content Management System</h3>
      <ul>
        <li>Developed a blog system and deployed on Alibaba cloud, supporting rendering Markdown articles with mathformula using React, Redux, React Router, Node.js and MongoDB.</li>
        <li>Realized features including auto-save while editing, side-by-side live preview and delete recovery.</li>
        <li>Accelerated loading speed by 50% through self-implemented front/back-end isomorphism.</li>
      </ul>
      <h3 className={style.subtitle}><a href="https://github.com/catnipan/regexp" target="_blank">Mini RegExp Library</a></h3>
      <ul>
        <li>Implemented a Rust library for parsing, compiling, and executing regular expressions. Provided full support forescape character, concatenation, alternation and Kleene star symbols.</li>
        <li>Completed both DFA(deterministic finite automaton) and NFA(non-determinisitc finite automaton)implementations. Built an arithmetic expression lexer based on it.</li>
      </ul>
      <h3 className={style.subtitle}><a href="https://github.com/catnipan/redux-extras" target="_blank">Redux-Extras</a></h3>
      <ul>
        <li>
          An open-source JavaScript package providing easy-to-use utility functions for Redux.
        </li>
      </ul>
    </section>
    <section className={style.section}>
      <h2 className={style.title}>Education</h2>
      <h3>
        Northeastern University
      </h3>
      <ul>
        <li>
          Candidate for a Master of Science in Computer Science (Expected Graduation:  May 2022)
        </li>
        <li>
          GPA: 4.0/4.0
        </li>
        <li>
          Teaching Assistant for Discrete Structures
        </li>
      </ul>
      <h3>
        Southwestern University of Finance and Economics
      </h3>
      <ul>
        <li>Bachelor of Economics</li>
        <li>
          GPA: 89/100
        </li>
      </ul>
    </section>
  </div>
}
