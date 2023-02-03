import React from "react"
import "./joinus.css"
import Footer from "../../Components/Footer/Footer"

export default function JoinUs() {
  return (
    <>
      <div className="join-container">
        <div className="join-top-container">
          <div className="joinus-title">Join Us</div>
          <div className="joinus-description">
            WDS is proud to host a variety of fun and informative events for
            everyone!
          </div>
        </div>
        <div className="">
          <div className="join-title">How to Join</div>

          <div className="positions-container">
            <div className="position">
              <div className="position-title">Executive</div>
              <div className="position-desc">
                Applications are now open for all Western students interested in
                joining our executive team. Directors will be hired for internal
                & external events, marketing, careers, and finance. In our
                Development portfolio we'll be hiring one community lead and 2
                tech leads.
              </div>
            </div>
            <div className="position">
              <div className="position-title">Development Teams</div>
              <div className="position-desc">
                Applications for 4 month development teams are now open for
                students interested in building real world applications for WDS,
                other Western Clubs and local London community groups. We'll be
                hiring Team Leads, Developers, and Designers!
              </div>
            </div>
            <div className="position">
              <div className="position-title">General Member</div>
              <div className="position-desc">
                Anyone at western is welcome to join our community as a general
                member by attending our events such as hackathons, networking
                events, workshops etc. Drop by any of our social media outlets
                to learn more about us, keep up-to-date with our upcoming
                events, or to chat with our members!
              </div>
            </div>
            <div className="application">
              <a
                href="https://docs.google.com/document/d/1TXgSZM_jRahlSbkKl6KlgrWkIIl25A6WAk1_ggYnSoA/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button>Apply Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
