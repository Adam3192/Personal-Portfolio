import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import YouTubeIcon from '@material-ui/icons/YouTube'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />

        <a
          target="_blank"
          href="https://www.linkedin.com/in/adam-dixon1"
          rel="noopener noreferrer nofollow"
        >
          <LinkedInIcon />
        </a>

        <a
          target="_blank"
          href="https://www.youtube.com/@adamdixon930"
          rel="noopener noreferrer nofollow"
        >
          <YouTubeIcon />
        </a>
      </div>
      <p> &copy; 2022 jadixon3192@gmail.com </p>
    </div>
  )
}

export default Footer
