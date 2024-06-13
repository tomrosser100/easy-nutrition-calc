import React, { useState } from 'react'
import { nutrients } from '../../constants'
import type { ListElement } from '../../types'
import styled, { css } from 'styled-components'
import {
  StyledDenominatedBox,
  StyledDenominatedInput,
  StyledDenomination,
} from '../../styledComponents'

const StyledNutrientInputs = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.borderColour};
  border-radius: ${(props) => props.theme.borderRadius}px;
`
const StyledNutrientElement = styled.div<{ $reference?: boolean }>`
  display: grid;
  height: 100%;
  width: 100%;
  padding: ${(props) => props.theme.minorSpacing}px;

  ${(props) => {
    switch (props.$reference) {
      case true:
        return css`
          grid-template-columns: 2fr 1fr;
        `
      default:
        return css`
          grid-template-columns: 1fr 1fr 1fr;
          border-top: 0.5px solid ${props => props.theme.borderColour};
        `
    }
  }}
`
const StyledReferenceLabel = styled.label`
  display: grid;
  place-items: center end;
  height: 100%;
  width: 100%;
  padding-right: 5px;
`

const StyledNutrientLabel = styled.label`
  display: grid;
  place-items: center start;
  height: 100%;
  width: 100%;
`

const StyledNutrientReference = styled.div`
  display: grid;
  place-items: center end;
  height: 100%;
  width: 100%;
`

export default ({
  buttonDisabled,
  listElement,
}: {
  buttonDisabled: boolean
  listElement: ListElement
}) => {
  const [refPortion, setRefPortion] = useState(
    listElement ? listElement?.refPortion : '0'
  )

  return (
    <StyledNutrientInputs>
      <StyledNutrientElement $reference={true}>
        <StyledReferenceLabel>
          <div>Reference portion size:</div>
        </StyledReferenceLabel>
        <StyledDenominatedBox>
          <StyledDenominatedInput
            disabled={buttonDisabled}
            type='number'
            min='0'
            name='refPortion'
            onChange={(e) => setRefPortion(e.target.value)}
            defaultValue={listElement && listElement?.refPortion}
            placeholder='0'
          />
          <StyledDenomination>
            <div>g</div>
          </StyledDenomination>
        </StyledDenominatedBox>
      </StyledNutrientElement>
      {nutrients.map((nutrient, i) => (
        <StyledNutrientElement>
          <StyledNutrientLabel>
            <div>{nutrient}</div>
          </StyledNutrientLabel>
          <StyledDenominatedBox>
            <StyledDenominatedInput
              disabled={buttonDisabled}
              type='number'
              min='0'
              name={nutrient}
              placeholder='0'
              defaultValue={listElement && listElement?.[nutrient]}
            />
            {nutrient !== 'calories' ? (
              <StyledDenomination>
                <div>g</div>
              </StyledDenomination>
            ) : (
              <div></div>
            )}
          </StyledDenominatedBox>
          <StyledNutrientReference>
            <div>per {refPortion ? refPortion : '0'}g</div>
          </StyledNutrientReference>
        </StyledNutrientElement>
      ))}
    </StyledNutrientInputs>
  )
}
