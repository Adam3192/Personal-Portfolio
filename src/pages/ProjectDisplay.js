import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
  const { id } = useParams()
  const project = ProjectList[id]

  return (
    <div className="project">
      <h1>{project.name}</h1>

      <a
        rel="noopener noreferrer nofollow"
        title={project.name}
        target="_blank"
        href={project.href}
      >
        <img alt="Project image" style={{ maxWidth: '600px' }} src={project.src} />
      </a>

      <p>
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
