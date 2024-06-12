import React, { useState } from 'react'
import { nutrients } from '../../constants'
import type { ListElement } from '../../types'
import styled, { css } from 'styled-components'
import { StyledCentralised } from '../../styledComponents'

const StyledNutrientInputs = styled.div`
  background-color: rgb(0, 0, 255, 0.1);
  display: flex;
  flex-direction: column;
`
const StyledNutrientElement = styled.div<{ $reference?: boolean }>`
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;
  width: 100%;
  padding: 10px;
  background-color: rgb(0, 0, 255, 0.1);


  ${(props) => {
    switch (props.$reference) {
      case true:
        return css`
          grid-template-columns: 2fr 1fr;
        `
      default:
        return css`
          grid-template-columns: 1fr 1fr 1fr;
        `
    }
  }}
`
const StyledReferenceLabel = styled.label`
  display: grid;
  padding: 5px;
  height: 100%;
  width: 100%;
  text-align: right;
`

const StyledReferenceInput = styled.input`
  width: 40px;
  display: grid;
  place-self: center;
  text-align: center;
`

const StyledNutrientLabel = styled.label`
  padding-left: 5px;
  display: grid;
  align-self: center;
`

export const StyledDenominatedInputBox = styled(StyledCentralised)`
  justify-content: center;
`

const StyledNutrientInput = styled.input`
  width: 40px;
  text-align: center;
`

const StyledNutrientReference = styled.div`
  text-align: right;
  padding-right: 5px;
  display: grid;
  align-self: center;
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
        <StyledReferenceLabel>Reference portion size:</StyledReferenceLabel>
        <StyledDenominatedInputBox>
          <StyledReferenceInput
            disabled={buttonDisabled}
            type='number'
            min='0'
            name='refPortion'
            onChange={(e) => setRefPortion(e.target.value)}
            defaultValue={listElement && listElement?.refPortion}
            placeholder='0'
          />
          <div>g</div>
        </StyledDenominatedInputBox>
      </StyledNutrientElement>
      {nutrients.map((nutrient, i) => (
        <StyledNutrientElement>
          <StyledNutrientLabel>
            <div>{nutrient}</div>
          </StyledNutrientLabel>
          <StyledDenominatedInputBox>
            <StyledNutrientInput
              disabled={buttonDisabled}
              type='number'
              min='0'
              name={nutrient}
              placeholder='0'
              defaultValue={listElement && listElement?.[nutrient]}
            />
            <div>g</div>
          </StyledDenominatedInputBox>

          <StyledNutrientReference>
            per {refPortion ? refPortion : '0'}g
          </StyledNutrientReference>
        </StyledNutrientElement>
      ))}
    </StyledNutrientInputs>
  )
}
