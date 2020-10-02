import React from "react"
import style from "./layout.module.css"
import "./global.css"

export default function Home() {
  return <div className={style.wrapper}>
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
          <li>Developed a financial research desktop application using Electron, React and Redux.</li>
          <li>Introduced Redux-Saga to the dev team for dealing with challenges of complex async logic.</li>
        </ul>
        <h3 className={style.subtitle}>Frontend Software Engineer <a className={style.companyLink} href="https://www.fotor.com.cn/" target="_blank">@Everimaging</a></h3>
        <ul className={style.ul}>
          <li>Developed several Single-Page Applications: design works submit and review system, designer's portfolio page, printing order center.</li>
        </ul>
      </div>
    </section>
    <section className={style.section}>
      <h2 className={style.title}>Selected Projects</h2>
      <h3 className={style.subtitle}>Connect Four Online Battle</h3>
      <ul>
        <li>
          Created an game supporting multiple online players playing with computers, playing with friends via a room link or pairing with a random stranger.
        </li>
        <li>
        Developed a Rust server based on the Actix framework. Implemented client-server communication via WebSocket.
        </li>
        <li>
        Implemented a 3D game interface using Three.js and game dashboard using React.
        </li>
      </ul>
      <h3 className={style.subtitle}>Blog Content Management System</h3>
      <ul>
        <li>
          Developed a blog integrating with a Koa Node.js server, daemon process manager PM2 and MongoDB database.
        </li>
        <li>
          Designed RESTful APIs and completed both front and back ends of the Content Management System, including login flow, CRUD and a proxy of Google Analytics.
        </li>
        <li>
        Accomplished front/back-end isomorphism through server-side rendering, boosting first screen load speed by 50%.
        </li>
      </ul>
      <h3 className={style.subtitle}>RegExp Library</h3>
      <ul>
        <li>
          Implemented a Rust library for parsing, compiling, and executing regular expressions based on both deterministic finite automaton and non-deterministic finite automaton.
        </li>
      </ul>
      <h3 className={style.subtitle}>Redux-Extras</h3>
      <ul>
        <li>
          Wrote an open-source JavaScript package providing easy-to-use utility functions for Redux.
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
      </ul>
      <h3>
        Southwestern University of Finance and Economics
      </h3>
      <ul>
        <li>Bachelor of Economics</li>
      </ul>
    </section>
  </div>
}
