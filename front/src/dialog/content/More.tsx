import React from 'react'
import { useActionData, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import eventEmitter from '../../eventEmitter'
import type { Nutrient, OrderedContribution } from '../../types'

export async function loader({ params }: { params: { nutrient?: Nutrient } }) {
  console.log('more loader fired')

  const response = await new Promise((resolve) => {
    if (!params.nutrient) throw new Error()

    eventEmitter.emit('fillMore', params.nutrient, (response: OrderedContribution) => {
      resolve(response)
    })
  }) as OrderedContribution
  console.log('loading', response)
  return response
}

export default ({
  labelId,
  descriptionId,
}: {
  labelId: string
  descriptionId: string
}) => {
  const { nutrient } = useParams()
  const error = useActionData() as { status: 'failed' }
  const orderedContribution = useLoaderData() as OrderedContribution
  const navigate = useNavigate()

  return (
    <div>
      <h2 id={labelId}>Your top {nutrient} contributors</h2>
      <p id={descriptionId}>Description element</p>
      <ol>
      {orderedContribution.map((entry, i) => (
        <li key={i}>
          {entry.name}, {entry.grams} grams
        </li>
      ))}
      </ol>
      <button onClick={() => navigate('/')}>Back</button>
        {error?.status && <p>Something went wrong...</p>}
    </div>
  )
}
