import { navigate } from "gatsby"
import React from "react"
import { Redirect } from 'gatsby';
import { Helmet } from "react-helmet";
import style from "./layout.module.css"

export default function Resume() {
  navigate(`/resume.pdfv=?${Math.random()}`);
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