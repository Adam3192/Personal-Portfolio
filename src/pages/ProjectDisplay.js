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
        target="_blank"
        href=""
        title="test"
        rel="noopener noreferrer nofollow"
      >
        <img src={project.image} alt="Test Image" />
      </a>

      <p>
        <b>Skills:</b> {project.skills}
      </p>

      <a
        target="_blank"
        href="https://github.com/Adam3192/Tweeter"
        title="Tweeter"
        rel="noopener noreferrer nofollow"
      >
        <GitHubIcon />
      </a>
    </div>
  )
}

export default ProjectDisplay
