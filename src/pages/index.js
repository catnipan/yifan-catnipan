import React from "react"
import style from "./layout.module.css"
import { Helmet } from "react-helmet";
import SocialAccount from '../components/social-account';
import "./global.css"
import connectFourPng from '../../static/connect-four.png';
import labyrinthSearchPng from '../../static/labyrinth-search.png';
import resumeArrow from '../../static/resume_arrow.png';

function Link({ href, children }) {
  return <a className="openInNewWindow" href={href} target="_blank">{children}</a>
}

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
      <p className={style.intro}>
        I'm currently pursuing a Master's degree in Computer Science at Northeastern University. Prior to that I was as a self-taught front-end software engineer.
      </p>
      <p className={style.intro}>
        I love math and I enjoy the beautiful interplay between mathematics and programming. I'm a cat lover. In my spare time, I enjoy reading sci-fi novels and watching suspense movies.
      </p>
      <p className={style.socialAccount}><SocialAccount /></p>
      <p className={style.intro}>You can read my resume <img src={resumeArrow} className={style.resumeArrow}/></p>
      <p className={style.intro}>or take a loot at some projects that I've worked on:</p>
    </header>
    <section className={style.section}>
      <div>
        <h2 className={style.title}>Connect Four Online Battle</h2>
        <img className={style.descImg} src={connectFourPng} />
        <p><Link href="https://catnipan.com/g/connect-four">Try Online</Link> | <Link href="https://github.com/catnipan/connect-four">Source code</Link></p>
        <ul className={style.desc}>
          <li>A 3D online game supporting multiple users playing with an AI client, playing and chatting with friends via room link, or playing with a stranger by random pairing.</li>
          <li>Backend: Rust + Actix + WebSocket</li>
          <li>Frontend: Three.js + React + Redux + Redux-Saga</li>
        </ul>
      </div>
      <div>
        <h2 className={style.title}>Mini RegExp Library</h2>
        <p><Link href="https://github.com/catnipan/regexp">Source code</Link></p>
        <ul className={style.desc}>
          <li>
            A Rust library for parsing, compiling, and executing regular expressions, supported both DFA and NFA implementations.
          </li>
        </ul>
      </div>
      <div>
        <h2 className={style.title}>Redux-Extras</h2>
        <p><Link href="https://github.com/catnipan/redux-extras">Source code</Link></p>
        <ul className={style.desc}>
          <li>
            A JavaScript library providing easy-to-use utility functions for Redux, inspired by Redux-Saga's pattern match.
          </li>
        </ul>
      </div>
      <div>
        <h2 className={style.title}>Algorithm Animation</h2>
        <img className={style.descImg} src={labyrinthSearchPng} />
        <ul className={style.desc}>
          <li><Link href="https://codepen.io/catnipan/pen/EGvywd">Labyrinth Search Animation</Link></li>
          <li><Link href="https://codepen.io/catnipan/pen/yZpdMo">Hanoi Tower Animation</Link></li>
        </ul>
      </div>
    </section>
    <footer>
      <p>Built with Gatsby.js and hosted on Github.</p>
    </footer>
  </div>
}
