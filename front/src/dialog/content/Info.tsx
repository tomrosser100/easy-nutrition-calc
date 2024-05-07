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
      <h2 id={labelId}>Heading element: Where did I get this data?</h2>
      <p id={descriptionId}>Here's where I got the reference data from</p>
      <button onClick={() => navigate('/')}>
        Return
      </button>
    </div>
  )
}