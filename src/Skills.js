import React from "react"
import { IconContext } from 'react-icons'
import { Typography } from "@mui/material"
import { DiTerminal, DiMongodb, DiJavascript1, DiNodejsSmall, DiBootstrap, DiGithubBadge, DiNpm, DiPostgresql, DiReact, DiVisualstudio } from 'react-icons/di'
function Skills(props) {
    return (
        <div id="skills">
            <Typography variant="h4" className='topicHeaders'>
                Tools/Technologies
            </Typography>
            <div className="allSkills">
                <IconContext.Provider value={{ size: "5em", className: "global-class-name"}}>
                    <DiJavascript1 />
                    <DiNodejsSmall />
                    <DiMongodb />
                    <DiGithubBadge />
                    <DiNpm />
                    <DiPostgresql />
                    <DiReact />
                    <DiVisualstudio />
                    <DiBootstrap />
                    <DiTerminal />
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Skills;