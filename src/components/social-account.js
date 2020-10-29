import React, { Fragment, useState } from "react"
import { animated, useSpring } from 'react-spring';
import style from './social-account.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function IconLink({ icon, href }) {
  const [bgStyle, set] = useSpring(() => ({
    s: 0,
    config: {
      mass: 1,
      tension: 700,
      friction: 14,
    },
  }));
  return (
    <animated.a
      className={style.linkButton}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => set({ s: 80 })}
      onMouseLeave={() => set({ s: 0 })}
      style={{
        transform: bgStyle.s.interpolate(s => `perspective(500px) translateZ(${s}px)`),
      }}
    >
      <FontAwesomeIcon icon={icon} size="2x" color="#555" />
    </animated.a>
  )
}

export default function SocialAccount() {
  return <Fragment>
    <IconLink
      icon={faGithub}
      href="https://github.com/catnipan"
    />
    <IconLink
      icon={faLinkedinIn}
      href="https://linkedin.com/in/yifanpan/"
    />
    <IconLink
      icon={faAt}
      href="mailto:pan.yifa@northeastern.edu"
    />
    <IconLink
      icon={faFile}
      href={`/resume.pdf?v=${Math.random()}`}
    />
  </Fragment>
}