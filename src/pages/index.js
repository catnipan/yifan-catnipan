import React, { useState, useRef } from "react"
import style from "./layout.module.css"
import { Helmet } from "react-helmet";
import SocialAccount from '../components/social-account';
import "./global.css"
import connectFourPng from '../../images/connect-four.png';
import memorizingPng from '../../images/memorizing.png';
import labyrinthSearchPng from '../../images/labyrinth-search.png';
import resumeArrow from '../../images/resume_arrow.png';
import cat from '../../images/cat.png';
import { useTrail, useSpring, animated, config, useChain } from 'react-spring';
import TrackVisibility from 'react-on-screen';

function Cat() {
  const [hovered, updateHovered] = useState(false);
  return <img
    className={`${style.cat} ${hovered ? `${style.wave}` : ''}`}
    src={cat}
    alt="cat"
    onMouseOver={() => updateHovered(true)}
    onFocus={() => updateHovered(true)}
    onMouseOut={() => updateHovered(false)}
    onBlur={() => updateHovered(false)}
  />;
}

function Link({ href, children }) {
  return <a className="openInNewWindow" href={href} target="_blank" rel="noreferrer">{children}</a>
}


function ProjectInner({ title, img, placeholder, subtitle, children, tags=[], isVisible }) {
  const { opacity, x } = useSpring({
    from: { opacity: 0.4, x: 20 },
    to: { opacity: isVisible ? 1 : 0.4, x: isVisible ? 0 : 20 },
    config: config.wobbly,
  });
  const [bgStyle, set] = useSpring(() => ({ s: 0, config: {
    mass: 1,
    tension: 700,
    friction: 14,
  } }));
  return (
    <animated.div
      style={{
        opacity,
        transform: x.interpolate(x => `translateX(${x}px)`),
      }}
      className={style.projectCard}
      onMouseEnter={() => set({ s: 8 })}
      onMouseLeave={() => set({ s: 0 })}
    >
      <animated.div
        className={style.projectCardBg} style={{
        transform: bgStyle.s.interpolate(s => `perspective(500px) translateZ(${s}px)`),
      }} />
      <div className={style.projectContent}>
        <div className={style.cardleft}>
          <h2 className={style.title}>{title}</h2>
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
    </animated.div>
  )
}

function Project(props) {
  return (
    <TrackVisibility once partialVisibility>
      <ProjectInner {...props} />
    </TrackVisibility>
  )
}

export default function Home() {
  const annotatedRef = useRef();
  const annotated = useSpring({
    from: { x: 0 },
    to: { x: 50 },
    ref: annotatedRef,
  });
  const data = [{
    className: style.hello,
    content: (
      <>
        Hi, I'm Yifan Pan.
      </>
    )
  }, {
    className: style.intro,
    content: (
      <>
        I'm currently pursuing a master's degree in computer science at Northeastern University.
      </>
    ),
  }, {
    className: style.intro,
    content: (
      <>
        <animated.span style={{
          background: annotated.x.interpolate(x => (
            `rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(255, 255, 0) ${x}%, rgb(255, 255, 255, 0) ${x}%) repeat scroll 0% 0%`
          )),
        }}>
          Before that I was a self-taught front-end engineer. Except for being proficient in JavaScript and React, I'm learning Rust and back-end technologies and working towards being a full-stack engineer.
        </animated.span>
      </>
    ),
  }, {
    className: style.intro,
    content: (
      <>
      I love math, abstraction and its beautiful interplays with programming. In my spare time, I enjoy petting <Cat />, reading sci-fi novels and watching suspense movies.
      </>
    )
  }, {
    className: style.socialAccount,
    content: (
      <>
        <SocialAccount /><img src={resumeArrow} alt="resume arrow" className={style.resumeArrow}/>
      </>
    )
  }, {
    className: style.lastIntro,
    content: (
      <>
      You can read my resume,&emsp;&emsp;or take a look at some projects that I've been working on :)
      </>
    ),
  }];
  const trailRef = useRef();
  const trail = useTrail(data.length, {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    config: config.stiff,
    ref: trailRef,
  });
  useChain([trailRef, annotatedRef], [0, 0.3]);
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
      {trail.map((props, idx) => (
        <animated.p
          style={{
            opacity: props.opacity,
            transform: props.y.interpolate(y => `translate3d(0, ${y}px, 0)`),
          }}
          className={data[idx].className}
          key={idx}
        >
          {data[idx].content}
        </animated.p>
      ))}
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
        tags={['Go', 'MySQL', 'Redis', 'GraphQL', 'React', 'Apollo', 'React-Spring']}
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
