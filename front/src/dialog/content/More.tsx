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
import styled from 'styled-components'

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

const StyledMore = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.borderColour};
  border-radius: ${(props) => props.theme.borderRadius}px;
`

const StyledMoreHead = styled(StyledInfoHead)`
  border-bottom: 1px solid ${(props) => props.theme.borderColour};
`

const StyledOrderedList = styled.ol`
  list-style-position: outside;
  padding-right: 35px;
  border-radius: ${(props) => props.theme.borderRadius}px;
  border: 0.5px solid ${(props) => props.theme.borderColour};
`

const StyledListElement = styled.li`
  padding: 5px;
  margin: 10px;
`

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
    <StyledMore>
      <StyledMoreHead id={labelId}>
        <div>Your {nutrient} contributors</div>
      </StyledMoreHead>
      <StyledInfoBody id={descriptionId}>
        {orderedContribution.length === 0 ? (
          <div>You have no contributors listed for {nutrient}</div>
        ) : (
          <StyledOrderedList>
            {orderedContribution.length >= 1 &&
              orderedContribution.map((entry, i) => (
                <StyledListElement key={i}>
                  {entry.name}, {entry.grams}
                  {nutrient !== 'calories' && 'g'}
                </StyledListElement>
              ))}
          </StyledOrderedList>
        )}

        {/*<StyledListElement>Test entry 1, 123g</StyledListElement>
          <StyledListElement>Test entry 2, 533g</StyledListElement>
          <StyledListElement>Test entry 3, 888g</StyledListElement>*/}
      </StyledInfoBody>
      <StyledInfoFoot>
        <StyledButton onClick={() => navigate('/')}>Back</StyledButton>
      </StyledInfoFoot>
    </StyledMore>
  )
}

/*

        {orderedContribution.length === 0 ? (
          <div>You have no contributors listed for this nutrient</div>
        ) : (


        )}

        */
