import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
  const { id } = useParams()
  const project = ProjectList[id]

  return (
    <div id="phone" className="project">
      <h1>{project.name}</h1>
      <p className="style1">{project.description}</p>

      <a
        className="style3"
        rel="noopener noreferrer nofollow"
        title={project.name}
        target="_blank"
        href={project.href}
      >
        <img className="style4" alt="Project image" src={project.src} />
      </a>

      <p className="style2">
        <b>Skills:</b> {project.skills}
      </p>

      <a
        target="_blank"
        href={project.github}
        title={project.name}
        rel="noopener noreferrer nofollow"
      >
        <GitHubIcon />
      </a>
    </div>
  )
}

export default ProjectDisplay
