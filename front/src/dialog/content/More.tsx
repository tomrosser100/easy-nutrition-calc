import React from 'react'
import {
  useActionData,
  useLoaderData,
  useNavigate,
  useParams,
} from 'react-router-dom'
import eventEmitter from '../../eventEmitter'
import type { Nutrient, OrderedContribution } from '../../types'
import {
  StyledInfo,
  StyledInfoBody,
  StyledInfoFoot,
  StyledInfoHead,
} from './About'
import { StyledButton } from '../../styledComponents'

export async function loader({ params }: { params: { nutrient?: Nutrient } }) {
  console.log('more loader fired')

  const response = (await new Promise((resolve) => {
    if (!params.nutrient) throw new Error()

    eventEmitter.emit(
      'fillMore',
      params.nutrient,
      (response: OrderedContribution) => {
        resolve(response)
      }
    )
  })) as OrderedContribution
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
  const orderedContribution = useLoaderData() as OrderedContribution
  const navigate = useNavigate()

  return (
    <StyledInfo>
      <StyledInfoHead id={labelId}>
        <div>{nutrient} contributors</div>
      </StyledInfoHead>
      <StyledInfoBody id={descriptionId}>
        {orderedContribution.length === 0 && (
          <div>You have no contributors listed for this nutrient</div>
          )}
        <ol>
          {orderedContribution.length >= 1 &&
            orderedContribution.map((entry, i) => (
              <li key={i}>
                {entry.name}, {entry.grams}g
              </li>
            ))}
        </ol>
      </StyledInfoBody>
      <StyledInfoFoot>
        <StyledButton onClick={() => navigate('/')}>Back</StyledButton>
      </StyledInfoFoot>
    </StyledInfo>
  )
}
