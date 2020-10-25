import React, { Fragment, useState } from "react"
import LogoGithub from '../../static/logo_github.svg';
import LogoLinkedin from '../../static/logo_linkedin.svg';
import LogoMail from '../../static/logo_mail.svg';
import LogoGithubActive from '../../static/logo_github_active.svg';
import LogoLinkedinActive from '../../static/logo_linkedin_active.svg';
import LogoMailActive from '../../static/logo_mail_active.svg';
import LogoResume from '../../static/logo_resume.svg';
import LogoResumeActive from '../../static/logo_resume_active.svg';
import style from './social-account.module.css';

function IconLink({ src, activeSrc, alt, href }) {
  const [icon, updateIcon] = useState(src);
  return (
    <a
      className={style.linkButton}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseOver={() => updateIcon(activeSrc)}
      onFocus={() => updateIcon(activeSrc)}
      onMouseOut={() => updateIcon(src)}
      onBlur={() => updateIcon(src)}
    >
      <img
        src={icon}
        alt={alt}
      />
    </a>
  );
}

export default function SocialAccount() {
  return <Fragment>
    <IconLink
      src={LogoGithub}
      activeSrc={LogoGithubActive}
      alt="Github"
      href="https://github.com/catnipan"
    />
    <IconLink
      src={LogoLinkedin}
      activeSrc={LogoLinkedinActive}
      alt="LinkedIn"
      href="https://linkedin.com/in/yifanpan/"
    />
    <IconLink
      src={LogoMail}
      activeSrc={LogoMailActive}
      alt="Email"
      href="mailto:pan.yifa@northeastern.edu"
    />
    <IconLink
      src={LogoResume}
      activeSrc={LogoResumeActive}
      alt="Resume"
      href={`/resume.pdf?v=${Math.random()}`}
    />
  </Fragment>
}