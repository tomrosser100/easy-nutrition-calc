import React from 'react'
import { useNavigate } from 'react-router'

export default ({
  labelId,
  descriptionId,
}: {
  labelId: string
  descriptionId: string
}) => {
  const navigate = useNavigate()

  return (
    <div>
      <h2 id={labelId}>Heading element: About my app</h2>
      <p id={descriptionId}>Hi and welcome to my app</p>
      <button onClick={() => navigate('/')}>
        Return
      </button>
    </div>
  )
}