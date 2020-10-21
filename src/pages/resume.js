import { navigate } from "gatsby"
import React, { useEffect } from "react"
import { Redirect } from 'gatsby';
import { Helmet } from "react-helmet";
import style from "./layout.module.css"

const version = Math.random();
export default function Resume() {
  useEffect(() => {
    navigate(`/resume.pdf?v=${version}`);
  })
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Redirecting...</title>
      </Helmet>
      <header className={style.header}>
        <p className={style.hello}>Redirecting...</p>
      </header>
    </div>
  )
}