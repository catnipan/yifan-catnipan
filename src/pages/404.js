import React from "react"
import { Helmet } from "react-helmet";
import style from "./layout.module.css"

export default function Page404() {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>404 Not found</title>
          <link rel="canonical" href="https://yifan.catnipan.com" />
      </Helmet>
      <header className={style.header}>
        <p className={style.hello}>404 Not found</p>
      </header>
    </div>
  )
}