import React from "react"
import { Typography } from "@mui/material";
function About(props) {
    return (
        <div id="about">
            <Typography variant="h4" className='topicHeaders'>
                About
            </Typography>
            <img src="https://i.postimg.cc/W3GKvMJN/profile.jpg" alt="profile" className="profile-pic" />
            <div className="about-me">
                <p>
                    I'm a software developer that can comfortably work in the frontend or backend. Working in close knit teams is where I thrive in. In software development there is always something to learn and I aim to end each day with a bit more knowledge.
                </p>
            </div>

        </div>
    )
}

export default About;