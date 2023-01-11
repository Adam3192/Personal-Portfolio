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
        title="Tweeter"
        target="_blank"
        href="https://youtu.be/nQaeL5m66mo"
      >
        <img
          alt="Tweeter"
          style={{ maxWidth: '600px' }}
          src="https://cdn.loom.com/sessions/thumbnails/65fff5f63bbd4c0485f6798c969cc544-with-play.gif"
        />
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
