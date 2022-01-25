import React from "react"
import { Typography } from "@mui/material";
function About(props) {
    return (
        <div id="about">
            <Typography variant="h4" className='topicHeaders'>
                About
            </Typography>
            <div className="about-me-container">
                <img src="https://i.postimg.cc/W3GKvMJN/profile.jpg" alt="profile" className="profile-pic" />
                <div className="about-me">
                    <p>
                        Fullstack software developer, based in Georgia. 
                        Working in close knit teams is where I thrive. 
                        In software development there is always something 
                        to learn and I aim to end each day with a bit more knowledge.
                        Avid fan of making cold brew and using my moka pot. 
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;