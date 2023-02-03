import React from "react"
import Toolkit from "../Toolkit/toolkit"
import "./Footer.css"

const Footer = () => {
  return (
    <section className="footer">
      <Toolkit />
      <div className="copyright">
        <small>&copy; 2022 Western Developers Society.</small>
      </div>
    </section>
  )
}

export default Footer
