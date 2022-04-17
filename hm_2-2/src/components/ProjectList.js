import React from 'react'
import PropTypes from 'prop-types'

function ProjectList(props) {
    const {project} = props;
  return (
      <img src={project.img} alt={project.category} className='projectListImg' />
  )
}

ProjectList.propTypes = {
    project: PropTypes.object.isRequired,
}

export default ProjectList
