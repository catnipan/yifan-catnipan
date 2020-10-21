import React, { Fragment, useState } from "react"
import style from "./layout.module.css"
import { Helmet } from "react-helmet";
import SocialAccount from '../components/social-account';
import "./global.css"
import connectFourPng from '../../static/connect-four.png';
import memorizingPng from '../../static/memorizing.png';
import labyrinthSearchPng from '../../static/labyrinth-search.png';
import resumeArrow from '../../static/resume_arrow.png';
import cat from '../../static/cat.png';

function Cat() {
  const [hovered, updateHovered] = useState(false);
  return <img className={`${style.cat} ${hovered ? `${style.wave}` : ''}`} src={cat} alt="cat" onMouseOver={() => updateHovered(true)} onMouseOut={() => updateHovered(false)} />;
}

function Link({ href, children }) {
  return <a className="openInNewWindow" href={href} target="_blank" rel="noreferrer">{children}</a>
}

function Project({ title, img, placeholder, subtitle, children, tags=[] }) {
  return (
    <Fragment>
      <h2 className={style.title}>{title}</h2>
      <div className={style.projectWrapper}>
        <div className={style.project}>
          <ul className={style.desc}>
            {children}
          </ul>
          <div>
            {tags.map(tag => (
              <span className={style.tag} key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className={style.projectImg}>
          {img
            ? <img className={style.descImg} src={img} alt={title} />
            : <div className={style.placeholderImg}>
                {placeholder}
              </div>
          }
        </div>
      </div>
    </Fragment>
  )
}

export default function Home() {
  return <div>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Yifan Pan</title>
        <link rel="canonical" href="https://yifan.catnipan.com" />
        <meta property="og:image" content="https://yifan.catnipan.com/screenshot.png" />
        <meta property="og:title" content="Yifan Pan's website" />
        <meta property="og:description" content="Take a look at some of the projects made by Yifan Pan" />
        <meta property="og:url" content="https://yifan.catnipan.com" />
    </Helmet>
    <header className={style.header}>
      <p className={style.hello}>Hi, I'm Yifan Pan.</p>
      <p className={style.intro}>
       I'm currently pursuing a master's degree in computer science at Northeastern University.
      </p>
      <p className={style.intro}>
        Before that I was a self-taught front-end engineer. Except for being fluent in JavaScript and React, I'm learning Rust and back-end technologies and working towards being a full-stack engineer.
      </p>
      <p className={style.intro}>
        I love math, abstraction and its beautiful interplays with programming. In my spare time, I enjoy petting <Cat />, reading sci-fi novels and watching suspense movies.
      </p>
      <p className={style.socialAccount}><SocialAccount /><img src={resumeArrow} className={style.resumeArrow}/></p>
      <p className={style.intro}>You can read my resume,&emsp;&nbsp;&emsp;or take a look at some projects that I've been working on :)</p>
    </header>
    <section className={style.section}>
      <Project
        title="Connect Four Online Battle"
        img={connectFourPng}
        tags={['Rust', 'Actix', 'WebSocket', 'Three.js', 'React', 'Redux', 'Redux-Saga']}
      >
        <li>
          <Link href="https://catnipan.com/g/connect-four">Try Online</Link> | <Link href="https://github.com/catnipan/connect-four">Source code</Link>
        </li>
        <li>A 3D online game supporting multiple users playing with an AI client, playing and chatting with friends via room link, or playing with a stranger by random pairing.</li>
      </Project>
      <Project
        title="Memorizing"
        img={memorizingPng}
        tags={['Go', 'MySQL', 'Redis', 'GraphQL', 'React', 'Apollo']}
      >
        <li>
          <Link href="https://catnipan.com/memorizing">Try Online</Link> | <Link href="https://github.com/catnipan/memorizing-app">Source code</Link>
        </li>
        <li>An app helping user combat the forgetting curve when learning new words, poems, etc. by scheduling reinforced reviews automatically.</li>
      </Project>
      <Project
        title="Mini RegExp Library"
        placeholder="(a|bc)*abb"
        tags={['Rust']}
      >
        <li>
          <Link href="https://github.com/catnipan/regexp">Source code</Link>
        </li>
        <li>
          A Rust library for parsing, compiling, and executing regular expressions, supported both DFA and NFA implementations.
        </li>
      </Project>
      <Project
        title="Redux-Extras"
        placeholder="redux-extras"
        tags={['JavaScript']}
      >
        <li>
          <Link href="https://github.com/catnipan/redux-extras">Source code</Link>
        </li>
        <li>
          A JavaScript library providing easy-to-use utility functions for Redux, inspired by Redux-Saga's pattern match.
        </li>
      </Project>
      <Project
        title="Algorithm Visualization"
        img={labyrinthSearchPng}
        tags={['React', 'JavaScript']}
      >
          <li><Link href="https://codepen.io/catnipan/pen/EGvywd">Labyrinth Search Visualization</Link></li>
          <li><Link href="https://codepen.io/catnipan/pen/yZpdMo">Hanoi Tower Visualization</Link></li>
      </Project>
    </section>
    <footer>
      <p>Built with Gatsby.js and hosted on Github.</p>
    </footer>
  </div>
}
