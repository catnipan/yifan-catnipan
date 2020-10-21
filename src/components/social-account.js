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

function IconLink({ src, activeSrc, href }) {
  const [icon, updateIcon] = useState(src);
  return <a className={style.linkButton} href={href} target="_blank" rel="noreferrer">
    <img
      src={icon}
      alt=""
      onMouseOver={() => updateIcon(activeSrc)}
      onMouseOut={() => updateIcon(src)}
    />
  </a>
}

export default function SocialAccount() {
  return <Fragment>
    <IconLink
      src={LogoGithub}
      activeSrc={LogoGithubActive}
      href="https://github.com/catnipan"
    />
    <IconLink
      src={LogoLinkedin}
      activeSrc={LogoLinkedinActive}
      href="https://linkedin.com/in/yifanpan/"
    />
    <IconLink
      src={LogoMail}
      activeSrc={LogoMailActive}
      href="mailto:pan.yifa@northeastern.edu"
    />
    <IconLink
      src={LogoResume}
      activeSrc={LogoResumeActive}
      href="/resume.pdf"
    />
  </Fragment>
}